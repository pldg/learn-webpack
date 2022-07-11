const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = (env) => {
  const isProd = env.target === "prod";
  const isDevServer = env.target === "serve";

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
    plugins: [
      new HtmlWebpackPlugin({
        template: "./src/index.html",
      }),
    ].concat(
      // https://github.com/webpack-contrib/mini-css-extract-plugin#recommend
      isDevServer ? [] : new MiniCssExtractPlugin()
    ),
  };
};
