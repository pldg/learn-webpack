const { merge } = require("webpack-merge");
const { PATHS } = require("./const");
const parts = require("./webpack.parts");

const prodConfig = merge([
  parts.output({
    clean: true,
    filename: "js/[name].[contenthash].js",
    assetModuleFilename: "assets/[name].[hash][ext][query]",
  }),
  parts.mode("production"),
  parts.html({
    template: PATHS.input + "/index.html",
    minify: {
      collapseWhitespace: true,
      removeComments: true,
    },
  }),
  parts.extractCSS({
    outputDir: "css/",
  }),
]);

module.exports = prodConfig;
