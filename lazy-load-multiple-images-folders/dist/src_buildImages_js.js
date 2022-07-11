(self["webpackChunk"] = self["webpackChunk"] || []).push([["src_buildImages_js"],{

/***/ "./src/buildImages.js":
/*!****************************!*\
  !*** ./src/buildImages.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildImages)
/* harmony export */ });
/* harmony import */ var _getImagesNames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getImagesNames */ "./src/getImagesNames.js");


const imagesContainer = document.querySelector("#images");
const imagesNames = [(0,_getImagesNames__WEBPACK_IMPORTED_MODULE_0__.getImagesNames_1)(), (0,_getImagesNames__WEBPACK_IMPORTED_MODULE_0__.getImagesNames_2)()];

function buildImages(id) {
  const currentImageFolder = imagesNames[parseInt(id) - 1];

  currentImageFolder.forEach((imageName) => {
    const img = document.createElement("img");

    imagesContainer.appendChild(img);

    __webpack_require__("./src/images lazy-once recursive ^\\.\\/.*\\/.*$")(`./${id}/${imageName}`)
      .then((src) => (img.src = src.default))
      .catch((err) => console.error(err));
  });
}


/***/ }),

/***/ "./src/getImagesNames.js":
/*!*******************************!*\
  !*** ./src/getImagesNames.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getImagesNames_1": () => (/* binding */ getImagesNames_1),
/* harmony export */   "getImagesNames_2": () => (/* binding */ getImagesNames_2)
/* harmony export */ });
function getImagesNames_1() {
  const r = __webpack_require__("./src/images/1 sync \\.jpg$");
  return getFilenames(r);
}

function getImagesNames_2() {
  const r = __webpack_require__("./src/images/2 sync \\.jpg$");
  return getFilenames(r);
}

function getFilenames(r) {
  // Return an array list of filenames (with extension)
  const importAll = (r) => r.keys().map((file) => file.match(/[^\/]+$/)[0]);
  return importAll(r);
}


/***/ }),

/***/ "./src/images/1 sync \\.jpg$":
/*!************************************************!*\
  !*** ./src/images/1/ sync nonrecursive \.jpg$ ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./alice.jpg": "./src/images/1/alice.jpg",
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

/***/ "./src/images/2 sync \\.jpg$":
/*!************************************************!*\
  !*** ./src/images/2/ sync nonrecursive \.jpg$ ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

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

/***/ "./src/images lazy-once recursive ^\\.\\/.*\\/.*$":
/*!*************************************************************!*\
  !*** ./src/images/ lazy-once ^\.\/.*\/.*$ namespace object ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./1/alice.jpg": "./src/images/1/alice.jpg",
	"./1/nebula.jpg": "./src/images/1/nebula.jpg",
	"./2/doré-inferno-dante.jpg": "./src/images/2/doré-inferno-dante.jpg",
	"./2/waterhouse-miranda.jpg": "./src/images/2/waterhouse-miranda.jpg"
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
webpackAsyncContext.id = "./src/images lazy-once recursive ^\\.\\/.*\\/.*$";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/images/1/alice.jpg":
/*!********************************!*\
  !*** ./src/images/1/alice.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "73728f89fad1b84b9a3d.jpg";

/***/ }),

/***/ "./src/images/1/nebula.jpg":
/*!*********************************!*\
  !*** ./src/images/1/nebula.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "0f7001a62be1d14e6b63.jpg";

/***/ }),

/***/ "./src/images/2/doré-inferno-dante.jpg":
/*!*********************************************!*\
  !*** ./src/images/2/doré-inferno-dante.jpg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "0c9627955a614a979a10.jpg";

/***/ }),

/***/ "./src/images/2/waterhouse-miranda.jpg":
/*!*********************************************!*\
  !*** ./src/images/2/waterhouse-miranda.jpg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "08b5bae29ab24ce24487.jpg";

/***/ })

}]);