# Build a simple static site generator with Webpack

*Note:* for more in depth explanation read my article [build-a-simple-static-site-generator-with-webpack](https://dev.to/pldg/build-a-simple-static-site-generator-with-webpack-5a29)

**readFiles.js** — Read all files in a directory and extract their filepath, name, ext, stat

**webpack.pages.js** — Loop through each page name and load its specific HtmlWebpackPlugin configuration

**webpack.generatePage.js** — Return a new instance of HtmlWebpackPlugin with its specific options

**html-template.ejs** — Dynamically load the correct page

**router.js** — To navigate between pages. You don't have to add *index.html* to your links to navigate between pages. With this method you'll not see *.html* extension at the end of the url

Run `webpack` and see the result. Navigate between pages: `http://www.mywebsite.com/` or `http://www.mywebsite.com/page2` and so on

## Limitations

You can't view your app via `file:///` protocol because your router links are set as **absolute path**, you must use a local or a remote server

[HMR](https://webpack.js.org/concepts/hot-module-replacement/) doesn't work. If you add `HotModuleReplacementPlugin` and `devServer.hot: true` views files will not be connected to devServer

## Notes

Require a views file directly inside HtmlWebpackPlugin doesn't connect it do devServer

- All require calls inside *webpack.config.js* file are executed by **node** - page1.js will not be connected to devServer
- All require calls inside *HtmlWebpackPlugin* templates are executed by **webpack** - page1.js will be connected to devServer correctly

See [this issue](https://github.com/jantimon/html-webpack-plugin/issues/1020#issuecomment-411644399) reference

If you're using VS Code and want a better experience typing html inside template literals, I suggest [template literal editor](https://marketplace.visualstudio.com/items?itemName=plievone.vscode-template-literal-editor) extension