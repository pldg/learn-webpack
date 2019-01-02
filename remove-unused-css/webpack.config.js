const path = require('path');
const glob = require('glob');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const PurifyCSSPlugin = require('purifycss-webpack');

module.exports = (env) => ({
  devtool: env.target == 'devServer' ? 'eval' : 'source-map',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: env.target == 'devServer' ? 'style-loader' : MiniCssExtractPlugin.loader
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin('dist'),
    new MiniCssExtractPlugin(),
    // PurifyCSSPlugin must be placed after MiniCssExtractPlugin
    new PurifyCSSPlugin({
      // give paths to parse for rules, should be absolute
      // `**` matches zero or more directories and subdirectories
      paths: glob.sync(path.join(__dirname, 'src/**/*.+(html|js)'), {
        // do not match directories name
        nodir: true
      }),
      purifyOptions: {
        // all class that include "do_not_remove" will not be removed
        whitelist: ['*do_not_remove*']
      }
    }),
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      title: 'remove-unused-css'
    })
  ]
});