const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = (env) => {
  const isProd = env.target === "prod";

  return {
    output: {
      clean: true,
    },
    devServer: {
      hot: true,
    },
    mode: isProd ? "production" : "development",
    module: {
      rules: [
        {
          // Conditions to match files using regex
          test: /\.css$/,
          // Loaders evaluation is from right to left (or bottom to top):
          // css-loader is processed before style-loader
          use: ["style-loader", "css-loader"],
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
