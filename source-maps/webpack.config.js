const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = (env) => {
  const isProd = env.target === "prod";

  return {
    output: {
      clean: true,
    },
    mode: isProd ? "production" : "development",
    module: {
      rules: [
        {
          test: /\.css$/,
          use: [
            "style-loader",
            { loader: "css-loader", options: { sourceMap: true } },
          ],
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
