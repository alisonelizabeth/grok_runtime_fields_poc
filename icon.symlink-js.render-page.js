exports.ids = ["icon.symlink-js"];
exports.modules = {

/***/ "./node_modules/@elastic/eui/es/components/icon/assets/symlink.js":
/*!************************************************************************!*\
  !*** ./node_modules/@elastic/eui/es/components/icon/assets/symlink.js ***!
  \************************************************************************/
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



var EuiIconSymlink = function EuiIconSymlink(_ref) {
  var title = _ref.title,
      titleId = _ref.titleId,
      props = _objectWithoutProperties(_ref, ["title", "titleId"]);

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", _extends({
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-labelledby": titleId
  }, props), title ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", {
    id: titleId
  }, title) : null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    clipRule: "evenodd",
    d: "M10.8 0H2a1 1 0 00-1 1v8l1-1V1h8v3.5a.5.5 0 00.5.5H14v10H2v-1a3.5 3.5 0 013.5-3.5H8V13l3-3-3-3v2.5H5.5A4.5 4.5 0 001 14v1a1 1 0 001 1h12a1 1 0 001-1V4.429c0-.256-.098-.503-.274-.689l-3.2-3.428A1.002 1.002 0 0010.8 0z"
  }));
};

var icon = EuiIconSymlink;
EuiIconSymlink.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "EuiIconSymlink"
};

/***/ })

};;
//# sourceMappingURL=icon.symlink-js.render-page.js.map