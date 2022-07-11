# Load polyfills with Babel

A [polyfill](https://en.wikipedia.org/wiki/Polyfill_(programming)) is a pice of code that is used to provide a backwards compatible version of a feature. In web development a polyfill allow you to enable a modern feature to work in older browsers that do not support it natively.

Polyfills should be loaded and executed before the feature you want to patch. You can import polyfills on top of your app, or if you use webpack you can set them to be the first entry point, or to maximize performance you can lazy load them.

In this example [@babel/preset-env](https://babeljs.io/docs/en/babel-preset-env) and [core-js](https://github.com/zloirock/core-js) are used to load polyfills.

## Testing different babel configurations

- Set [useBuiltIns](https://babeljs.io/docs/en/babel-preset-env#usebuiltins) to configure how babel handles polyfills.
- Select the browsers you want to target with [browserslist](https://github.com/browserslist/browserslist).
- `npm install core-js --save`.
- Import all `core-js` library or specific part of it.

All the builds below are compiled in development mode by running `npm run dev`.

### Load all polyfills for specific browsers

- Set `useBuiltIns` to `"entry"` which will add all polyfills of the targeting browsers.
- Import core-js `import "core-js/stable"` in your app before the feature you want to patch (e.g. import it at top of main entry point), remember to import it only once in your app to avoid duplications.

If you set `"browserslist": "last 2 Chrome versions"` and run the build:

```txt
asset main.js 145 KiB [emitted] (name: main)
asset src_bar_js.js 322 bytes [emitted]
asset src_foo_js.js 322 bytes [emitted]
```

*main.js* contains polyfills for the last 2 chrome versions.

If you set `"browserslist": "ie 11"` and run the build:

```txt
asset main.js 860 KiB [emitted] (name: main)
asset src_bar_js.js 337 bytes [emitted]
asset src_foo_js.js 337 bytes [emitted]
```

*main.js* contains polyfills for ie 11, babel also transpile ES6 syntax inside *src_bar_js.js* and *src_foo_js.js*.

### Automatically polyfills only used features

- Set `useBuiltIns` to `"usage"` which will add specific imports for polyfills only for the features that are used in the app.
- Remove `import "core-js/stable"` because babel will handles imports.

If you set `browserslist: "last 2 Chrome versions"` and run the build:

```txt
asset main.js 12.7 KiB [emitted] (name: main)
asset src_bar_js.js 322 bytes [compared for emit]
asset src_foo_js.js 322 bytes [compared for emit]
```

The last 2 chrome versions support `Promise` and `Set` therefor polyfill are not emitted.

If you set `"browserslist": "ie 11"` and run the build:

```txt
asset main.js 177 KiB [emitted] (name: main)
asset vendors-node_modules_core-js_modules_es_set_js.js 28.2 KiB [emitted] (id hint: vendo
rs)
asset src_bar_js.js 2.88 KiB [emitted]
asset src_foo_js.js 2.88 KiB [emitted]
```

### Manually import polyfills

To avoid loading unecessary polyfills you can import them manually, for example by adding a new webpack entry point `polyfills: ["core-js/features/promise", "core-js/features/set]`.

## Notes

By default [core-js sets polyfills only when they are required](https://github.com/zloirock/core-js#configurable-level-of-aggressiveness).

If you want to polyfill generators and async function use [regenerator-runtime](https://www.npmjs.com/package/regenerator-runtime) (read [corejs#babelpolyfill](https://github.com/zloirock/core-js#babelpolyfill) for more info).

## Tips

You can run `npx browserslist` to get a list of browsers your project supports.

## Alternative method for loading polyfills

Try [polyfill.io](https://polyfill.io/) service, which accepts a request for a set of browser features and returns only the polyfills that are needed by the requesting browser.

## Further reading

- [SurviveJS - Polyfilling Features](https://survivejs.com/webpack/loading/javascript/#polyfilling-features)
- [Webpack Guides - Shimming Loading Polyfills](https://webpack.js.org/guides/shimming/#loading-polyfills)
