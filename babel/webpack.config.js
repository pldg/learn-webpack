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
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              presets: [["@babel/preset-env"]],
            },
          },
        },
      ],
    },
  };
};
