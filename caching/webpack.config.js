const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = (env) => {
  const isProd = env.target === "prod";
  const isDevServer = env.target === "serve";

  return {
    output: {
      clean: true,
      filename: "js/[name].[contenthash].js",
      assetModuleFilename: "assets/[name].[hash][ext][query]",
    },
    devtool: isDevServer ? "eval" : "source-map",
    devServer: {
      hot: true,
    },
    mode: isProd ? "production" : "development",
    module: {
      rules: [
        {
          test: /\.jpg$/,
          type: "asset/resource",
        },
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
      isDevServer
        ? []
        : new MiniCssExtractPlugin({
            filename: "css/[name].[contenthash].css",
            chunkFilename: "css/[id].[contenthash].css",
          })
    ),
  };
};
