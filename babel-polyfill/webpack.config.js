const CleanWebpackPlugin = require('clean-webpack-plugin');
const babel_config = require('./babel.config');

module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: babel_config
        }
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['dist'])
  ]
};