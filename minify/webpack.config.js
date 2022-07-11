const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = (env) => {
  const isProd = env.target === "prod";
  const isDevServer = env.target === "serve";

  const plugins = [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      minify: isProd ? true : false,
    }),
  ];

  if (!isDevServer) {
    plugins.push(new MiniCssExtractPlugin());
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
    optimization: {
      minimizer: [
        // Tells webpack@5 to extend defaults minimizer options
        `...`,
        new CssMinimizerPlugin(),
      ],
    },
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
