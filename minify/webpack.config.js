const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const UglifyWebpackPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
  output: {
    filename: '[name].[chunkhash:4].js'
  },
  devtool: 'source-map',
  optimization: {
    minimizer: [
      new UglifyWebpackPlugin(
        {
          // important: to make drop_console option works you must disable sourceMap
          sourceMap: true,
          cache: true,
          parallel: true
        },
        {
          uglifyOptions: {
            compress: { drop_console: true }
          }
        }
      ),
      new OptimizeCSSAssetsPlugin({
        // enable css external source maps output
        cssProcessorOptions: {
          map: {
            inline: false,
            annotation: true
          }
        }
      })
    ]
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          { loader: MiniCssExtractPlugin.loader },
          {
            loader: 'css-loader',
            options: { sourceMap: true }
          }
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash:4].css'
    }),
    new HtmlWebpackPlugin({
      title: 'minify',
      template: 'src/index.html',
      minify: {
        removeComments: true,
        collapseWhitespace: true
      }
    })
  ]
};