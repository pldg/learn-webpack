const merge = require('webpack-merge');
const parts = require('./webpack.parts');
const {
  PATHS
} = require('./const');

const prodConfig = merge([
  parts.clean(),
  parts.output({
    filename: '[name].[chunkhash:4].js'
  }),
  parts.mode('production'),
  parts.html({
    options: {
      template: PATHS.input + '/index.html'
    }
  }),
  parts.extractCSS({
    outputDir: 'css/'
  })
]);

module.exports = prodConfig;