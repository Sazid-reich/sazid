export const _template_ = "<p> </p>";
export const _walks_ = /* next(1), get, out(1) */"D l";
export const _setup_ = () => {};
import { data as _data, resetAbortSignal as _resetAbortSignal, getAbortSignal as _getAbortSignal, register as _register, queueEffect as _queueEffect, intersection as _intersection, value as _value, intersections as _intersections, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/dom";
const _effect = _scope => {
  const {
    name,
    write
  } = _scope;
  return () => {
    write(`${name} destroyed`);
  };
};
const _expr_name_write_effect = _register("packages/translator-tags/src/__tests__/fixtures/cleanup-single-child-if-deep/components/child.marko_0_name_write", _scope => {
  const {
    name,
    write
  } = _scope;
  write(`${name} mounted`);
  _getAbortSignal(_scope, 0).onabort = _effect(_scope);
});
const _expr_name_write = /* @__PURE__ */_intersection(2, _scope => {
  const {
    name,
    write
  } = _scope;
  _resetAbortSignal(_scope, 0);
  _queueEffect(_scope, _expr_name_write_effect);
});
export const _write_ = /* @__PURE__ */_value("write", null, () => _expr_name_write);
export const _name_ = /* @__PURE__ */_value("name", (_scope, name) => _data(_scope["#text/0"], name), () => _expr_name_write);
export const _input_ = /* @__PURE__ */_value("input", (_scope, input) => {
  _name_(_scope, input.name);
  _write_(_scope, input.write);
}, () => _intersections([_name_, _write_]));
export const _params__ = /* @__PURE__ */_value("_params_", (_scope, _params_) => _input_(_scope, _params_[0]), () => _input_);
export default /* @__PURE__ */_createTemplate(/* @__PURE__ */_createRenderer(_template_, _walks_, _setup_, void 0, void 0, () => _params__), "packages/translator-tags/src/__tests__/fixtures/cleanup-single-child-if-deep/components/child.marko");