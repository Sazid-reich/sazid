import { escapeXML as _escapeXML, markResumeNode as _markResumeNode, SYMBOL_OWNER as _SYMBOL_OWNER, markResumeControlSingleNodeEnd as _markResumeControlSingleNodeEnd, write as _write, nextScopeId as _nextScopeId, writeScope as _writeScope, maybeFlush as _maybeFlush, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-fluurt/src/html";
const _renderer = /* @__PURE__ */_createRenderer((input, _tagVar, _scope0_) => {
  const _scope0_id = _nextScopeId();
  const arrA = [1, 2, 3];
  const _forScopeIds = [],
    _scope1_ = new Map();
  let _i = 0;
  for (const val of arrA) {
    const _scope1_id = _nextScopeId();
    let i = _i++;
    _forScopeIds.push(_scope1_id);
    _write(`<div>${_escapeXML(i)}${_markResumeNode(_scope1_id, "#text/0")}: <!>${_escapeXML(val)}${_markResumeNode(_scope1_id, "#text/1")}</div>`);
    _writeScope(_scope1_id, (_s => (_scope1_.set(i, _s), _s))({
      [_SYMBOL_OWNER]: _scope0_id
    }));
    _maybeFlush();
  }
  const arrB = [1, 2, 3];
  _write(`${_markResumeControlSingleNodeEnd(_scope0_id, "#text/0", _forScopeIds)}`);
  const _forScopeIds2 = [],
    _scope2_ = new Map();
  let _i2 = 0;
  for (const val of arrB) {
    const _scope2_id = _nextScopeId();
    let i = _i2++;
    _forScopeIds2.push(_scope2_id);
    _write(`<div>${_escapeXML(i)}${_markResumeNode(_scope2_id, "#text/0")}: <!>${_escapeXML(val)}${_markResumeNode(_scope2_id, "#text/1")}</div>`);
    _writeScope(_scope2_id, (_s2 => (_scope2_.set(i, _s2), _s2))({
      [_SYMBOL_OWNER]: _scope0_id
    }));
    _maybeFlush();
  }
  _write(`${_markResumeControlSingleNodeEnd(_scope0_id, "#text/1", _forScopeIds2)}`);
  _writeScope(_scope0_id, {
    "#text/0(": _scope1_.size ? _scope1_ : undefined,
    "#text/1(": _scope2_.size ? _scope2_ : undefined
  }, _scope0_);
});
export default /* @__PURE__ */_createTemplate(_renderer, "packages/translator/src/__tests__/fixtures/for-tag-with-state/template.marko");