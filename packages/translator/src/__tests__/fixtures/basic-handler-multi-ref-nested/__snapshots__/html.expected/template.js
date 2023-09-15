import { escapeXML as _escapeXML, markResumeNode as _markResumeNode, write as _write, nextScopeId as _nextScopeId, writeEffect as _writeEffect, writeScope as _writeScope, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-fluurt/src/html";
const _renderer = /* @__PURE__ */_createRenderer((input, _tagVar, _scope0_) => {
  const _scope0_id = _nextScopeId();
  const a = [0];
  const b = 1;
  _write(`<button>${_escapeXML(a.join(""))}${_markResumeNode(_scope0_id, "#text/1")}</button>${_markResumeNode(_scope0_id, "#button/0")}`);
  _writeEffect(_scope0_id, "packages/translator/src/__tests__/fixtures/basic-handler-multi-ref-nested/template.marko_0_a_b");
  _writeScope(_scope0_id, {
    "a": a,
    "b": b
  }, _scope0_);
});
export default /* @__PURE__ */_createTemplate(_renderer, "packages/translator/src/__tests__/fixtures/basic-handler-multi-ref-nested/template.marko");