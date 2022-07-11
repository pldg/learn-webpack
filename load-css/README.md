# Load css

## Configure webpack to process stylesheets

To load css use [css-loader](https://github.com/webpack-contrib/css-loader) and [style-loader](https://github.com/webpack-contrib/style-loader):

- css-loader resolve `@imports` and `url()` inside css files and insert the result as string inside the javascript bundle.
- style-loader take the css resolved by css-loader and insert a `<style>` tag inside `<head>`.

Keep in mind the [loaders evaluation order](https://survivejs.com/webpack/loading/loader-definitions/#loader-evaluation-order). Loaders are evaluated from right to left (or from bottom to top). In this case css-loader must be executed before style-loader:

```js
module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  }
}
```

## Load css in your app

Import stylesheets in your app entry point: `import "./style.css"` inside *src/index.js*. Webpack will parse the file and process the imported assets with their corresponding loaders.

## Load css from nodejs modules

Inside a css file, to import stylesheets directly from *node_modules*: `@import "~bootstrap/dist/css/bootstrap.min.css"`. Paths that start with `~` are [resolved by css-loader](https://github.com/webpack-contrib/css-loader#import). If you use [postcss-import](https://github.com/postcss/postcss-import) you don't need `~`: `@import "bootstrap.css"` (with or without *.css* extension).

Inside an entry point, to import stylesheets from *node_modules*: `import "bootstrap/dist/css/bootstrap.min.css"`. Use this method if you encounter any error, for example source maps reference could be incorrect if a vendor from node_modules is imported inside a css file (read [load-sass](../load-sass/README.md) repository for more info).

## Enable devserver hot module replacement

Configure [dev-server](https://webpack.js.org/configuration/dev-server/) to enable [HMR](https://webpack.js.org/guides/hot-module-replacement/):

```js
module.exports = {
  devServer: {
    hot: true
  }
}
```

This option allow the server to update without a full page refresh when a css file is modified. It works by automatically apply HotModuleReplacementPlugin.
