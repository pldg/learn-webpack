# Tree Shaking

[Tree Shaking](https://webpack.js.org/guides/tree-shaking/) is a technique that allow the developer to remove the unused part of an app. This method is also called dead-code elimination, it's very useful to optimize the performance of an app.

Webpack relies on the static structure of the javascript module syntax, `import` and `export`, to analyze the app without running it and see which parts of the code are being used and which are not. After the build process only the used part of your app will appear in the bundle.

## How to enable tree shaking

Webpack 5 comes with tree shaking build in and pre-configured, you don't need to install additional plugins but you have to run webpack in [production mode](../mode) to make it works.

## Explain this example

The file *src/tree-shaking.js* does export two functions: `export { foo, bar }` while *src/index.js* import only one function: `import { foo } from './tree-shaking'`.

If you run webpack in *production mode* with `npm run prod`, the bundle will contains only contain `foo` and not `bar` thanks to the three shaking technique:

```js
(()=>{"use strict";console.log("foo!"),console.log("index.js loaded!")})();
```

If you run webpack in *developer mode* with `npm run dev`, the bundle will contains both `foo` and `bar` beacuse three shaking is disabled:

<details>
<summary>Click to see bundle result</summary>

```js
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/tree-shaking.js":
/*!*****************************!*\
  !*** ./src/tree-shaking.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "foo": () => (/* binding */ foo),
/* harmony export */   "bar": () => (/* binding */ bar)
/* harmony export */ });
const foo = () => console.log('foo!');
const bar = () => console.log('bar!');



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tree_shaking__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tree-shaking */ "./src/tree-shaking.js");
// Thanks to "tree shaking" functionality, you should see only `foo` and not
// `bar` when running the build using production mode


(0,_tree_shaking__WEBPACK_IMPORTED_MODULE_0__.foo)();

console.log('index.js loaded!');
})();

/******/ })()
;
```

</details>

## Note

If you use [babel](../babel) three shaking should work by default, if there are problems you can set babel [modules](https://babeljs.io/docs/en/next/babel-preset-env#modules) option to `false` which tell babel to not transform ES2015 module definition. You may also want to use [babel-plugin-transform-imports](https://www.npmjs.com/package/babel-plugin-transform-imports) to load only specific part of an ES2015 library.

## Further reading

[SurviveJS - Demonstrating Tree Shaking](https://survivejs.com/webpack/optimizing/tree-shaking/)
