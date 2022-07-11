const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = (env) => {
  const isProd = env.target === "prod";

  return {
    output: {
      clean: true,
    },
    mode: isProd ? "production" : "development",
    devtool: false,
    plugins: [new HtmlWebpackPlugin({ template: "src/index.html" })],
  };
};
