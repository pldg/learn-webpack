# Lazy load image

Before reading this repo check out [dynamic import](../dynamic-import/) example.

We can [`import()`](https://webpack.js.org/api/module-methods/#import-1) an image as module with [`asset/resource`](https://webpack.js.org/guides/asset-modules/#resource-assets).

Every time we use dynamic import, webpack produce a new chunk for that module. This happen also when you use it to import images:

```js
import(`imageName.jpg`).then(src => img.src = src.default);
```

To get rid of the additional network request we can include this new chunk inside the main bundle. To do so we set a special parameter `eager` via comments (in webpack it's called "magic comment"):

```js
import(
  /* webpackMode: "eager" */
  `imageName.jpg`
)
.then(src => img.src = src.default)
.catch(err => console.error(err));
```

You can also pass other parameters as [magic comments](https://webpack.js.org/api/module-methods/#magic-comments).
