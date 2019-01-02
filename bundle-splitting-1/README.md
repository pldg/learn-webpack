# Bundle splitting

A technique used to divide your app into more smaller files. Its useful for [caching](../caching)

By default Webpack create a new bundle file for every **entry chunk** and **normal chunk**. To avoid duplicated dependencies across them and for other kinds of optimizations, Webpack 4 comes with [SplitChunksPlugin](https://webpack.js.org/plugins/split-chunks-plugin/) with some configuration pre-set out of the box

SplitChunksPlugin allow to split your code into more files without having to do it by yourself manually. This is useful to improve performance of the app. The browser will cache your app files instead of re-downloading them every time an user visit the website

Out of the box SplitChunksPlugin only split **normal chunks** (async chunk) based on its default configuration

- New chunk can be shared OR modules are from the *node_modules* folder ([splitChunks.minChunks](https://webpack.js.org/plugins/split-chunks-plugin/#splitchunks-minchunks))
- New chunk would be bigger than 30kb (before min+gz) ([splitChunks.minSize](https://webpack.js.org/plugins/split-chunks-plugin/#splitchunks-minsize))
- Maximum number of parallel requests at initial page load would be lower or equal to 3 ([splitChunks.maxAsyncRequests](https://webpack.js.org/plugins/split-chunks-plugin/#splitchunks-maxasyncrequests))
- Maximum number of parallel requests when loading chunks on demand would be lower or equal to 5 ([splitChunks.maxInitialRequests](https://webpack.js.org/plugins/split-chunks-plugin/#splitchunks-maxinitialrequests))

## Explain this repository

`0.js` (refer to *a.js*) and `1.js` (refer to *b.js*) are normal (async)
 chunks. They both contains `small-shared-component.js` because this module is smaller then 30kb

`main.js` is an entry chunk which contains Webpack runtime plus the code from the entry point *index.js*

## Further reading

See [bundle-splitting-2](../bundle-splitting-2) for an other example