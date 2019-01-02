# Use default optimizations with `mode`

[mode](https://webpack.js.org/concepts/mode/) tells webpack to use its [built-in optimizations](https://medium.com/webpack/webpack-4-mode-and-optimization-5423a6bc597a)

In this example `--mode` is set in CLI but you can also set it in Webpack config with the `mode` option

If `entry` point is omitted, your app files must go in `src` folder. When you run Webpack a `dist` folder with all the output assets will be created

To make the output cleaner to examine, pass `--devtool=false` parameter to webpack. Webpack generate eval based source maps by default and doing this will disable the behavior