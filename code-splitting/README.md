# Code Splitting

[Code Splitting](https://webpack.js.org/guides/code-splitting/#root) is a technique used to divide your app into more smaller files.

By default webpack create a new bundle file for every [entry chunk and async chunk](../chunks-types/README.md), to avoid duplicated dependencies across them and for other kinds of optimizations webpack comes with [SplitChunksPlugin](https://webpack.js.org/plugins/split-chunks-plugin/) with some configuration pre-set out of the box.

SplitChunksPlugin allow to split your code into more files without having to do it by yourself. This is useful to improve performance of the app, the browser will [cache](../caching) your app files instead of re-downloading them every time an user visit the website.

Out of the box SplitChunksPlugin only split chunks based on its [default configuration](https://webpack.js.org/plugins/split-chunks-plugin/#defaults).

## Explain this example

After you run `npm run dev`, the bundle *main.js* (also called *entry chunk*) contains the webpack runtime plus codes from entry point *index.js*.

Inside *index.js* there are some dynamic imports:

```js
import("react"); // -> vendors-node_modules_react_index_js.js
import("./a"); // -> src_a_js.js
import("./b"); // -> src_b_js.js
```

[Dynamic Import](./dynamic-import) is a webpack specific sytnax used to tell webpack to create separate files for those modules (also called async chunks).

Note that *small-component.js* is inside both *src_a_js.js* and *dev/src_b_js.js* because it's smaller then 20kb, as per default SplitChunksPlugin configuration.

Because `react` it's a vendor dependency from node_modules it's extracted in a separate file called *vendors-node_modules_react_index_js.js*.

## Do more tests

If you import a file that weight more then 20kb it'll be splitted into a separate file. Inside *a.js* and *b.js* change the import satements to include the large file `import "large-component.js"` insdead of the small one.

Try to change all dynamic imports to regular import statements and run the build: everything will be included inside *main.js* bundle.

## Configuration

If you want to split all chunks types set `optimization.splitChunks.chunks: 'all'`.

To have more control over code splitting you can use [cacheGroups](https://webpack.js.org/plugins/split-chunks-plugin/#split-chunks-example-1) option.

> If you're changing the configuration, you should measure the impact of your changes to ensure there's a real benefit.

## Note

If you want to give a specific name to an async chunk, you can use [`webpackChunkName`](https://webpack.js.org/api/module-methods/#import-) as comment inside dynamic import, this will cause the files to be named `[name].js` instead of just `[id].js`:

```js
// The output file will be named react.js
import(/* webpackChunkName: 'react' */ 'react');
```

Webpack 5 will automatically assign useful file names in development mode even when not using [webpackChunkName](https://webpack.js.org/migrate/5/#using--webpackchunkname--).

## Further reading

- [Separate Runtime](../separate-runtime/README.md)
- [Webpack 4 Code Splitting Chunk Graph and the SplitChunks Optimization](https://medium.com/webpack/webpack-4-code-splitting-chunk-graph-and-the-splitchunks-optimization-be739a861366)
- [Rip CommonsChunkPlugin](https://gist.github.com/sokra/1522d586b8e5c0f5072d7565c2bee693)
