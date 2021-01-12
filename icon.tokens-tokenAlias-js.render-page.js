exports.ids = ["icon.tokens-tokenAlias-js"];
exports.modules = {

/***/ "./node_modules/@elastic/eui/es/components/icon/assets/tokens/tokenAlias.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@elastic/eui/es/components/icon/assets/tokens/tokenAlias.js ***!
  \**********************************************************************************/
/*! exports provided: icon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "icon", function() { return icon; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



var EuiIconTokenAlias = function EuiIconTokenAlias(_ref) {
  var title = _ref.title,
      titleId = _ref.titleId,
      props = _objectWithoutProperties(_ref, ["title", "titleId"]);

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", _extends({
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-labelledby": titleId
  }, props), title ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", {
    id: titleId
  }, title) : null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    fillRule: "evenodd",
    d: "M9.075 6.953a.5.5 0 11-.707.707 1.5 1.5 0 00-2.122 0L4.125 9.782a1.5 1.5 0 102.121 2.121l1.145-1.144a.5.5 0 01.707.707L6.953 12.61a2.5 2.5 0 11-3.535-3.535l2.121-2.122a2.5 2.5 0 013.536 0zm3.535-3.535a2.5 2.5 0 010 3.535L10.49 9.075a2.5 2.5 0 01-3.536 0 .5.5 0 11.707-.708 1.5 1.5 0 002.122 0l2.121-2.12a1.5 1.5 0 10-2.121-2.122L8.637 5.269a.5.5 0 11-.707-.707l1.145-1.144a2.5 2.5 0 013.535 0z"
  }));
};

var icon = EuiIconTokenAlias;
EuiIconTokenAlias.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "EuiIconTokenAlias"
};

/***/ })

};;
//# sourceMappingURL=icon.tokens-tokenAlias-js.render-page.js.map