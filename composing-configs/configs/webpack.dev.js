const merge = require('webpack-merge');
const parts = require('./webpack.parts');
const {
  PATHS
} = require('./const');

const devConfig = merge([
  parts.clean(),
  parts.mode('development'),
  parts.devtool('source-map'),
  parts.html({
    options: {
      template: PATHS.input + '/index.html',
      minify: false
    }
  }),
  parts.extractCSS({
    outputDir: 'css/',
    cssLoaderOptions: {
      sourceMap: true
    }
  })
]);

module.exports = devConfig;