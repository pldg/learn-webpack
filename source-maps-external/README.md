# Extract source maps

To extract source maps in a separate file set `devtool: 'source-map'`. You can use other types of source maps as well, see [devtool](https://webpack.js.org/configuration/devtool/#devtool) documentation

Because we inline css (with style-loader), source map for css is incorporated in `main.js.map`. In [separate-css-1](../separate-css-1) repository css source map is extracted in its own file

See also [source-maps-inline](../source-maps-inline) repository