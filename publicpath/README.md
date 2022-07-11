# How publicPath works

The value of [publicPath](https://webpack.js.org/guides/public-path/) allow you to specify a base path for all the assets within your applicaion. It's useful if you want to serve your assets from a different location. All urls and paths of your app are prefixed with the value of `output.publicPath`.

## Example

```js
module.exports = {
  output: {
    publicPath: "/assets/"
  }
}
```

- Src attribute `src="main.js"` become `src="/assets/main.js"` accessed by `http://server/assets/main.js`.
- Href attribute `href="webfont.woff"` become `href="/assets/webfont.woff"">` accessed by `http://server/assets/webfont.woff`
- Css url `url("./image.jpg")` become `url("/assets/image.jpg")` accessed by `http://server/assets/image.jpg`.
- Dynamic import `import("./module")` become `import("/assets/module")` accessed by `http://server/assets/module.js`.

## Notes

When using [webpack-dev-server](https://webpack.js.org/configuration/dev-server/) you should set `publicPath: "/"` (devServer serve all assets from the *root* of the localhost).

If you use publicPath to transform everything to [absolute paths](https://stackoverflow.com/a/27938910/) you'll not be able to run your project via `file://` protocol, you must use a [local `http://` development server](https://developer.mozilla.org/en-US/docs/Learn/Common_questions/set_up_a_local_testing_server):

```python
# cd into output folder then run the following command
python3 -m http.server
```

Open *http://localhost:8000/* to see your website.
