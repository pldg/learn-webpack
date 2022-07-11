# Separate css

Use [mini-css-extract-plugin](https://github.com/webpack-contrib/mini-css-extract-plugin) to extract css into a separate files.

## Basic Configuration

```js
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  plugins: [new MiniCssExtractPlugin()],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },
};
```

## Extract multiple css files

Every entry point that import stylesheets will generate a new bundle css in the output directory.

## Working with source maps

Set css-loaders to emit source maps:

```js
{
  loader: "css-loader",
  options: {
    sourceMap: true,
  }
}
```

Use devtool `"source map"` to extract source maps into a separate file:

```js
module.exports = {
  devtool: "source-map"
}
```

When you start a development server you might want to use `"style-loader"` instead of MiniCssExtractPlugin and set `devtool: "eval"`, this will speed up compilation time.

## Change css output directory

Use MiniCssExtractPlugin [filename](https://github.com/webpack-contrib/mini-css-extract-plugin#filename) option.

The following example will output css inside *dist/css/* folder:

```js
plugins: [
  new MiniCssExtractPlugin({
    // [name] is replaced with the name of css file, [contenthash] add an hash
    // for caching (hash change when file contents change)
    filename: "css/[name]-[contenthash].css"
  })
]
```

Sometimes if you change css output directory you may see 404 errors when loading resources (like images, fonts, etc), in this case use [options.publicPath](../publicpath/README.md) to rewrite urls (most of the times `output.publicPath: "/"` works fine). MiniCssExtractPlugin also have [options.publicPath](https://github.com/webpack-contrib/mini-css-extract-plugin#publicpath).

## Extract vendor css

Use [SplitChunksPlugin](https://webpack.js.org/plugins/split-chunks-plugin/):

```js
module.exports: {
  optimization: {
    splitChunks: {
      // Include all types of chunks
      chunks: "all"
    }
  }
}
```
