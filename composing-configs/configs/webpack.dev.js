const { merge } = require("webpack-merge");
const { PATHS } = require("./const");
const parts = require("./webpack.parts");

const devConfig = merge([
  parts.output({
    clean: true,
    filename: "js/[name].[contenthash].js",
    assetModuleFilename: "assets/[name].[hash][ext][query]",
  }),
  parts.mode("development"),
  parts.devtool("source-map"),
  parts.html({
    template: PATHS.input + "/index.html",
  }),
  parts.extractCSS({
    outputDir: "css/",
    cssLoaderOptions: {
      sourceMap: true,
    },
  }),
]);

module.exports = devConfig;
