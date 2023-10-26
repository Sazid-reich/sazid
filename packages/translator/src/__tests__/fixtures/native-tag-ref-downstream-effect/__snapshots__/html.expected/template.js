import { markResumeNode as _markResumeNode, write as _write, writeEffect as _writeEffect, nextScopeId as _nextScopeId, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-fluurt/src/html";
const _renderer = /* @__PURE__ */_createRenderer((input, _tagVar) => {
  const _scope0_id = _nextScopeId();
  const el = () => {
    throw new Error("Cannot reference DOM node from server");
  };
  _write(`<div></div>${_markResumeNode(_scope0_id, "#div/0")}`);
  if (true) {
    const _scope1_id = _nextScopeId();
    _writeEffect(_scope1_id, "packages/translator/src/__tests__/fixtures/native-tag-ref-downstream-effect/template.marko_1");
  }
});
export default /* @__PURE__ */_createTemplate(_renderer, "packages/translator/src/__tests__/fixtures/native-tag-ref-downstream-effect/template.marko");