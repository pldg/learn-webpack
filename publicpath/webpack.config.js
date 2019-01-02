const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env) => ({
  output: {
    path: path.join(__dirname, 'dist/my_app'),
    publicPath: env.target === 'devServer' ? '/' : '/my_app/'
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      title: 'page1'
    }),
    new HtmlWebpackPlugin({
      filename: 'page2/index.html',
      title: 'page2'
    })
  ]
});