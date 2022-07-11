# Code minification

## Minify javascript

Webpack v5 comes with the latest [terser-webpack-plugin](https://webpack.js.org/plugins/terser-webpack-plugin/) out of the box (no need to install it).

Running webpack in production mode will enable minification by default.

To remove `console.log()` statements add [`drop_console`](https://github.com/terser/terser#compress-options) to [`terserOptions`](https://webpack.js.org/plugins/terser-webpack-plugin/#terseroptions).

## Minify css

Use [css-minimizer-webpack-plugin](https://webpack.js.org/plugins/css-minimizer-webpack-plugin/) to minify and remove duplicates css.

```js
optimization: {
  minimizer: [
    // Tells webpack@5 to extend defaults minimizer options
    `...`,
    new CssMinimizerPlugin()
  ]
}
```

This config will enable css optimization only in production mode.

## Minify html

Use [`HtmlWebpackPlugin.minify`](https://github.com/jantimon/html-webpack-plugin#minification) to minimize html.

## Note

To enable minification in development set [`optimization.minimize: true`](https://webpack.js.org/configuration/optimization/#optimizationminimize).

You can override the default minimizer with [`optimization.minimizer`](https://webpack.js.org/configuration/optimization/#optimizationminimizer) option.

Source maps like [`eval` don't work](https://webpack.js.org/plugins/terser-webpack-plugin/#note-about-source-maps) with minimizer enable.
