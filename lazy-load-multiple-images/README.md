# Lazy load multiple images

Follow up from [lazy load image](../lazy-load-image) example.

Automatically include all images from a folder with [require.context](../context-module/README.md) and load them only when needed using [dynamic import](../dynamic-import/README.md). A great way to optimize your site (or application) bandwidth, loading time and caching.

## How to

### Lazy import an image

We can import an image as module thanks to [`asset/resource`](https://webpack.js.org/guides/asset-modules/#resource-assets) which parse it and return its resolved path.

Create a function to dynamic [`import()`](https://webpack.js.org/api/module-methods/#import-1) an image, returns its parsed path and set it to `<img>` `src` attribute:

```js
const lazyLoadImage = (imageName, img) => {
  import(
    /* webpackMode: "lazy-once" */
    `./images/${imageName}`
  )
  .then(src => img.src = src.default)
  .catch(err => console.error(err));
};

export default lazyLoadImage;
```

By default dynamic import create a new chunk for each `imageName`, instead we want to create a single chunk for all images (*dist/src_images_js*). To do so we use a webpack [magic comment](https://webpack.js.org/api/module-methods/#magic-comments) called `/* webpackMode: "lazy-once" */` which generates a single lazy-loadable chunk that can satisfy all calls to `import()`. This is useful to prevent additional and unnecessary network requests when images are called.

### Generate an image element

Create a function which generate an `<img>` element, append it to a dom container, and run `lazyLoadImage` function to set its `src` attribute:

```js
import lazyLoadImage from "./lazyLoadImage";

const generateImage = (container, imageName) => {
  const img = document.createElement("img");
  container.appendChild(img);

  lazyLoadImage(imageName, img);
};

export default generateImage;
```

### Get images names

We need to get each `imageName` to use them in `lazyLoadImage` function. Use [require.contex](https://webpack.js.org/guides/dependency-management/#context-module-api) to import all `.jpg` images from `./images` folder and match only their name with extension:

```js
const getImagesNames = () => {
  const r = require.context("./images", false, /\.jpg$/);

  // Return an array list of filenames (with extension)
  const importAll = (r) => r.keys().map(file => file.match(/[^\/]+$/)[0]);

  return importAll(r);
};

export default getImagesNames;
```

### Generate all images

Create a javascript file called *images.js* that, when imported, will lazy-load and generate all images:

```js
import getImagesNames from "./getImagesNames";
import generateImage from "./generateImage";

const images = document.querySelector("#images");
const imagesNames = getImagesNames();

// Generate <img> element
// Lazy load each image and set its src attribute
// Append <img> to #images container
imagesNames.forEach(name => generateImage(images, name));
```

### Lazy load all images

You can now lazy-import *images.js* to generate all the images at once when needed:

```js
if (somethingHappen) import(
  /* webpackPrefetch: true */
  "./images"
);
```

By using the magic comment `webpackPrefetch: true`, a link to the lazy-chunk will be placed in the `<head>` tag. A prefetched chunk is downloaded while browser is idle, and stored in the browser cache for later use:

```html
<link rel="prefetch" as="script" href="0.js">
```

More information about *prefetch*:

- [Prefetching preloading modules](https://webpack.js.org/guides/code-splitting/#prefetchingpreloading-modules)
- [Link rel prefetch preload in webpack](https://medium.com/webpack/link-rel-prefetch-preload-in-webpack-51a52358f84c)
- [Preload prefetch and priorities in chrome](https://medium.com/reloading/preload-prefetch-and-priorities-in-chrome-776165961bbf)

## Notes

Inspect devtools network tab while viewing the app. Make sure to not disable cache in devtools, otherwise the prefetched chunk will not be served from the cache.

You can add `webpackMode: "eager"` instead of `webpackPrefetch: true` if you want to include *images.js* inside the main bundle.

## Further reading

- [SurviveJS - Code Splitting](https://survivejs.com/webpack/building/code-splitting/)
- [The 100 Correct Way to Split your Chunks with Webpack](https://hackernoon.com/the-100-correct-way-to-split-your-chunks-with-webpack-f8a9df5b7758)
- [Webpack and Dynamic Imports doing it right](https://medium.com/front-end-hacking/webpack-and-dynamic-imports-doing-it-right-72549ff49234)
