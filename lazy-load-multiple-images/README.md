# Lazy load multiple images

Follow up from [lazy-load-image](../lazy-load-image) repository

*Note:* for more in depth explanation read my article [lazy-load-images-with-webpack](https://dev.to/pldg/lazy-load-images-with-webpack-5e80)

## Explain this repository

**lazyLoadImage.js** — Instead of creating a chunk for each `imageName` we want to create a single chunk for all images. To do so we use `webpackMode: "lazy-once"` which generates a single lazy-loadable chunk that can satisfy all calls to `import()`. Read the [list of webpackMode](https://webpack.js.org/api/module-methods/#import-) for more information

**generateImage.js** — Create `<img>` element, append it to a dom container, and run `lazyLoadImage` function to set its `src` attribute

**getImagesNames.js** — Use webpack [require.context](../require-context) to get all images names from the *images* folder

**images.js** — Loop through each images names and run `generateImage` function to generate and lazy-load each image

**index.js** — Lazy-import **images.js** to generate all the images at once on window scroll event

## Notes

By using `webpackPrefetch: true` a link to **images.js** will be placed in the `<head>` tag. A prefetched chunk is downloaded while browser is idle

```html
<link rel="prefetch" as="script" href="0.js">
```

More information in [prefetching-preloading-modules](https://webpack.js.org/guides/code-splitting/#prefetching-preloading-modules) official documentation

Inspect devtools network tab while viewing the app. Make sure to not "disable cache" in devtools (otherwise the prefetched chunk will not be served from the cache)

You can add `webpackMode: "eager"` instead of `webpackPrefetch: true` if you want to include **images.js** inside the main bundle

`kitten.jpg` is less then 3kb, url-loader will transform it in data-uri

## Further reading

[code-splitting](https://survivejs.com/webpack/building/code-splitting/)

[the-100-correct-way-to-split-your-chunks-with-webpack](https://hackernoon.com/the-100-correct-way-to-split-your-chunks-with-webpack-f8a9df5b7758)

[webpack-and-dynamic-imports-doing-it-right](https://medium.com/front-end-hacking/webpack-and-dynamic-imports-doing-it-right-72549ff49234)

[link-rel-prefetch-preload-in-webpack](https://medium.com/webpack/link-rel-prefetch-preload-in-webpack-51a52358f84c)
