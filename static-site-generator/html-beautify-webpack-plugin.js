// This simple plugin is to format/indent html files
// https://github.com/beautify-web/js-beautify#css--html

const HtmlWebpackPlugin = require('html-webpack-plugin');
const { html: beautify_html } = require('js-beautify');

class HtmlBeautifyPlugin {
  constructor(options = {}) {
    this.options = options;
  }

  // https://github.com/jantimon/html-webpack-plugin#events
  apply(compiler) {
    compiler.hooks.compilation.tap('HtmlBeautifyWebpackPlugin', (compilation) => {
      // Static Plugin Interface | Compilation | Hook Name | Register Listener
      HtmlWebpackPlugin.getHooks(compilation).beforeEmit.tapAsync(
        'HtmlBeautifyWebpackPlugin',
        (data, cb) => {
          // Manipulate the content
          data.html = beautify_html(data.html, this.options);
          // Tell webpack to move on
          cb(null, data);
        }
      );
    });
  }
}

module.exports = HtmlBeautifyPlugin;