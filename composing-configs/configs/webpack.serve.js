const { merge } = require("webpack-merge");
const { PATHS } = require("./const");
const parts = require("./webpack.parts");

const devServerConfig = merge([
  parts.mode("development"),
  parts.devtool("eval"),
  parts.devServer({
    hot: true,
  }),
  parts.html({
    template: PATHS.input + "/index.html",
  }),
  parts.inlineCSS({
    sourceMap: true,
  }),
]);

module.exports = devServerConfig;
