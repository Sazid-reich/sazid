import { createRenderer as _createRenderer, register as _register, write as _write, nextScopeId as _nextScopeId, dynamicTagInput as _dynamicTagInput, peekNextScope as _peekNextScope, markResumeControlEnd as _markResumeControlEnd, writeExistingScope as _writeExistingScope, normalizeDynamicRenderer as _normalizeDynamicRenderer, markResumeNode as _markResumeNode, writeEffect as _writeEffect, writeScope as _writeScope, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/html";
const _renderer = /* @__PURE__ */_createRenderer((input, _tagVar) => {
  const _scope0_id = _nextScopeId();
  const tagName = "span";
  const className = "A";
  const _dynamicScope = _peekNextScope();
  _dynamicTagInput(_dynamicScope, tagName, {
    class: className
  }, _register(/* @__PURE__ */_createRenderer(() => {
    const _scope1_id = _nextScopeId();
    _write("body content");
  }), "packages/translator-tags/src/__tests__/fixtures/dynamic-native-dynamic-tag/template.marko_1_renderer", _scope0_id));
  _write(`${_markResumeControlEnd(_scope0_id, "#text/0")}<button></button>${_markResumeNode(_scope0_id, "#button/1")}`);
  _writeEffect(_scope0_id, "packages/translator-tags/src/__tests__/fixtures/dynamic-native-dynamic-tag/template.marko_0_tagName");
  _writeScope(_scope0_id, {
    "tagName": tagName,
    "className": className,
    "#text/0!": _writeExistingScope(_dynamicScope),
    "#text/0(": _normalizeDynamicRenderer(tagName)
  });
});
export default /* @__PURE__ */_createTemplate(_renderer, "packages/translator-tags/src/__tests__/fixtures/dynamic-native-dynamic-tag/template.marko");