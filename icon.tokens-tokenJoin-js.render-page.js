exports.ids = ["icon.tokens-tokenJoin-js"];
exports.modules = {

/***/ "./node_modules/@elastic/eui/es/components/icon/assets/tokens/tokenJoin.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@elastic/eui/es/components/icon/assets/tokens/tokenJoin.js ***!
  \*********************************************************************************/
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



var EuiIconTokenJoin = function EuiIconTokenJoin(_ref) {
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
    clipRule: "evenodd",
    d: "M7.5 4.5v1.025c0 1.269-1.185 1.908-2.112 1.737a.75.75 0 100 1.475c.927-.17 2.112.47 2.112 1.739v1.023h4v-1.005a2.5 2.5 0 010-4.988V4.5h-4zM13 4a1 1 0 00-1-1H7a1 1 0 00-1 1v1.525c0 .172-.172.293-.341.262a2.25 2.25 0 100 4.426c.17-.031.341.09.341.262V12a1 1 0 001 1h5a1 1 0 001-1V9.004a.16.16 0 00-.04-.105c-.109-.125-.594-.16-.732-.068a1 1 0 110-1.662c.138.092.623.057.732-.068a.16.16 0 00.04-.105V4z"
  }));
};

var icon = EuiIconTokenJoin;
EuiIconTokenJoin.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "EuiIconTokenJoin"
};

/***/ })

};;
//# sourceMappingURL=icon.tokens-tokenJoin-js.render-page.js.map