import { escapeXML as _escapeXML, markResumeNode as _markResumeNode, write as _write, nextScopeId as _nextScopeId, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-fluurt/src/html";
const _renderer = /* @__PURE__ */_createRenderer((input, _tagVar, _scope0_) => {
  const _scope0_id = _nextScopeId();
  _write(`<div><span>${_escapeXML(input.x)}${_markResumeNode(_scope0_id, "#text/0")}</span></div>`);
});
export default /* @__PURE__ */_createTemplate(_renderer, "packages/translator/src/__tests__/fixtures/migrate-input/template.marko");