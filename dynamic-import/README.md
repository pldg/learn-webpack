# Dynamic import

If you want to improve the performance of your app you can use a technique called [code splitting](https://webpack.js.org/glossary/#c) to divide your assets into smaller one which you can load on demand using [dynamic import](https://webpack.js.org/guides/code-splitting/#dynamic-imports) (also called [lazy loading](https://webpack.js.org/guides/lazy-loading/)).

## How dynamic import works

To lazy load a module you use the [import()](https://webpack.js.org/api/module-methods/#import-1) function, a webpack specific feature that takes a path to a module as argument and return a [Promise](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Promise).

```js
import('./some-module').then(module => console.log(module.default));
```

Every time you use dynamic import webpack produce a new chunk for that module.

You can also [lazy load images](../lazy-load-image) and other type of assets.

## Using a variable inside dynamic import

To use [dynamic expressions](https://webpack.js.org/api/module-methods/#dynamic-expressions-in-import) inside `import()` webpack requires at least some file location information because the path must be statically analyzable:

```js
// `./modules/` is necessary for webpack to statically analyze the path
import(`./modules/${myModule}`);
```

In this case it'll produce a new chunk for each module inside *./modules/*.

## Configure dynamic import

You can use [magic comments](https://webpack.js.org/api/module-methods/#magic-comments) to futher optimize the dynamic import funcion.

## Explain this example

In this example there are two modules, *module-1.js* and *module-2.js*. Only the former one is loaded dynamically but as you can see in the output folder both modules are begin exported, *src_module-1_js.js* and *src_module-2_js.js*. This happen because we use a dynamic expression to load the module.

```txt
asset main.js 13.3 KiB [emitted] (name: main)
asset src_modules_module-1_js.js 646 bytes [compared for emit]
asset src_modules_module-2_js.js 646 bytes [compared for emit]
asset index.html 341 bytes [compared for emit]
runtime modules 6.51 KiB 9 modules
built modules 896 bytes [built]
  modules by path ./src/modules/ 240 bytes
    ./src/modules/ lazy ^\.\/.*$ namespace object 160 bytes [built] [code generated]
    ./src/modules/module-1.js 40 bytes [optional] [built] [code generated]
    ./src/modules/module-2.js 40 bytes [optional] [built] [code generated]
  modules by path ./src/*.js 656 bytes
    ./src/index.js 120 bytes [built] [code generated]
    ./src/lazy-load-module.js 536 bytes [built] [code generated]
webpack 5.45.1 compiled successfully in 233 ms
```

Open *index.html* and click the button, then check devtools console and network tabs.

## Notes

If you use babel for transpiling it needs [@babel/plugin-syntax-dynamic-import](https://babeljs.io/docs/plugins/syntax-dynamic-import/) plugin to support `import()` function.

## Further reading

- [SurviveJS - Code Splitting](https://survivejs.com/webpack/building/code-splitting/)
- [Webpack 4 Import and CommonJS](https://medium.com/webpack/webpack-4-import-and-commonjs-d619d626b655)
- [Webpack and Dynamic Imports doing it right](https://medium.com/front-end-hacking/webpack-and-dynamic-impor-doing-it-right-72549ff49234)
