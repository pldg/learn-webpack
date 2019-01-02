# Separate css in a different folder

If you set MiniCssExtractPlugin output on a folder different from app root, you have to set [publicPath](https://github.com/webpack-contrib/mini-css-extract-plugin#configuration) accordingly (read comments in config file)

In this example `filename: 'css/[name].css'` will extract css to `dist/css/` folder, `publicPath: '../'` will add `../` at the begin of all css `url()`

## Further reading

Learn more about [publicPath](../publicpath)