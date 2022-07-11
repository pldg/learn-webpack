/**
 * Set entry points
 * @param {Object} entry
 */
exports.entry = (entry) => ({
  entry,
});

/**
 * Set output directory
 * @param {Object} output
 */
exports.output = (output) => ({
  output,
});

/**
 * Set webpack mode
 * @param {String} mode
 */
exports.mode = (mode) => ({
  mode,
});

/**
 * Set sourcemaps
 * @param {String} devtool
 */
exports.devtool = (devtool) => ({
  devtool,
});

/**
 * Set development server
 * @param {Object} [devServer]
 */
exports.devServer = (devServer) => {
  devServer = Object.assign(
    {
      compress: true,
      port: 8080,
    },
    devServer
  );

  return {
    devServer,
  };
};

/**
 * Generate html file
 * @param {Object} [options]
 */
exports.html = (options) => {
  const HtmlWebpackPlugin = require("html-webpack-plugin");

  return {
    plugins: [new HtmlWebpackPlugin(options)],
  };
};

/**
 * Inline css
 * @param {Object} [cssLoaderOptions]
 */
exports.inlineCSS = (cssLoaderOptions) => ({
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: cssLoaderOptions,
          },
        ],
      },
    ],
  },
});

/**
 * Extract css into a separate file
 * @param {Object} [ctx]
 * @param {String} [ctx.outputDir]
 * @param {Object} [ctx.cssLoaderOptions]
 * @param {Object} [ctx.extractPluginOptions]
 */
exports.extractCSS = ({
  outputDir = "",
  cssLoaderOptions,
  extractPluginOptions,
}) => {
  const MiniCssExtractPlugin = require("mini-css-extract-plugin");

  return {
    module: {
      rules: [
        {
          test: /\.css$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
              options: extractPluginOptions,
            },
            {
              loader: "css-loader",
              options: cssLoaderOptions,
            },
          ],
        },
      ],
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: `${outputDir}[name].[contenthash].css`,
        chunkFilename: `${outputDir}[id].[contenthash].css`,
      }),
    ],
  };
};
