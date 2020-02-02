const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  module: {
    rules: [
      {
        test: /\.jpg$/,
        use: {
          loader: 'url-loader',
          options: {
            // if image > 3kb file-loader is used
            limit: 3000,
            name: '[name].[hash:4].[ext]'
          }
        }
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'lazy-load-images-folders',
      template: './src/index.html'
    })
  ]
};