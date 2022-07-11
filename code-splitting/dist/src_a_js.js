(self["webpackChunk"] = self["webpackChunk"] || []).push([["src_a_js"],{

/***/ "./src/a.js":
/*!******************!*\
  !*** ./src/a.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _small_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./small-component */ "./src/small-component.js");
/* harmony import */ var _small_component__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_small_component__WEBPACK_IMPORTED_MODULE_0__);
// This is a regular import, and because it's smaller then 20kb it'll be bundle
// inside src_a_js.js. Instead, if you import large-component.js it'll be
// splitted in a different file


console.log("a.js loaded!");


/***/ }),

/***/ "./src/small-component.js":
/*!********************************!*\
  !*** ./src/small-component.js ***!
  \********************************/
/***/ ((module) => {

console.log("small-component.js loaded!");

module.exports = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";


/***/ })

}]);