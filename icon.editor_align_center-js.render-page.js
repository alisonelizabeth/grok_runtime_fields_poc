exports.ids = ["icon.editor_align_center-js"];
exports.modules = {

/***/ "./node_modules/@elastic/eui/es/components/icon/assets/editor_align_center.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@elastic/eui/es/components/icon/assets/editor_align_center.js ***!
  \************************************************************************************/
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



var EuiIconEditorAlignCenter = function EuiIconEditorAlignCenter(_ref) {
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
    d: "M5 4V3h6v1H5zM3 7V6h10v1H3zm2 3V9h6v1H5zm-2 3v-1h10v1H3z"
  }));
};

var icon = EuiIconEditorAlignCenter;
EuiIconEditorAlignCenter.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "EuiIconEditorAlignCenter"
};

/***/ })

};;
//# sourceMappingURL=icon.editor_align_center-js.render-page.js.map