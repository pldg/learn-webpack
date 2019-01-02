const merge = require('webpack-merge');
const parts = require('./webpack.parts');
const PATHS = require('./paths');

const devServerConfig = merge([
  parts.mode('development'),
  parts.devtool('eval'),
  parts.devServer({ hot: true }),
  parts.html({
    title: 'composing-config',
    template: PATHS.appInput + '/index.html'
  }),
  parts.inlineCSS()
]);

module.exports = devServerConfig;