const merge = require('webpack-merge');
const common = require('./webpack.common');
const pages = require('./webpack.pages');

module.exports = merge(common, ...pages);