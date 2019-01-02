# Separate css

[mini-css-extract-plugin](https://github.com/webpack-contrib/mini-css-extract-plugin) extract css into a separate files. Creates a css bundle for each entry point that import css files

## Notes

While `'eval'` source map works fine with style-loader and devServer, if you export css it's better to set `devtool: 'source-map'`

[devServer](https://webpack.js.org/configuration/dev-server/) doesn't work with *MiniCssExtractPlugin* yet (v0.4.0) but will be in future release. Use *style-loader* while working in devServer, also set [hot](https://webpack.js.org/configuration/dev-server/#devserver-hot) to `true` to enable HMR and enable `webpack.HotModuleReplacementPlugin`

## Further reading

See [separate-css-2](../separate-css-2) repository for more information