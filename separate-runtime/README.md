# Separate runtime

The [runtime](https://webpack.js.org/concepts/manifest/#runtime) describes what files webpack should load and the resolving logic needed to connect your modules

It's useful to extract runtime in a separate file to better caching your app

When runtime code change the contents of the bundle file change as well and must be cached again. This problem can be eliminated by extracting the runtime to a file of its own or by inline it to the *index.html*

Use [optimization.runtimeChunk](https://webpack.js.org/configuration/optimization/#optimization-runtimechunk) to separate runtime

## Further reading

[Separate runtime](https://survivejs.com/webpack/optimizing/separating-manifest/)