(self["webpackChunk"] = self["webpackChunk"] || []).push([["src_images_js"],{

/***/ "./src/generateImage.js":
/*!******************************!*\
  !*** ./src/generateImage.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lazyLoadImage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lazyLoadImage */ "./src/lazyLoadImage.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((container, imageName) => {
  const img = document.createElement("img");
  container.appendChild(img);

  (0,_lazyLoadImage__WEBPACK_IMPORTED_MODULE_0__["default"])(imageName, img);
});


/***/ }),

/***/ "./src/getImagesNames.js":
/*!*******************************!*\
  !*** ./src/getImagesNames.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => {
  const r = __webpack_require__("./src/images sync \\.jpg$");

  // Return an array list of filenames (with extension)
  const importAll = (r) => r.keys().map((file) => file.match(/[^\/]+$/)[0]);

  return importAll(r);
});


/***/ }),

/***/ "./src/images.js":
/*!***********************!*\
  !*** ./src/images.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _getImagesNames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getImagesNames */ "./src/getImagesNames.js");
/* harmony import */ var _generateImage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./generateImage */ "./src/generateImage.js");



const images = document.querySelector("#images");
const imagesNames = (0,_getImagesNames__WEBPACK_IMPORTED_MODULE_0__["default"])();

// Generate <img> element
// Lazy load each image and set its src attribute
// Append <img> to #images container
imagesNames.forEach((name) => (0,_generateImage__WEBPACK_IMPORTED_MODULE_1__["default"])(images, name));


/***/ }),

/***/ "./src/images lazy-once recursive ^\\.\\/.*$":
/*!*********************************************************!*\
  !*** ./src/images/ lazy-once ^\.\/.*$ namespace object ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./alice.jpg": "./src/images/alice.jpg",
	"./inferno.jpg": "./src/images/inferno.jpg",
	"./nebula.jpg": "./src/images/nebula.jpg"
};


function webpackAsyncContext(req) {
	return webpackAsyncContextResolve(req).then(id => {
		return __webpack_require__.t(id, 1 | 16);;
	});
}
function webpackAsyncContextResolve(req) {
	return Promise.resolve(/*! lazy-once context */).then(() => {
		if(!__webpack_require__.o(map, req)) {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		}
		return map[req];
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.resolve = webpackAsyncContextResolve;
webpackAsyncContext.id = "./src/images lazy-once recursive ^\\.\\/.*$";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/images sync \\.jpg$":
/*!**********************************************!*\
  !*** ./src/images/ sync nonrecursive \.jpg$ ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./alice.jpg": "./src/images/alice.jpg",
	"./inferno.jpg": "./src/images/inferno.jpg",
	"./nebula.jpg": "./src/images/nebula.jpg"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src/images sync \\.jpg$";

/***/ }),

/***/ "./src/lazyLoadImage.js":
/*!******************************!*\
  !*** ./src/lazyLoadImage.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((imageName, img) => {
  __webpack_require__("./src/images lazy-once recursive ^\\.\\/.*$")(`./${imageName}`)
    .then((src) => (img.src = src.default))
    .catch((err) => console.error(err));
});


/***/ }),

/***/ "./src/images/alice.jpg":
/*!******************************!*\
  !*** ./src/images/alice.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "73728f89fad1b84b9a3d.jpg";

/***/ }),

/***/ "./src/images/inferno.jpg":
/*!********************************!*\
  !*** ./src/images/inferno.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "0c9627955a614a979a10.jpg";

/***/ }),

/***/ "./src/images/nebula.jpg":
/*!*******************************!*\
  !*** ./src/images/nebula.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "0f7001a62be1d14e6b63.jpg";

/***/ })

}]);