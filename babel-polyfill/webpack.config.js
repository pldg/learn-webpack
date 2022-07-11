const pkg = require("./package.json");

module.exports = (env) => {
  const isProd = env.target === "prod";

  return {
    output: {
      clean: true,
    },
    mode: isProd ? "production" : "development",
    devtool: false,
    module: {
      rules: [
        {
          test: /\.m?js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              presets: [
                [
                  "@babel/preset-env",
                  {
                    useBuiltIns: "usage",
                    // Important: Specify core-js **minor** version
                    // https://github.com/zloirock/core-js#babelpreset-env
                    corejs: pkg.dependencies["core-js"],
                  },
                ],
              ],
            },
          },
        },
      ],
    },
  };
};
