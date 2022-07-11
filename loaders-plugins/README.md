# Loaders and Plugins

## What is a webpack loader

Out of the box webpack only understands javascript and json files. [Loaders](https://webpack.js.org/concepts/#loaders) allow you to process other type of assets.

Loaders can be configured in webpack config file using [`module.rules`](https://webpack.js.org/concepts/loaders/#configuration) array:

```js
module.exports = {
  module: {
    rules: [
      {
        // Match only those files using regex
        test: /\.js$/,
        // Exclude some directories from begin parsed by the loader
        exclude: (path) => path.match(/node_modules/);
        // Apply loader to the matched files
        use: "babel-loader"
      }
    ]
  }
}
```

You can chain multiple loaders:

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

To pass options to a loader you can use an object:

```js
module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              sourceMap: true
            }
          }
        ]
      }
    ]
  }
}
```

Loaders are evaluated from right-to-left or from bottom-to-top.

For in depth explanation read [babel](../babel/README.md) and [load-css](../load-css/README.md) examples.

## What is a plugin

Webpack [plugins](https://webpack.js.org/concepts/#plugins) can be used to perform a wider range of tasks compared to loaders.

Plugins can be configured in webpack config file by create a `new` istance of them in the `plugins` array:

```js
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  plugins: [new HtmlWebpackPlugin({ template: "./src/index.html" })],
};
```

For more info about html plugin read [html plugin template](../html-plugin-template/README.md) example.
