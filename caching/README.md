# Caching

When an user visit a website for the first time a browser save the assets in its memory and won't download them again (unless filenames has changed). This technique is called [caching](https://en.wikipedia.org/wiki/Cache_(computing)), it's useful to prevent unecessary network traffic and therefor speed up connections to websites.

If you want the browser to download the latest version of the website you need to control the cache. You can [control caching via server configuration](https://stackoverflow.com/questions/49547/how-do-we-control-web-page-caching-across-all-browsers) or [setup a client level caching using webpack](https://webpack.js.org/guides/caching/#root).

## Client level caching

Client level caching is done by adding an hash to filename.

Webpack use [placeholders](https://webpack.js.org/configuration/output/#template-strings) to add specific information to webpack output:

- `[name]` Only filename without extension or path.
- `[ext]` Extension with leading `.`.
- `[id]` The name of the chunk, if set, otherwise the id of the chunk, or id of the module.
- `[contenthash]` Hash generated based on content (the hash change when the file change).
- `[querry]` Querry with leading `?`.

## Configure webpack for caching

### [Add hash to javascript](https://webpack.js.org/configuration/output/#outputfilename)

```js
{
  output: {
    filename: "js/[name].[contenthash].js"
  }
}
```

For on-demand-loaded chunks use [`output.chunkFilename`](https://webpack.js.org/configuration/output/#outputchunkfilename).

### [Add hash to assets](https://webpack.js.org/guides/asset-modules/#custom-output-filename)

```js
{
  output: {
    assetModuleFilename: 'assets/[name].[contenthash][ext][query]'
  }
}
```

Or you can configure hash for specific asset type:

```js
{
  test: /\.html/,
  type: 'asset/resource',
  generator: {
    filename: 'static/[name].[contenthash][ext][query]'
  }
}
```

### [Add hash to css](https://github.com/webpack-contrib/mini-css-extract-plugin#advanced-configuration-example)

```js
plugins: [
  new MiniCssExtractPlugin({
    filename: "css/[name].[contenthash].css"
  })
]
```

### Output

Webpack will generates filenames like these:

```txt
js/main.d587bbd6e38337f5accd.js
assets/alice.0c9627955a614a979a10.jpg
static/index.0f7001a62be1d14e6b63.html
css/main.73728f89fad1b84b9a3d.css
```

Everytime a file change webpack see it and change the hash in the output filename. This invalidate browser cache, therefor the client (browser) will download the new version of the file.

## Tips

You can set a specific lenght for an hash, for example `[contenthash:6]` will limit the hash lenght to 6 characters.

Caching is very usefull in conjunction with [bundle splitting](../bundle-splitting/README.md) technique. You can split your app into multiple files and deploy only those whose content has changed.

Do not use hash while developing.

## Further reading

- [Webpack Guides - Caching](https://webpack.js.org/guides/caching/)
- [SurviveJS - Adding Hash to Filenames](https://survivejs.com/webpack/optimizing/adding-hashes-to-filenames/)
