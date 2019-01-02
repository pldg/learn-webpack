# Dynamic import

[Code splitting](https://webpack.js.org/glossary/#c) refers to dividing your code into more smaller parts / [chunks](../chunks-types) which you can load on demand with [dynamic import](https://webpack.js.org/guides/code-splitting/#dynamic-imports) function. This is particular useful to improve the performance of your website or application (bandwidth, loading time and caching)

## How dynamic loading works

Dynamic import (also called [lazy loading](https://webpack.js.org/guides/lazy-loading/)) use [import()](https://webpack.js.org/api/module-methods/#import-) syntax, a function that takes a path to a module as argument and return a [promise](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Promise) which can then be resolved. In other words, it let you load a part of your app only when needed

```js
import('./foo').then(foo => console.log(foo.default));
```

Every time we use dynamic import, webpack produce a new chunk for that module (this happen also when you use it to import images or other files)

Note: because we're using webpack 4 we need `default` to log out the default export of the module, more information [here](https://medium.com/webpack/webpack-4-import-and-commonjs-d619d626b655)

## Dynamic load with expression

It's also possible to load a module dynamically. `import()` can resolve only certain kinds of dynamic expressions because the path must be statically analyzable. For example `import(myVar)` will fail because webpack requires at least some file location information

```js
import(`./modules/${someModule}`);
```

In this example I added two modules: *module1.js* and *module2.js*. Only the former one is loaded dynamically, but as you can see in the output folder both modules are begin exported. Inspect *0.js* and *1.js*. This happen because we use a dynamic expression to load the module. Using `webpackInclude` and `webpackExclude` options allows us to add regex patterns that reduce the files that webpack will bundle for this import

Read the highlight statements in webpack [documentation](https://webpack.js.org/api/module-methods/#import-) for more information

## Dynamic chunks naming

By default lazy loaded chunks (also called async chunks or normal chunks) are named with an id starting from 0: `0.js`, `1.js`, and so on

You can change their name using [chunkFilename](https://webpack.js.org/configuration/output/#output-chunkfilename), for example: `output.chunkFilename: 'lazy-chunk.[id].js'` where `[id]` returns the chunk id

To set a specific name for each lazy loaded module use a [special parameter](https://webpack.js.org/api/module-methods/#import-) inside the import statement like so: `/* webpackChunkName: "module_name" */` in this case `[id]` will be replaced with `module_name`. This commented parameters in webpack are commonly called "magic comments"

## Notes

Babel doesn't support dynamic import syntax out of the box, it needs [syntax-dynamic-import](https://babeljs.io/docs/plugins/syntax-dynamic-import/) plugin

`import()` with relative path doesn't work via `file://` protocol if called from a file that reside in a different directory. Go to [publicpath](../publicpath) repository for an example

## Further reading

See also my [lazy-load-image](../lazy-load-image) repository

[dynamic-imports](https://webpack.js.org/guides/code-splitting/#dynamic-imports)

[lazy-loading](https://webpack.js.org/guides/lazy-loading/)

[webpack-and-dynamic-imports-doing-it-right](https://medium.com/front-end-hacking/webpack-and-dynamic-impor-doing-it-right-72549ff49234)

[code-splitting](https://survivejs.com/webpack/building/code-splitting/)
