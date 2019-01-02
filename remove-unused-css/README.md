# Remove unused css

Remove unused css with [purifycss-webpack](https://github.com/webpack-contrib/purifycss-webpack). Must be placed after MiniCssExtractPlugin. Without any CSS file being emitted as an asset, this plugin will do nothing. PurifyCSSPlugin `paths` option tell [PurifyCSS](https://github.com/purifycss/purifycss) where to find css classes. Paths should be **absolute**

## Explain this repository

In this example we use a [glob](https://github.com/isaacs/node-glob#glob-primer) pattern `'src/**/*.+(html|js)'` to find any javascript or html files in `src/` folder and its subfolders. PurifyCSS will look inside those files for css declarations

When we run webpack

- all unused *bootstrap.css* styles are removed, only those needed for `class="alert alert-danger"` component are output in `dist/main.css` bundle
- `.unused-class` is removed
- `.text-color` is placed in the bundle
- even if `.textUnderline` is dynamic added in javascript, PurifyCSS [detect](https://github.com/purifycss/purifycss#detecting-the-use-of-button-active-1) it and place it in the bundle
- `.do_not_remove_this-class` is not removed because we set it in the `whitelist`, this is useful for example if we want to use *css-loader* [modules](https://github.com/webpack-contrib/purifycss-webpack#usage-with-css-modules)

## Notes

The same configuration works fine with sass

Camel case not working in `whitelist`, issue number [#134](https://github.com/webpack-contrib/purifycss-webpack/issues/134)