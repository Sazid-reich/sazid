export const _template_ = "<div><!></div>";
export const _walks_ = /* next(1), replace, out(1) */"D%l";
export const _setup_ = () => {};
import { data as _data, createRenderer as _createRenderer, dynamicClosure as _dynamicClosure, registerSubscriber as _registerSubscriber, register as _register, conditional as _conditional, closure as _closure, inConditionalScope as _inConditionalScope, dynamicSubscribers as _dynamicSubscribers, intersections as _intersections, value as _value, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/dom";
const _value2$ifBody = _registerSubscriber("packages/translator-tags/src/__tests__/fixtures/toggle-nested/template.marko_3_value2/subscriber", /* @__PURE__ */_dynamicClosure("value2", (_scope, value2) => _data(_scope["#text/0"], value2), _scope => _scope._._));
const _ifBody3 = _register("packages/translator-tags/src/__tests__/fixtures/toggle-nested/template.marko_3_renderer", /* @__PURE__ */_createRenderer("<span> </span>", /* next(1), get */"D ", void 0, () => [_value2$ifBody]));
const _value1$ifBody = _registerSubscriber("packages/translator-tags/src/__tests__/fixtures/toggle-nested/template.marko_2_value1/subscriber", /* @__PURE__ */_dynamicClosure("value1", (_scope, value1) => _data(_scope["#text/0"], value1), _scope => _scope._._));
const _ifBody2 = _register("packages/translator-tags/src/__tests__/fixtures/toggle-nested/template.marko_2_renderer", /* @__PURE__ */_createRenderer("<span> </span>", /* next(1), get */"D ", void 0, () => [_value1$ifBody]));
const _if$ifBody2 = /* @__PURE__ */_conditional("#text/1");
const _if$ifBody = /* @__PURE__ */_conditional("#text/0");
const _value2$ifBody2 = /* @__PURE__ */_closure("value2", (_scope, value2) => _if$ifBody2(_scope, value2 ? _ifBody3 : null), void 0, () => _if$ifBody2);
const _value1$ifBody2 = /* @__PURE__ */_closure("value1", (_scope, value1) => _if$ifBody(_scope, value1 ? _ifBody2 : null), void 0, () => _if$ifBody);
const _ifBody = _register("packages/translator-tags/src/__tests__/fixtures/toggle-nested/template.marko_1_renderer", /* @__PURE__ */_createRenderer("<!><!><!><!>", /* replace, over(1), replace */"D%b%D", void 0, () => [_value2$ifBody2, _value1$ifBody2]));
const _if = /* @__PURE__ */_conditional("#text/0");
export const _value2_ = /* @__PURE__ */_value("value2", null, () => _intersections([_inConditionalScope(_value2$ifBody2, "#text/0"), _dynamicSubscribers("value2")]));
export const _value1_ = /* @__PURE__ */_value("value1", null, () => _intersections([_inConditionalScope(_value1$ifBody2, "#text/0"), _dynamicSubscribers("value1")]));
export const _show_ = /* @__PURE__ */_value("show", (_scope, show) => _if(_scope, show ? _ifBody : null), () => _if);
export const _input_ = /* @__PURE__ */_value("input", (_scope, input) => {
  _show_(_scope, input.show);
  _value1_(_scope, input.value1);
  _value2_(_scope, input.value2);
}, () => _intersections([_show_, _value1_, _value2_]));
export const _params__ = /* @__PURE__ */_value("_params_", (_scope, _params_) => _input_(_scope, _params_[0]), () => _input_);
export default /* @__PURE__ */_createTemplate(/* @__PURE__ */_createRenderer(_template_, _walks_, _setup_, void 0, void 0, () => _params__), "packages/translator-tags/src/__tests__/fixtures/toggle-nested/template.marko");