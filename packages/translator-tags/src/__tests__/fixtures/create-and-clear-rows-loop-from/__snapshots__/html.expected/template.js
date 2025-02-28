import { write as _write, markResumeScopeStart as _markResumeScopeStart, escapeXML as _escapeXML, markResumeNode as _markResumeNode, markResumeControlEnd as _markResumeControlEnd, writeScope as _writeScope, nextScopeId as _nextScopeId, getScopeById as _getScopeById, forTo as _forTo, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/html";
const _renderer = /* @__PURE__ */_createRenderer((input, _tagVar) => {
  const _scope0_id = _nextScopeId();
  _write("<div>");
  let _k = 0;
  const _scope1_ = new Map();
  _forTo(input.to, input.from, input.step, n => {
    const _scope1_id = _nextScopeId();
    _write(`${_markResumeScopeStart(_scope1_id, _k++)}${_escapeXML(n)}${_markResumeNode(_scope1_id, "#text/0")}, `);
    _writeScope(_scope1_id, {});
    _scope1_.set(n, _getScopeById(_scope1_id));
  });
  _write(`${_markResumeControlEnd(_scope0_id, "#div/0")}</div>${_markResumeNode(_scope0_id, "#div/0")}`);
  _writeScope(_scope0_id, {
    "#div/0(": _scope1_.size ? _scope1_ : undefined
  });
});
export default /* @__PURE__ */_createTemplate(_renderer, "packages/translator-tags/src/__tests__/fixtures/create-and-clear-rows-loop-from/template.marko");