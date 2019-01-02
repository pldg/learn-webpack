# Bundle splitting 2

Bundle splitting in this example runs with default SplitChunksPlugin configuration

## Explain this repository

Because *large-shared-component.js* is larger then 30kb and it's shared between both import calls, a separate chunk `a~b.js` is created which contains *large-shared-component.js* and all its dependencies

Because *React* is from *node_modules* it's extracted in a separate file `vendors~react.js`

## Notes

Note the use of [webpackChunkName](https://webpack.js.org/api/module-methods/#import-) in the comment. This will cause our separate files to be named `[name].js` instead of just `[id].js`

If you use a regular import syntax (instead of [dynamic import](../dynamic-import)) to require a module, that module will be treated as an entry chunk and it'll be bundle inside `main.js` (instead of begin split in a separate file)

If you want to split all chunks types set `optimization.splitChunks.chunks: 'all'`. This is the recommended configuration. Go to [bundle-splitting-3](../bundle-splitting-3) for an example

## Further reading

To have more control over bundle splitting you can use `cacheGroups` option, see [bundle-splitting-5](../bundle-splitting-5) repository

[webpack-4-code-splitting-chunk-graph-and-the-splitchunks-optimization](https://medium.com/webpack/webpack-4-code-splitting-chunk-graph-and-the-splitchunks-optimization-be739a861366)

[RIP-CommonsChunkPlugin](https://gist.github.com/sokra/1522d586b8e5c0f5072d7565c2bee693)