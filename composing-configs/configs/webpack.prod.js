const merge = require('webpack-merge');
const parts = require('./webpack.parts');
const PATHS = require('./paths');

const prodConfig = merge([
  parts.mode('production'),
  parts.devtool('source-map'),
  parts.clean([PATHS.appOutput], PATHS.projectRoot),
  parts.html({
    title: 'composing-config',
    template: PATHS.appInput + '/index.html',
    minify: true
  }),
  parts.extractCSS({
    extractPluginOptions: { publicPath: '../' },
    outputDir: 'css'
  })
]);

module.exports = prodConfig;