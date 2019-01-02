# Load css

[css-loader](https://github.com/webpack-contrib/css-loader) will resolve `@imports` and `url(...)` inside css files and insert the result as string inside the javascript bundle file

[style-loader](https://github.com/webpack-contrib/style-loader) take the css resolved by *css-loader* and create a `<style>` tag in the page `<head>`

Note: [loaders order](https://survivejs.com/webpack/loading/loader-definitions/#loader-evaluation-order) is important, they are evaluated from right to left and from bottom to top

## Load css from *node_modules*

You can load files directly from *node_modules* inside your css file by prefixing your imports with a tilde `~`. For example: `@import '~bootstrap/dist/css/bootstrap.css'`

Paths that start with `~` are resolved by **css-loader**

Note: if you use [postcss-import](https://github.com/postcss/postcss-import) you don't need `~`, instead use `@import 'bootstrap.css'` (with or without extension)

You can also import css from *node_modules* directly in your entry point: `import 'bootstrap/dist/css/bootstrap.css'` inside *index.js*. Use this method if you encounter any error, for example source maps reference could be incorrect if a vendor from *node_modules* is imported inside a css file. See [load-sass](../load-sass) repository for more info

## Further reading

[Import bootstrap with webpack](https://getbootstrap.com/docs/4.0/getting-started/webpack/#importing-compiled-css) official documentation