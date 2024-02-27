"use strict";

exports.__esModule = true;
exports.default = void 0;
var _index = require("marko/src/runtime/html/index.js");
var _dataMarko = _interopRequireDefault(require("marko/src/runtime/html/helpers/data-marko.js"));
var _attr = _interopRequireDefault(require("marko/src/runtime/html/helpers/attr.js"));
var _renderer = _interopRequireDefault(require("marko/src/runtime/components/renderer.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const _marko_componentType = "packages/translator-default/test/fixtures/no-update-modifier/template.marko",
  _marko_template = (0, _index.t)(_marko_componentType);
var _default = exports.default = _marko_template;
const _marko_component = {};
_marko_template._ = (0, _renderer.default)(function (input, out, _componentDef, _component, state, $global) {
  out.w(`<input${(0, _dataMarko.default)(out, _componentDef, {
    pa: {
      value: 1
    }
  })}${(0, _attr.default)("value", input.defaultValue)}>`);
}, {
  t: _marko_componentType,
  i: true,
  d: true
}, _marko_component);