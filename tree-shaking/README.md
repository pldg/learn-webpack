# Tree shaking

[Tree Shaking](https://webpack.js.org/guides/tree-shaking/) is a term commonly used in the JavaScript context for dead-code elimination. It relies on the static structure of ES2015 module syntax, `import` and `export`. Webpack analyze the module definition statically without running it, and see which parts of the code are being used and which are not

You must enable `UglifyJSPlugin` to remove the unused code. `UglifyJSPlugin` is enable by default when `--mode=production`

## Explain this repository

You must run `webpack` in **production mode** to enable UglifyJSPlugin, then inspect the results

- Even if *helpers.js* is imported two times (in *a.js* and *b.js*) the code will not be duplicated in the bundle
- Because we import only `foo` from *tree-shaking.js* the bundle will only contain `console.log('foo')` but miss `console.log('bar')`

## Notes

If you use Babel you must set present-env [modules](https://babeljs.io/docs/plugins/preset-env/#modules) option to `false`, which tell Babel to not transform ES2015 module definition

To tree shake dependencies that has ES2015 module definition use [babel-plugin-transform-imports](https://www.npmjs.com/package/babel-plugin-transform-imports)

## Further reading

[Demonstrating tree shaking](https://survivejs.com/webpack/optimizing/tree-shaking/)