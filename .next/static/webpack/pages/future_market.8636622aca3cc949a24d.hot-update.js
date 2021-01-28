webpackHotUpdate_N_E("pages/future_market",{

/***/ "./common/store.js":
/*!*************************!*\
  !*** ./common/store.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/initializerDefineProperty */ \"./node_modules/@babel/runtime/helpers/esm/initializerDefineProperty.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/applyDecoratedDescriptor */ \"./node_modules/@babel/runtime/helpers/esm/applyDecoratedDescriptor.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_initializerWarningHelper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/initializerWarningHelper */ \"./node_modules/@babel/runtime/helpers/esm/initializerWarningHelper.js\");\n/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! mobx */ \"./node_modules/mobx/dist/mobx.esm.js\");\n\n\n\n\n\n\nvar _class, _descriptor, _descriptor2, _descriptor3, _temp;\n\n\nvar Store = (_class = (_temp = /*#__PURE__*/function () {\n  function Store() {\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(this, Store);\n\n    Object(_babel_runtime_helpers_esm_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, \"storedFetchData\", _descriptor, this);\n\n    Object(_babel_runtime_helpers_esm_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, \"storedWishMoney\", _descriptor2, this);\n\n    Object(_babel_runtime_helpers_esm_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, \"storedWishYear\", _descriptor3, this);\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(Store, [{\n    key: \"setData\",\n    value: function setData(stored_fetch_data) {\n      console.log(stored_fetch_data);\n      this.storedFetchData = storedFetchData;\n    }\n  }, {\n    key: \"setWishMoney\",\n    value: function setWishMoney(wishMoney) {\n      this.storedWishMoney = wishMoney;\n    }\n  }, {\n    key: \"setWishYear\",\n    value: function setWishYear(wishYear) {\n      this.storedWishYear = wishYear;\n    }\n  }]);\n\n  return Store;\n}(), _temp), (_descriptor = Object(_babel_runtime_helpers_esm_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_class.prototype, \"storedFetchData\", [mobx__WEBPACK_IMPORTED_MODULE_5__[\"observable\"]], {\n  configurable: true,\n  enumerable: true,\n  writable: true,\n  initializer: function initializer() {\n    return {};\n  }\n}), _descriptor2 = Object(_babel_runtime_helpers_esm_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_class.prototype, \"storedWishMoney\", [mobx__WEBPACK_IMPORTED_MODULE_5__[\"observable\"]], {\n  configurable: true,\n  enumerable: true,\n  writable: true,\n  initializer: function initializer() {\n    return '0';\n  }\n}), _descriptor3 = Object(_babel_runtime_helpers_esm_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_class.prototype, \"storedWishYear\", [mobx__WEBPACK_IMPORTED_MODULE_5__[\"observable\"]], {\n  configurable: true,\n  enumerable: true,\n  writable: true,\n  initializer: function initializer() {\n    return '0';\n  }\n}), Object(_babel_runtime_helpers_esm_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_class.prototype, \"setData\", [mobx__WEBPACK_IMPORTED_MODULE_5__[\"action\"]], Object.getOwnPropertyDescriptor(_class.prototype, \"setData\"), _class.prototype), Object(_babel_runtime_helpers_esm_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_class.prototype, \"setWishMoney\", [mobx__WEBPACK_IMPORTED_MODULE_5__[\"action\"]], Object.getOwnPropertyDescriptor(_class.prototype, \"setWishMoney\"), _class.prototype), Object(_babel_runtime_helpers_esm_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_class.prototype, \"setWishYear\", [mobx__WEBPACK_IMPORTED_MODULE_5__[\"action\"]], Object.getOwnPropertyDescriptor(_class.prototype, \"setWishYear\"), _class.prototype)), _class);\n/* harmony default export */ __webpack_exports__[\"default\"] = (new Store());\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tbW9uL3N0b3JlLmpzPzY1ZmEiXSwibmFtZXMiOlsiU3RvcmUiLCJzdG9yZWRfZmV0Y2hfZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJzdG9yZWRGZXRjaERhdGEiLCJ3aXNoTW9uZXkiLCJzdG9yZWRXaXNoTW9uZXkiLCJ3aXNoWWVhciIsInN0b3JlZFdpc2hZZWFyIiwib2JzZXJ2YWJsZSIsImFjdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7SUFFTUEsSzs7Ozs7Ozs7Ozs7Ozs0QkFRTUMsaUIsRUFBa0I7QUFDdEJDLGFBQU8sQ0FBQ0MsR0FBUixDQUFZRixpQkFBWjtBQUNBLFdBQUtHLGVBQUwsR0FBdUJBLGVBQXZCO0FBQ0g7OztpQ0FJWUMsUyxFQUFVO0FBQ25CLFdBQUtDLGVBQUwsR0FBdUJELFNBQXZCO0FBQ0g7OztnQ0FHV0UsUSxFQUFTO0FBQ2pCLFdBQUtDLGNBQUwsR0FBc0JELFFBQXRCO0FBQ0g7Ozs7c0tBcEJBRSwrQzs7Ozs7V0FBNkIsRTs7NkpBRTdCQSwrQzs7Ozs7V0FBNkIsRzs7NEpBQzdCQSwrQzs7Ozs7V0FBNEIsRzs7c0lBRTVCQywyQywyTkFPQUEsMkMsK05BS0FBLDJDO0FBUVcsbUVBQUlWLEtBQUosRUFBaEIiLCJmaWxlIjoiLi9jb21tb24vc3RvcmUuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge29ic2VydmFibGUsYWN0aW9ufSBmcm9tIFwibW9ieFwiO1xuXG5jbGFzcyBTdG9yZSB7XG5cbiAgICBAb2JzZXJ2YWJsZSBzdG9yZWRGZXRjaERhdGEgPSB7fSA7XG5cbiAgICBAb2JzZXJ2YWJsZSBzdG9yZWRXaXNoTW9uZXkgPSAnMCc7XG4gICAgQG9ic2VydmFibGUgc3RvcmVkV2lzaFllYXIgPSAnMCc7XG5cbiAgICBAYWN0aW9uXG4gICAgc2V0RGF0YShzdG9yZWRfZmV0Y2hfZGF0YSl7XG4gICAgICAgIGNvbnNvbGUubG9nKHN0b3JlZF9mZXRjaF9kYXRhKTtcbiAgICAgICAgdGhpcy5zdG9yZWRGZXRjaERhdGEgPSBzdG9yZWRGZXRjaERhdGE7XG4gICAgfVxuXG5cbiAgICBAYWN0aW9uXG4gICAgc2V0V2lzaE1vbmV5KHdpc2hNb25leSl7XG4gICAgICAgIHRoaXMuc3RvcmVkV2lzaE1vbmV5ID0gd2lzaE1vbmV5O1xuICAgIH1cblxuICAgIEBhY3Rpb25cbiAgICBzZXRXaXNoWWVhcih3aXNoWWVhcil7XG4gICAgICAgIHRoaXMuc3RvcmVkV2lzaFllYXIgPSB3aXNoWWVhcjtcbiAgICB9XG5cblxufVxuXG5leHBvcnQgZGVmYXVsdCAobmV3IFN0b3JlKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./common/store.js\n");

/***/ })

})