"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classnames2 = _interopRequireDefault(require("classnames"));

var React = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var __rest = void 0 && (void 0).__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};

var Flex = /*#__PURE__*/function (_React$Component) {
  _inherits(Flex, _React$Component);

  var _super = _createSuper(Flex);

  function Flex() {
    _classCallCheck(this, Flex);

    return _super.apply(this, arguments);
  }

  _createClass(Flex, [{
    key: "render",
    value: function render() {
      var _classnames;

      var _a = this.props,
          direction = _a.direction,
          wrap = _a.wrap,
          justify = _a.justify,
          align = _a.align,
          alignContent = _a.alignContent,
          className = _a.className,
          children = _a.children,
          prefixCls = _a.prefixCls,
          style = _a.style,
          restProps = __rest(_a, ["direction", "wrap", "justify", "align", "alignContent", "className", "children", "prefixCls", "style"]);

      var wrapCls = (0, _classnames2["default"])(prefixCls, className, (_classnames = {}, _defineProperty(_classnames, "".concat(prefixCls, "-dir-row"), direction === "row"), _defineProperty(_classnames, "".concat(prefixCls, "-dir-row-reverse"), direction === "row-reverse"), _defineProperty(_classnames, "".concat(prefixCls, "-dir-column"), direction === "column"), _defineProperty(_classnames, "".concat(prefixCls, "-dir-column-reverse"), direction === "column-reverse"), _defineProperty(_classnames, "".concat(prefixCls, "-nowrap"), wrap === "nowrap"), _defineProperty(_classnames, "".concat(prefixCls, "-wrap"), wrap === "wrap"), _defineProperty(_classnames, "".concat(prefixCls, "-wrap-reverse"), wrap === "wrap-reverse"), _defineProperty(_classnames, "".concat(prefixCls, "-justify-start"), justify === "start"), _defineProperty(_classnames, "".concat(prefixCls, "-justify-end"), justify === "end"), _defineProperty(_classnames, "".concat(prefixCls, "-justify-center"), justify === "center"), _defineProperty(_classnames, "".concat(prefixCls, "-justify-between"), justify === "between"), _defineProperty(_classnames, "".concat(prefixCls, "-justify-around"), justify === "around"), _defineProperty(_classnames, "".concat(prefixCls, "-align-start"), align === "start"), _defineProperty(_classnames, "".concat(prefixCls, "-align-center"), align === "center"), _defineProperty(_classnames, "".concat(prefixCls, "-align-end"), align === "end"), _defineProperty(_classnames, "".concat(prefixCls, "-align-baseline"), align === "baseline"), _defineProperty(_classnames, "".concat(prefixCls, "-align-stretch"), align === "stretch"), _defineProperty(_classnames, "".concat(prefixCls, "-align-content-start"), alignContent === "start"), _defineProperty(_classnames, "".concat(prefixCls, "-align-content-end"), alignContent === "end"), _defineProperty(_classnames, "".concat(prefixCls, "-align-content-center"), alignContent === "center"), _defineProperty(_classnames, "".concat(prefixCls, "-align-content-between"), alignContent === "between"), _defineProperty(_classnames, "".concat(prefixCls, "-align-content-around"), alignContent === "around"), _defineProperty(_classnames, "".concat(prefixCls, "-align-content-stretch"), alignContent === "stretch"), _classnames));
      return /*#__PURE__*/React.createElement("div", _extends({
        className: wrapCls,
        style: style
      }, restProps), children);
    }
  }]);

  return Flex;
}(React.Component);

exports["default"] = Flex;
Flex.defaultProps = {
  prefixCls: "pm-flexbox",
  align: "center"
};