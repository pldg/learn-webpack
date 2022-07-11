# Simple static site generator

## How to

Create some javascript files inside *src/pages/*. Each of those files represent an html page, they must export a string of html content:

```js
module.exports = = `<h1>Home Page</h1>`;
```

Those files will be converted by [HtmlWebpackPlugin](https://github.com/jantimon/html-webpack-plugin) in static html files. Create a [custom *template.ejs*](../html-plugin-template/) file for HtmlWebpackPlugin to dynamically load the correct page:

```html
<body>
  <%= require(`./src/pages/${htmlWebpackPlugin.options.pageName}.js`) %>
</body>
```

Create a function to read all page files and return their file names. Loop through each page name and load their specific HtmlWebpackPlugin configuration:

```js
const pages = [];

readFiles("./src/pages", ({ name }) =>
  pages.push(
    new HtmlWebpackPlugin({
      template: "./template.ejs",
      inject: false,
      pageName: name,
      // The page path is required inside template.ejs
      // HtmlWebpackPlugin will parse it and load the string inside the page
      filename: name === "home" ? "index.html" : `${name}/index.html`
    })
  )
)
```

Then add `pages` to the list of webpack plugins in the configuration file.

If you run `npm run dev` the structure in the *dist* folder will looks like this:

```txt
dist/
│    index.html
│
│--- about/
│         index.html
│
│--- contact/
          index.html
```

## Limitations

You can't view your app via `file:///` protocol because your nav links are set as *absolute path*, you must use a local or a remote server.

[HMR](https://webpack.js.org/concepts/hot-module-replacement/) doesn't work. If you add `devServer.hot: true` views files will not be connected to devServer.

## Notes

If you're using VS Code and want a better typing experience for writing html inside template literals, I suggest [template literal editor](https://marketplace.visualstudio.com/items?itemName=plievone.vscode-template-literal-editor) extension.
