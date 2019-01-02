const merge = require('webpack-merge');
const parts = require('./webpack.parts');
const PATHS = require('./paths');

const devConfig = merge([
  parts.mode('development'),
  parts.devtool(false),
  parts.clean([PATHS.appOutput], PATHS.projectRoot),
  parts.html({
    title: 'composing-config',
    template: PATHS.appInput + '/index.html'
  }),
  parts.extractCSS({
    extractPluginOptions: { publicPath: '../' },
    outputDir: 'css'
  })
]);

module.exports = devConfig;