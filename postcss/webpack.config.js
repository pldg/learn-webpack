const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const postcssPresetEnv = require("postcss-preset-env");
const postcssImport = require("postcss-import");

module.exports = (env) => {
  const isProd = env.target === "prod";
  const isDevServer = env.target === "serve";

  return {
    output: {
      clean: true,
    },
    devtool: isDevServer ? "eval" : "source-map",
    devServer: {
      hot: true,
    },
    mode: isProd ? "production" : "development",
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
            {
              loader: "postcss-loader",
              options: {
                sourceMap: true,
                postcssOptions: {
                  // Postcss plugins are evaluated from left to right
                  plugins: [
                    // Postcss-import should always be the first plugin to load
                    postcssImport(),
                    postcssPresetEnv({
                      preserve: false,
                    }),
                  ],
                },
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
    ].concat(isDevServer ? [] : new MiniCssExtractPlugin()),
  };
};
