# Bundle splitting 5

With the new Webpack 4 chunk graph there are no longer parent-child relationships between chunks as it was in Webpack <= v3. Now we can split any chunk without risking to break the chunk graph

A [cacheGroups](https://webpack.js.org/plugins/split-chunks-plugin/#splitchunks-cachegroups) define rules for how Webpack should group chunks into output files. A chunk can be referenced in multiple cache groups. Each cacheGroups keys refer to the name of the created bundle

There are some [default cacheGroups configuration](https://gist.github.com/sokra/1522d586b8e5c0f5072d7565c2bee693#configurate-cache-groups) out of the box. Don't try to optimize manually without measuring. The defaults are chosen to fit best practices of web performance

## Explain this repository

`dist/entry1.js` and `dist/entry2.js` comes from entry points

*lazy.js* is extracted in `dist/0.js`. If you inspect an entry point you see: `__webpack_require__.e(/*! import() */ 0).then(__webpack_require__.t.bind(null, /*! ./chunks/lazy */ "./src/chunks/lazy.js", 7))` which means that `dist/0.js` (aka `lazy.js`) is begin required inside that module

*large-shared-component.js* (and its *dependency.js*) is extracted in `dist/commons.js` because its shared between entry points and its larger then 30kb

*React* is extracted in `dist/vendors.js` because its from *node_modules*

## Further reading

[the-100-correct-way-to-split-your-chunks-with-webpack](https://hackernoon.com/the-100-correct-way-to-split-your-chunks-with-webpack-f8a9df5b7758)