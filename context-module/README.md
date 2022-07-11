# Context Module `require.context()`

The concept of [context](https://webpack.js.org/configuration/entry-context/#context) in webpack (and nodejs) refer to some directory that is used as a base for resolving paths to modules.

Webpack analyze `require()`, `import`, `import()` and `require.context` at compile time to build a [dependency graph](https://webpack.js.org/concepts/dependency-graph/#root) of all modules.

The [`require.context()`](https://webpack.js.org/guides/dependency-management/#requirecontext) function is a special webpack feature that allow you to get all module paths (files) from a base directory. One common use case is to dynamically import static assets.

In other words, `require.context()` is a form of [code splitting](../code-splitting/README.md) .

## How it works

```js
const r = require.context(
  // Directory path must be literal
  "./path/to/directory",
  // Recursive (use subdirectories)
  false,
  // Match files with regexp
  /\.jpg$/
);

const imagesPaths = r.keys();
// -> ["./image1.jpg", "./image2.jpg"]

const parsed_image1 = r(imagesPaths[0]);
// -> 73728f89fad1b84b9a3d.jpg
```

## Explain this example

In this example `require.context` is used to get all images inside a directory. When you require *load-images.js* inside html, html-webpack-plugin run it and images become part of dependencies graph, *load-images.js* is not added in output build, it's just parsed by webpack at compilation time.

## How to debug webpack

To see the logs inside *load-images.js* you have to [debug webpack using nodejs debug tool](../debug-webpack/README.md).

## Notes

You can't pass variable as argument inside `require.context()` because it must be statically analyzable ([webpack#4772](https://github.com/webpack/webpack/issues/4772), [so#42118921](https://stackoverflow.com/a/42118921)).

Even if you comment out require statements inside html:

```html
<!-- <img src="<%= require('./load-images.js')[0] %>"> -->
<!-- <img src="<%= require('./load-images.js')[1] %>"> -->
```

Webpack will run *load-images.js* anyway (if you have errors inside *load-images.js* they will show up) but do not output images.

To debug *load-images.js* see how to [debug webpack](../debug-webpack/README.md).

## Further reading

- [SurviveJS - Dynamic Loading with require.context](https://survivejs.com/webpack/techniques/dynamic-loading/#dynamic-loading-with-require-context)
- [so#54066904 - What is require.context](https://stackoverflow.com/a/54066904)
