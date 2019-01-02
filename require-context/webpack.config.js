const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  module: {
    rules: [
      {
        test: /\.jpg$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 2000,
            name: '[name].[hash:4].[ext]'
          }
        }
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      title: 'require-context',
      template: './src/index.html'
    })
  ]
};