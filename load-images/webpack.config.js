const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = (env) => {
  const isProd = env.target === "prod";

  return {
    output: {
      clean: true,
    },
    devtool: false,
    devServer: {
      hot: true,
    },
    mode: isProd ? "production" : "development",
    module: {
      rules: [
        {
          test: /\.css$/,
          use: ["style-loader", "css-loader"],
        },
        {
          test: /\.jpg$/,
          // Emit a file into output directory (like file-loader)
          type: "asset/resource",
        },
        {
          test: /\.svg$/,
          // Import file as string (like raw-loader)
          type: "asset/source",
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "./src/index.html",
      }),
    ],
  };
};
