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
          test: /\.jpg$/,
          type: "asset/resource",
        },
      ],
    },
    plugins: [new HtmlWebpackPlugin()],
  };
};
