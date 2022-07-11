const HtmlWebpackPlugin = require("html-webpack-plugin");
const HtmlBeautifyPlugin = require("./html-beautify-webpack-plugin");
const readFiles = require("./readFiles");
const pages = [];

readFiles("./src/pages", ({ name }) =>
  // Generate list of HtmlWebpackPlugin istances
  pages.push(
    new HtmlWebpackPlugin({
      template: "./template.ejs",
      inject: false,
      pageName: name,
      // The page path is required inside template.ejs
      // HtmlWebpackPlugin will parse it and load the string inside the page
      filename: name === "home" ? "index.html" : `${name}/index.html`,
      title: "Simple Static Site Generator",
      appId: "app",
      attributes: {
        html: {
          lang: "en",
        },
      },
      head: {
        meta: [
          {
            name: "description",
            content: "Simple Static Site Generator built on top of Webpack",
          },
        ],
      },
    })
  )
);

module.exports = (env) => {
  const isProd = env.target === "prod";
  let plugins = [];

  if (!isProd) {
    plugins = [
      ...pages,
      new HtmlBeautifyPlugin({
        preserve_newlines: false,
        indent_size: 2,
        wrap_line_length: 80,
      }),
    ];
  } else {
    plugins = pages;
  }

  return {
    output: {
      clean: true,
    },
    mode: isProd ? "production" : "development",
    plugins,
  };
};
