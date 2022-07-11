const path = require("path");
const glob = require("glob");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const PurgecssPlugin = require("purgecss-webpack-plugin");

module.exports = (env) => {
  const isProd = env.target === "prod";
  const isDevServer = env.target === "serve";

  const plugins = [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
    new MiniCssExtractPlugin(),
  ];

  if (isProd) {
    plugins.push(
      // PurgecssPlugin must be placed after MiniCssExtractPlugin
      new PurgecssPlugin({
        // Give absolute paths to parse
        // Matches all files inside src folder and its subdirectories
        paths: glob.sync(path.join(__dirname, "src/**/*"), {
          // Do not match directories name
          nodir: true,
        }),
        // https://purgecss.com/safelisting.html#safelisting
        safelist: {
          // All class that start with "do_not_remove" will not be removed
          standard: [/^do_not_remove/],
        },
      })
    );
  }

  return {
    output: {
      clean: true,
    },
    devtool: isDevServer ? "eval" : "source-map",
    devServer: {
      hot: true,
    },
    mode: isProd ? "production" : "development",
    module: {
      rules: [
        {
          test: /\.css$/,
          use: [
            {
              loader: isDevServer
                ? "style-loader"
                : MiniCssExtractPlugin.loader,
            },
            {
              loader: "css-loader",
              options: {
                sourceMap: true,
              },
            },
          ],
        },
      ],
    },
    plugins,
  };
};
