const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = (env) => {
  const isProd = env.target === "prod";

  return {
    output: {
      clean: true,
    },
    devtool: isProd ? false : "eval",
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
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "./src/index.html",
      }),
    ],
  };
};
