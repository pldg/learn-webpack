const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  output: {
    filename: '[name].[chunkhash:4].js'
  },
  module: {
    rules: [
      {
        test: /\.jpg$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[hash:4].[ext]'
          }
        }
      },
      {
        test: /\.css$/,
        use: [
          { loader: MiniCssExtractPlugin.loader },
          { loader: 'css-loader' }
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
      template: 'src/index.html',
      title: 'learn-webpack-caching'
    })
  ]
};