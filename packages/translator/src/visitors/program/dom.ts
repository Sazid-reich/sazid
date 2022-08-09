import { types as t } from "@marko/compiler";
import { callRuntime } from "../../util/runtime";
import { forEachSectionIdReverse, getSectionId } from "../../util/sections";
import { getClosures, getSignal, writeSignals } from "../../util/apply-hydrate";
import * as writer from "../../util/writer";
import { visit } from "../../util/walks";
import { scopeIdentifier } from ".";

export default {
  translate: {
    exit(program: t.NodePath<t.Program>) {
      visit(program);
      const sectionId = getSectionId(program);
      const templateIdentifier = t.identifier("template");
      const walksIdentifier = t.identifier("walks");
      const setupIdentifier = t.identifier("setup");
      const attrsSignalIdentifier = t.identifier("attrs");
      const { attrs } = program.node.extra;
      const { walks, writes, apply } = writer.getSectionMeta(sectionId);

      forEachSectionIdReverse((childSectionId) => {
        writeSignals(childSectionId);

        if (childSectionId !== sectionId) {
          const { walks, writes, apply } =
            writer.getSectionMeta(childSectionId);
          const closures = getClosures(childSectionId);
          const identifier = writer.getRenderer(childSectionId);
          program.node.body.push(
            t.variableDeclaration("const", [
              t.variableDeclarator(
                identifier,
                callRuntime(
                  "createRenderer",
                  writes,
                  walks,
                  apply,
                  closures.length && t.arrayExpression(closures)
                )
              ),
            ])
          );
        }
      });

      if (attrs) {
        const exportSpecifiers: t.ExportSpecifier[] = [];
        const subscribers: t.Identifier[] = [];
        const statements: t.Statement[] = [];

        for (const name in attrs.bindings) {
          const bindingIdentifier = attrs.bindings[name];
          const signalIdentifier = getSignal(
            sectionId,
            bindingIdentifier.extra.reserve
          ).identifier;
          exportSpecifiers.push(
            t.exportSpecifier(
              signalIdentifier,
              bindingIdentifier.extra!.reserve!.exportIdentifier!
            )
          );
          subscribers.push(signalIdentifier);
          statements.push(
            t.expressionStatement(
              callRuntime(
                "setSource",
                scopeIdentifier,
                signalIdentifier,
                bindingIdentifier
              )
            )
          );
        }

        program.node.body.push(
          t.exportNamedDeclaration(
            t.variableDeclaration("const", [
              t.variableDeclarator(
                attrsSignalIdentifier,
                callRuntime(
                  "destructureSources",
                  t.arrayExpression(subscribers),
                  t.arrowFunctionExpression(
                    [scopeIdentifier, attrs.var as any],
                    t.blockStatement(statements)
                  )
                )
              ),
            ])
          ),
          t.exportNamedDeclaration(null, exportSpecifiers)
        );
      }

      program.node.body.push(
        t.exportNamedDeclaration(
          t.variableDeclaration("const", [
            t.variableDeclarator(
              templateIdentifier,
              writes || t.stringLiteral("")
            ),
          ])
        ),
        t.exportNamedDeclaration(
          t.variableDeclaration("const", [
            t.variableDeclarator(walksIdentifier, walks || t.stringLiteral("")),
          ])
        ),
        t.exportNamedDeclaration(
          t.variableDeclaration("const", [
            t.variableDeclarator(
              setupIdentifier,
              t.isNullLiteral(apply) || !apply
                ? t.functionExpression(null, [], t.blockStatement([]))
                : apply
            ),
          ])
        )
      );

      program.node.body.push(
        t.exportDefaultDeclaration(
          callRuntime(
            "createRenderFn",
            templateIdentifier,
            walksIdentifier,
            setupIdentifier,
            attrs! && attrsSignalIdentifier
          )
        )
      );
    },
  },
};
