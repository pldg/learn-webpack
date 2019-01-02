# Lazy load image

Follow up from [dynamic-import](../dynamic-import) repository

We can `import()` an image as module thanks to [file-loader](https://github.com/webpack-contrib/file-loader) which parse it and return its resolved path

Every time we use dynamic import, webpack produce a new chunk for that module. This happen also when you use it to import images

```js
import(`imageName.jpg`).then(src => img.src = src.default);
```

To get rid of the additional network request we can include this new chunk inside the main bundle. To do so we set a special parameter `eager` via comments (in webpack it's called "magic comment")

```js
import(
  /* webpackMode: "eager" */
  `imageName.jpg`
)
.then(src => img.src = src.default)
.catch(err => console.error(err));
```

You can also pass other parameters as [magic comments](https://webpack.js.org/api/module-methods/#import-)