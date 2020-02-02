(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./src/buildImages.js":
/*!****************************!*\
  !*** ./src/buildImages.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return buildImages; });
/* harmony import */ var _getImagesNames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getImagesNames */ "./src/getImagesNames.js");
/* harmony import */ var _generateImage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./generateImage */ "./src/generateImage.js");



const imagesContainer = document.querySelector('#images');

const imagesNames = [
  Object(_getImagesNames__WEBPACK_IMPORTED_MODULE_0__["getImagesNames_1"])(),
  Object(_getImagesNames__WEBPACK_IMPORTED_MODULE_0__["getImagesNames_2"])()
];

function buildImages (id) {
  const currentImageFolder = imagesNames[parseInt(id) - 1];
  currentImageFolder.forEach(name => Object(_generateImage__WEBPACK_IMPORTED_MODULE_1__["default"])(imagesContainer, id, name));
}


/***/ }),

/***/ "./src/generateImage.js":
/*!******************************!*\
  !*** ./src/generateImage.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lazyLoadImage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lazyLoadImage */ "./src/lazyLoadImage.js");


/* harmony default export */ __webpack_exports__["default"] = ((container, id, imageName) => {
  const img = document.createElement('img');
  container.appendChild(img);

  Object(_lazyLoadImage__WEBPACK_IMPORTED_MODULE_0__["default"])(id, imageName, img);
});

/***/ }),

/***/ "./src/getImagesNames.js":
/*!*******************************!*\
  !*** ./src/getImagesNames.js ***!
  \*******************************/
/*! exports provided: getImagesNames_1, getImagesNames_2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getImagesNames_1", function() { return getImagesNames_1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getImagesNames_2", function() { return getImagesNames_2; });
function getImagesNames_1 () {
  const r = __webpack_require__("./src/images/1 sync \\.jpg$");
  return getFilenames(r);
}

function getImagesNames_2 () {
  const r = __webpack_require__("./src/images/2 sync \\.jpg$");
  return getFilenames(r);
}

function getFilenames(r) {
  // return an array list of filenames (with extension)
  const importAll = (r) => r.keys().map(file => file.match(/[^\/]+$/)[0]);
  return importAll(r);
}

/***/ }),

/***/ "./src/images lazy-once recursive ^\\.\\/.*\\/.*$":
/*!************************************************************!*\
  !*** ./src/images lazy-once ^\.\/.*\/.*$ namespace object ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./1/alice.jpg": "./src/images/1/alice.jpg",
	"./1/kitten.jpg": "./src/images/1/kitten.jpg",
	"./1/nebula.jpg": "./src/images/1/nebula.jpg",
	"./2/doré-inferno-dante.jpg": "./src/images/2/doré-inferno-dante.jpg",
	"./2/waterhouse-miranda.jpg": "./src/images/2/waterhouse-miranda.jpg"
};


function webpackAsyncContext(req) {
	return webpackAsyncContextResolve(req).then(__webpack_require__);
}
function webpackAsyncContextResolve(req) {
	return Promise.resolve(/*! lazy-once context */).then(function() {
		if(!__webpack_require__.o(map, req)) {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		}
		return map[req];
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.resolve = webpackAsyncContextResolve;
webpackAsyncContext.id = "./src/images lazy-once recursive ^\\.\\/.*\\/.*$";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/images/1 sync \\.jpg$":
/*!***********************************************!*\
  !*** ./src/images/1 sync nonrecursive \.jpg$ ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./alice.jpg": "./src/images/1/alice.jpg",
	"./kitten.jpg": "./src/images/1/kitten.jpg",
	"./nebula.jpg": "./src/images/1/nebula.jpg"
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
webpackContext.id = "./src/images/1 sync \\.jpg$";

/***/ }),

/***/ "./src/images/1/alice.jpg":
/*!********************************!*\
  !*** ./src/images/1/alice.jpg ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "alice.887f.jpg");

/***/ }),

/***/ "./src/images/1/kitten.jpg":
/*!*********************************!*\
  !*** ./src/images/1/kitten.jpg ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/jpeg;base64,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");

/***/ }),

/***/ "./src/images/1/nebula.jpg":
/*!*********************************!*\
  !*** ./src/images/1/nebula.jpg ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "nebula.7055.jpg");

/***/ }),

/***/ "./src/images/2 sync \\.jpg$":
/*!***********************************************!*\
  !*** ./src/images/2 sync nonrecursive \.jpg$ ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./doré-inferno-dante.jpg": "./src/images/2/doré-inferno-dante.jpg",
	"./waterhouse-miranda.jpg": "./src/images/2/waterhouse-miranda.jpg"
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
webpackContext.id = "./src/images/2 sync \\.jpg$";

/***/ }),

/***/ "./src/images/2/doré-inferno-dante.jpg":
/*!*********************************************!*\
  !*** ./src/images/2/doré-inferno-dante.jpg ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "doré-inferno-dante.7b31.jpg");

/***/ }),

/***/ "./src/images/2/waterhouse-miranda.jpg":
/*!*********************************************!*\
  !*** ./src/images/2/waterhouse-miranda.jpg ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "waterhouse-miranda.e3dd.jpg");

/***/ }),

/***/ "./src/lazyLoadImage.js":
/*!******************************!*\
  !*** ./src/lazyLoadImage.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ((id, imageName, img) => {
  __webpack_require__("./src/images lazy-once recursive ^\\.\\/.*\\/.*$")(`./${id}/${imageName}`)
  .then(src => img.src = src.default)
  .catch(err => console.error(err));
});

/***/ })

}]);