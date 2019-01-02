# Inline source maps

By default Webpack 4 use [eval](https://webpack.js.org/configuration/devtool/) [source maps](https://webpack.js.org/guides/development/#using-source-maps). Open *dist/main.js* and search for "eval"

To enable source maps for **css** you must set `sourceMap: true` for every loaders. When [style-loader](https://github.com/webpack-contrib/style-loader#url) is used with sourceMap the css modules will be generated as `Blob`s

Generating source map increase build time

To extract source maps in a separate file see [source-maps-external](../source-maps-external) repository

See also [survivejs book - enabling source map](https://survivejs.com/webpack/building/source-maps/)