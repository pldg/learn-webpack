# The `mode` option

From Webpack 4 you can set [`mode`](https://webpack.js.org/configuration/mode/) to tell webpack to use [built in optimizations](https://medium.com/webpack/webpack-4-mode-and-optimization-5423a6bc597a).

Setting `mode` will expose `process.env.NODE_ENV` environment variable which can be used to create [different webpack configurations](../multiple-configurations/README.md) or in your app at compile time using [DefinePlugin](https://webpack.js.org/plugins/define-plugin/).

## Explain this example

Run *package.json* scripts:

```json
"scripts": {
  "dev": "webpack --mode development",
  "prod": "webpack --mode production"
}
```

And inspect results *dist/main.js* bundle.

## Notes

If [entry point](https://webpack.js.org/concepts/entry-points/) is omitted your app files must go in *src* folder, when you run webpack a *dist* folder with all the output assets will be created.
