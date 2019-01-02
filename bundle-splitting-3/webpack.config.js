const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: {
    entry1: './src/entry1.js',
    entry2: './src/entry2.js'
  },
  optimization: {
    splitChunks: { chunks: 'all' }
  },
  plugins: [
    new CleanWebpackPlugin(['dist'])
  ]
};