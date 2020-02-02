const merge = require('webpack-merge');
const parts = require('./webpack.parts');
const {
  PATHS
} = require('./const');

const devServerConfig = merge([
  parts.mode('development'),
  parts.devtool('eval'),
  parts.devServer(),
  parts.html({
    options: {
      template: PATHS.input + '/index.html',
      minify: false
    }
  }),
  parts.inlineCSS({
    sourceMap: true
  })
]);

module.exports = devServerConfig;