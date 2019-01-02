# Code minification

## Minify javascript

If we run `webpack --mode="production"` the code will be minimized by default using [uglifyjs-webpack-plugin](https://github.com/webpack-contrib/uglifyjs-webpack-plugin)

To output source map we set `devtool: 'source-map'`. Webpack will output source maps only with default settings, if you use `optimization.minimizer` to set UglifyWebpackPlugin you must enable its `sourceMap: true` plugin option

`uglifyOptions.compress.drop_console: true` will remove `console.log` from your code, but setting `sourceMap: true` will disable `compress.drop_console` option

Disable minify with `optimization.minimize: false` or tweak the settings even more with [minimizer](https://webpack.js.org/configuration/optimization/#optimization-minimizer) option

## Minify css

Use [OptimizeCSSAssetsPlugin](https://github.com/NMFR/optimize-css-assets-webpack-plugin) to minify and remove duplicates css. This plugin rely on [cssnano](https://github.com/ben-eb/cssnano) to process css

Setting `optimization.minimizer` overrides the defaults provided by webpack, so make sure to also specify a JS minimizer (for example *UglifyWebpackPlugin*)

To output external css source maps you must set `cssProcessorOptions`, see optimize-css-assets-webpack-plugin [issue #53](https://github.com/NMFR/optimize-css-assets-webpack-plugin/issues/53)

## Minify html

Use `HtmlWebpackPlugin.minify` to minimize html, full list of [minify options](https://github.com/kangax/html-minifier#options-quick-reference)