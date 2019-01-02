# How `publicPath` works

[`output.publicPath`](https://webpack.js.org/configuration/output/#output-publicpath) rewrite all urls / paths of your app to begin with its value you set. This is particularly useful in certain situation, if you want to serve your static assets from a different location

## Examples

```js
module.exports = {
  output: {
    publicPath: '/assets/'
  }
}
```

- src attribute `src="main.js"` became `src="/assets/main.js">` accessed by `http://server/assets/main.js`
- href attribute `href="webfont.woff"` became `href="/assets/webfont.woff"">` accessed by `http://server/assets/webfont.woff`
- css url `url("./image.jpg")` became `url("/assets/image.jpg")` accessed by `http://server/assets/image.jpg`
- dynamic import `import("./module")` became `import("/assets/module")` accessed by `http://server/assets/module.js`

## Explain this repository

Disable `publicPath` then run the build. When you open *page1*, *main.js* is loaded correctly. If you open *page2*, you'll se an error: the app try to load *main.js* from an incorrect location. This happen because `<script src="main.js"></script>` is relative to the folder is called from: `http://server/my_app/page2` try to load *main.js* from *page2* folder, but *main.js* is located in *my_app* folder. Now enable `publicPath` again and then run the build. The app will work fine on both page because `publicPath` rewrite every paths as an **absolute paths**: `<script src="/my_app/main.js"></script>` - `http://server/my_app/page2` will load *main.js* from *my_app*

When using webpack-dev-server you must set `publicPath: '/'` because devServer serve all assets from the **root** of the localhost (*my_app* folder is not created)

## Notes

If you change your app root (*my_app*) name or its location, you must change `publicPath` accordingly

If you use `publicPath` to transform everything to absolute paths, you'll not be able to run your project via `file://` protocol, you must use an `http://` server instead