# Chunks types

A [chunk](https://webpack.js.org/glossary/#c) can refer to a single module (file) from your app or to a bundle emitted by Webpack which contains multiple modules:

- An **entry chunk** is an emitted file which contains the webpack runtime code. They must be executed first. If you set a file in [entry points](https://webpack.js.org/concepts/entry-points/) it's considered an entry chunk.
- An **initial chunk** is loaded synchronously using `import "./some-module"`, however doesn't contain the runtime code. Loading an initial chunk must always happen after its entry chunk is loaded first. This loads synchronously after the entry chunk has parsed and evaluated in the browser.
- An **async chunk** is lazy loaded. For example when using `import("./some-module")` webpack will separate any of the modules into a chunk wich will be loaded asynchronously. See [dynamic-import](../dynamic-import) for an example.

## Further reading

- [Chunk Objects](https://webpack.js.org/api/stats/#chunk-objects)
- [Chunks Types and Bundle](https://github.com/webpack/webpack.js.org/issues/970#issuecomment-305525560)
- [What are Module Chunk and Bundle in Webpack](https://stackoverflow.com/questions/42523436/what-are-module-chunk-and-bundle-in-webpack/48024612)