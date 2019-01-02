const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const css = (env) => {
  if (env.target == 'devServer') {
    return { loader: 'style-loader' }
  } else {
    return {
      loader: MiniCssExtractPlugin.loader,
      options: { publicPath: '../' }
    }
  }
};

module.exports = (env) => ({
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'js/[name].[chunkhash:4].js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          css(env),
          { loader: 'css-loader' }
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:4].css'
    }),
    new HtmlWebpackPlugin({
      title: 'html-template',
      inject: false,
      template: './html-template.ejs',
      googleAnalytics: {
        // use your tracking id
        trackingId: 'UA-XXXX-XX',
        // send data to google
        // https://developers.google.com/analytics/devguides/collection/analyticsjs/sending-hits
        pageViewOnLoad: true
      }
    })
  ]
});