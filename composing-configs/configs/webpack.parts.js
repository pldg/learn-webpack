/* =====
set mode
======== */

exports.mode = type => ({ mode: type });

/* ========
set devtool
=========== */

exports.devtool = type => ({ devtool: type });

/* ==========
set devServer
============= */

exports.devServer = ({
  hot = false,
  compress = true,
  port = 8080
} = {}) => {
  const webpack = require('webpack');
  const plugins = hot
    ? [ new webpack.HotModuleReplacementPlugin() ]
    : [];

  return {
    devServer: { hot, port, compress },
    plugins
  };
};

/* ==============
clean directories
================= */

exports.clean = (directories, projectRoot) => {
  const CleanWebpackPlugin = require('clean-webpack-plugin');

  return {
    plugins: [
      new CleanWebpackPlugin(directories, { root: projectRoot })
    ]
  };
};

/* ==========
generate html
============= */

exports.html = ({
  template = 'node_modules/html-webpack-plugin/default_index.ejs',
  title = '',
  path = '',
  minify = false
} = {}) => {
  const HtmlWebpackPlugin = require('html-webpack-plugin');

  if (minify) {
    minify = {
      collapseWhitespace: true,
      removeComments: true
    };
  }

  return {
    plugins: [
      new HtmlWebpackPlugin({
        template,
        title,
        // if path === '' then filename: 'index.html'
        // otherwise filename: 'page2/index.html'
        // and so on for every page name
        filename : `${path && path + '/'}index.html`,
        minify
      })
    ]
  };
};

/* =======
inline css
========== */

exports.inlineCSS = ({
  sourceMap = true,
} = {}) => ({
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: { sourceMap }
          }
        ]
      }
    ]
  }
});

/* ========
extract css
=========== */

exports.extractCSS = ({
  sourceMap = true,
  extractPluginOptions = {},
  outputDir = ''
} = {}) => {
  const MiniCssExtractPlugin = require('mini-css-extract-plugin');

  return {
    module: {
      rules: [
        {
          test: /\.css$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
              options: extractPluginOptions
            },
            {
              loader: 'css-loader',
              options: { sourceMap }
            }
          ]
        }
      ]
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: `${outputDir}/[name].[contenthash:4].css`
      })
    ]
  };
};
