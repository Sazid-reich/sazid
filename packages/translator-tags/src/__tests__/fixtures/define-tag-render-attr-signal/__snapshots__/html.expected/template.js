import { escapeXML as _escapeXML, markResumeNode as _markResumeNode, createRenderer as _createRenderer, register as _register, write as _write, nextScopeId as _nextScopeId, dynamicTagInput as _dynamicTagInput, peekNextScope as _peekNextScope, markResumeControlEnd as _markResumeControlEnd, writeExistingScope as _writeExistingScope, normalizeDynamicRenderer as _normalizeDynamicRenderer, writeEffect as _writeEffect, writeScope as _writeScope, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/html";
const _renderer = /* @__PURE__ */_createRenderer((input, _tagVar) => {
  const _scope0_id = _nextScopeId();
  const x = 1;
  const MyTag = {
    renderBody: _register(/* @__PURE__ */_createRenderer(({
      number
    }) => {
      const _scope1_id = _nextScopeId();
      _write(`<div>${_escapeXML(number)}${_markResumeNode(_scope1_id, "#text/0")}</div>`);
    }), "packages/translator-tags/src/__tests__/fixtures/define-tag-render-attr-signal/template.marko_1_renderer", _scope0_id)
  };
  const _dynamicScope = _peekNextScope();
  _dynamicTagInput(_dynamicScope, MyTag, {
    number: x
  });
  _write(`${_markResumeControlEnd(_scope0_id, "#text/0")}<button>${_escapeXML(x)}${_markResumeNode(_scope0_id, "#text/2")}</button>${_markResumeNode(_scope0_id, "#button/1")}`);
  _writeEffect(_scope0_id, "packages/translator-tags/src/__tests__/fixtures/define-tag-render-attr-signal/template.marko_0_x");
  _writeScope(_scope0_id, {
    "x": x,
    "#text/0!": _writeExistingScope(_dynamicScope),
    "#text/0(": _normalizeDynamicRenderer(MyTag)
  });
});
export default /* @__PURE__ */_createTemplate(_renderer, "packages/translator-tags/src/__tests__/fixtures/define-tag-render-attr-signal/template.marko");