const path = require('path');

/**
 * Set entry points
 * @param {Object} entry
 */
exports.entry = (entry) => ({
  entry
});

/**
 * Set output directory
 * @param {Object} output
 */
exports.output = (output) => ({
  output
});

/**
 * Set webpack mode
 * @param {String} mode
 */
exports.mode = (mode) => ({
  mode
});

/**
 * Set sourcemaps
 * @param {String} devtool
 */
exports.devtool = (devtool) => ({
  devtool
});

/**
 * Set development server
 * @param {Object} [devServer]
 */
exports.devServer = (devServer) => {
  const webpack = require('webpack');

  devServer = Object.assign({
      compress: true,
      port: 8080,

      // When hot reload is enabled, changes in .html will not trigger reload
      // Use contentBase to serve and reload static content like .html files

      //hot: true,
      //contentBase: path.join(process.cwd(), 'src/html/'),
      //watchContentBase: true
    },
    devServer
  );

  const plugins = devServer.hot ? [new webpack.HotModuleReplacementPlugin()] : [];

  return {
    devServer,
    plugins
  };
};

/**
 * Clean output directory
 */
exports.clean = () => {
  const {
    CleanWebpackPlugin
  } = require('clean-webpack-plugin');

  return {
    plugins: [
      new CleanWebpackPlugin()
    ]
  };
};

/**
 * Generate html file
 * @param {String} [pageName]
 * @param {Object} [options]
 */
exports.html = ({
  pageName = '',
  options
}) => {
  const HtmlWebpackPlugin = require('html-webpack-plugin');

  options = Object.assign({
      filename: `${pageName && pageName + '/'}index.html`,
      minify: {
        collapseWhitespace: true,
        removeComments: true
      }
    },
    options
  );

  return {
    plugins: [
      new HtmlWebpackPlugin(options)
    ]
  };
};

/**
 * Inline css
 * @param {Object} [cssLoaderOptions]
 */
exports.inlineCSS = (cssLoaderOptions) => ({
  module: {
    rules: [{
      test: /\.css$/,
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: cssLoaderOptions
        }
      ]
    }]
  }
});

/**
 * Extract css into a separate file
 * @param {Object} [ctx]
 * @param {String} [ctx.outputDir]
 * @param {Object} [ctx.cssLoaderOptions]
 * @param {Object} [ctx.extractPluginOptions]
 */
exports.extractCSS = ({
  outputDir = '',
  cssLoaderOptions,
  extractPluginOptions
}) => {
  const MiniCssExtractPlugin = require('mini-css-extract-plugin');

  return {
    module: {
      rules: [{
        test: /\.css$/,
        use: [{
            loader: MiniCssExtractPlugin.loader,
            options: extractPluginOptions
          },
          {
            loader: 'css-loader',
            options: cssLoaderOptions
          }
        ]
      }]
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: `${outputDir}[name].[contenthash:4].css`
      })
    ]
  };
};