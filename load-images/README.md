# Load images

## Configure webpack

To import an image file use [`asset/resource`](https://webpack.js.org/guides/asset-modules/#resource-assets) loader which emit a file into output directory.

To import an svg file use [`asset/source`](https://webpack.js.org/guides/asset-modules/#source-assets) loader which parse the file as string returing the raw content of the svg.

## Import an image in HTML

Import the image in html using [lodash](https://lodash.com/docs/4.17.10#template) syntax:

```html
<img src="<%= require('./alice.jpg') %>">
```

When you run the build:

- Image is copied in the output *dist* folder `73728f89fad1b84b9a3d.jpg`.
- Inside *dist/index.html* img `src` attribute become `src="73728f89fad1b84b9a3d.jpg"`.
- The image name is an hash for [caching](../caching/README.md) purpose.

## Import an image in CSS

```css
.image-nebula {
  background-image: url("./nebula.jpg");
  /* -> 0f7001a62be1d14e6b63.jpg */
}
```

## Import an image in JavaScript

```js
import inferno from "./inferno.jpg";
// -> 0c9627955a614a979a10.jpg
```

## Note

By default, `asset/resource` modules are emitting with `[hash][ext][query]` filename into output directory. Read [caching](../caching/README.md) for more information.

You can also use [html-loader](https://github.com/webpack-contrib/html-loader) which parse html files and [convert loadable attributes to import statements](https://github.com/webpack-contrib/html-loader#sources), so you don't need to lodash syntax. Using html-loader will disable lodash, you will not be able to import title like this `<%= htmlWebpackPlugin.options.title %>`.

## Further reading

[SurviveJS - Loading Images](https://survivejs.com/webpack/loading/images/)

## BUGS

When in devserver `npm run serve` if you modify *index.js* the page will reload and *alice.jpg* disapear with 404 error.
