# Separate runtime

The [runtime](https://webpack.js.org/concepts/manifest/#runtime) describes what files webpack should load and the resolving logic needed to connect all modules.

It's useful to extract runtime in a separate file to for [caching](../caching/README.md).

Use [`optimization.runtimeChunk`](https://webpack.js.org/configuration/optimization/#optimization-runtimechunk) to separate runtime:

```js
module.exports = {
  optimization: {
    runtimeChunk: "single"
  }
}
```

## Further reading

- [Bundle Splitting](../bundle-splitting/README.md)
- [SurviveJS - Separate Runtime](https://survivejs.com/webpack/optimizing/separating-manifest/)
