const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: {
    entry1: './src/entry1.js',
    entry2: './src/entry2.js'
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        // includes all type of chunks from node_modules
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all'
        },
        // includes all initial chunks shared between entry points
        commons: {
          name: 'commons',
          chunks: 'initial',
          minChunks: 2
        }
      }
    }
  },
  plugins: [
    new CleanWebpackPlugin(['dist'])
  ]
};