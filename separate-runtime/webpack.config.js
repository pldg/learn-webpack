const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  optimization: {
    runtimeChunk: "single"
  },
  plugins: [
    new CleanWebpackPlugin(['dist'])
  ]
};