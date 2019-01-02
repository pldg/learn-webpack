# Transpile javascript with Babel

[babel-loader](https://github.com/babel/babel-loader) allow you to transpile ES2015+ code to support older browsers

You'll need [babel-preset-env](https://babeljs.io/docs/en/next/babel-preset-env) to be able to transpile your javascript code. It can be configured to include only transforms needed for the browsers you want to support. See *babel.config.js*. This example only includes code transforms for IE >= 10, see `browserslist` key in `package.json`

By setting [modules](https://babeljs.io/docs/en/next/babel-preset-env#modules) to `false` you tell Babel to not transform ES2015 modules which are essential to Webpack for **tree shaking**

babel-preset-env can also be set to load the needed polyfills, see [babel-polyfill](../babel-polyfill) repository

Babel doesn't support [dynamic import](../dynamic-import) `import()` syntax out of the box, it needs [syntax-dynamic-import](https://babeljs.io/docs/en/babel-plugin-syntax-dynamic-import) plugin