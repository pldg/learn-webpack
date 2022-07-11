# Working with sass stylesheets

## Configure webpack

Use [sass-loader](https://github.com/webpack-contrib/sass-loader) to parse sass files:

```js
module.exports = {
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          "style-loader",
          "css-loader",
          // Compiles SASS to CSS
          "sass-loader"
        ]
      }
    ]
  }
};
```

## Import scss from node_modules

The suggested way to import vendor stylesheet directly inside an entry point:

```js
// Load vendor stylesheet inside entry point (index.js)
import "bootstrap/scss/bootstrap.scss";
```

Load vendor stylesheets inside entry point is less buggy and [hot module replacement](https://webpack.js.org/guides/hot-module-replacement/) is way faster.

## Notes

If there are [errors in parsing `url()`](https://github.com/webpack-contrib/sass-loader#problems-with-url) inside scss files, install [resolve-url-loader](https://github.com/bholloway/resolve-url-loader/) which must be [placed between sass-loader and css-loader](https://github.com/bholloway/resolve-url-loader/blob/v5/packages/resolve-url-loader/README.md).

To import vendor stylesheets (from *node_modules*) inside an scss file you don't need the [tilde `~` char](../load-css/README.md#load-css-from-nodejs-modules) because import statements are parsed by sass-loader. Instead of this method, it's good practice to import vendor stylesheets directly inside an entry point.
