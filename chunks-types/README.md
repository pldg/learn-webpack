# Chunks types

A [chunk](https://webpack.js.org/glossary/#c) can refer to a single file/module from your app or to a bundle emitted by Webpack which contains multiple modules

An **entry chunk** is an emitted file which contains the webpack runtime code. They must always be executed first. If you set a file in [entry points](https://webpack.js.org/concepts/entry-points/) it's considered an entry chunk

An **initial chunk** is loaded synchronously however doesn't contain the runtime code. Loading an initial chunk must always happen after its entry chunk is loaded first. This loads synchronously after the entry chunk has parsed and evaluated in the browser

A **normal chunk** or **async chunk** are always lazy loaded / asynchronous / [imported dynamically](../dynamic-import). For example when I use `import()` webpack will separate any of the modules into a separate normal chunk

## Further reading

[Chunk objects](https://webpack.js.org/api/stats/#chunk-objects)

[Chunks types and bundle](https://github.com/webpack/webpack.js.org/issues/970#issuecomment-305525560)

[What are module chunk and bundle in webpack](https://stackoverflow.com/questions/42523436/what-are-module-chunk-and-bundle-in-webpack/48024612)