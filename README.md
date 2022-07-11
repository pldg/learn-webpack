# Learn Webpack

A collection of simple [Webpack](https://webpack.js.org/) examples:

- [Mode](./mode/README.md): Enable webpack built-in optimizations for development and production.
- [Multiple Configurations](./multiple-configurations/README.md): Use `--env` flag to create different config based on the environment.
- [Bundle](./bundle/README.md): Merge multiple javascripts files.
- [Separate Runtime](./separate-runtime/README.md): Extract webpack runtime logic in a separate file.
- [Tree Shaking](./tree-shaking/README.md): Remove unused javascript codes from the app.
- [Chunks Types](./chunks-types/README.md): Explain what a webpack chunk is.
- [Dynamic Import](./dynamic-import/README.md): Use `import()` to load part of an app on demand.
- [Code Splitting](./code-splitting/README.md): Divide an app into smaller files.
- [Loaders and Plugins](./loaders-plugins/README.md): Explain what webpack loaders and plugins are.
- [Asset Modules](./asset-modules/README.md): Import additional type of assets without configuring loaders.
- [Babel](./babel/README.md): Use `babel-loader` to transpile ES2015 code into into a backwards compatible version of javascript.
- [Babel Polyfill](./babel-polyfill/README.md): Apply pollyfills to provide a backwards compatible version of a javascript feature.
- [Html Plugin Template](./html-plugin-template/README.md): Generate html files with `html-webpack-plugin`.
- [Load CSS](./load-css/README.md): Use `css-loader` and `style-loader` to parse stylesheets and place them into html page.
- [Source Maps](./source-maps/README.md): Emit javascript and css source maps.
- [Public Path](./publicpath/README.md): Specify a base path for all the assets within your applicaion.
- [Separate CSS](./separate-css/README.md): Use `mini-css-extract-plugin` to extract stylesheets into a separate file.
- [Remove Unused CSS](./remove-unused-css/README.md): Use `purgecss` to remove unused part of stylesheets.
- [Load Images](./load-images/README.md): Use `asset/resource` to parse and emit images and `asset/source` to parse raw svg files.
- [SASS](./sass/README.md): Load sass files with `sass-loader`.
- [PostCSS](./postcss/README.md): Enable postcss with `postcss-loader`.
- [Minify](./minify/README.md): Enable code minification by using `mode.production`, `css-minimizer-webpack-plugin` and `HtmlWebpackPlugin.minify`.
- [Caching](./caching/README.md): Setup client level caching by adding hash to filenames.
- [Context Module](./context-module/README.md): Run `require.context()` at compile time to import assets.
- [Debug Webpack](./debug-webpack/README.md): Debug webpack configuration using nodejs `--inspect` tool.
- [Lazy Load Image](./lazy-load-image/README.md): Dynamically import an image with `import()`.
- [Lazy Load Multiple Images](./lazy-load-multiple-images/README.md): Use `require.context()` to include all images from a folder and dynamically load them with `import()`.
- [Lazy Load Multiple Images Folders](./lazy-load-multiple-images-folders/README.md): Dynamically import images inside multiple folders when a button is clicked.
- [Composing Configurations](./composing-configs/README.md): Organize webpack configs in separate files and merge them with `webpack-merge`.
- [Static Site Generator](./static-site-generator/README.md): Create a simple SSG on top of `HtmlWebpackPlugin`.
