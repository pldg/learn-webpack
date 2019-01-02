# Polyfills with Babel

To enable polyfill set [useBuiltIns](https://babeljs.io/docs/en/next/babel-preset-env.html#usebuiltins) to `entry` and import [babel-polyfill](http://babeljs.io/docs/en/next/babel-polyfill) at top of your app

**Important:** require babel-polyfill only once in your app

babel-polyfill can also be set in your app entry point, in this example for convenience we import it in `index.js`

babel-preset-env rewrites the import based on your `browserslist` definition and loads only the polyfills that are needed for that browsers

## Alternative solutions for loading polyfills

Use [core-js](https://github.com/zloirock/core-js) (which babel use itself) and manually load the polyfills you need

Use [polyfill.io](https://polyfill.io/) to load only the necessary polyfills for the browser, and even query the one you needs as seen in this [examples](https://polyfill.io/v2/docs/examples#aliases)

## Further reading

How to [enabling presets and plugins per environment](https://survivejs.com/webpack/loading/javascript/#enabling-presets-and-plugins-per-environment)