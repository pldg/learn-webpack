const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const loadCss = (env) => {
  if (env.target == 'devServer') {
    return { loader: 'style-loader' }
  } else {
    return {
      loader: MiniCssExtractPlugin.loader,
      options: {
        // to correctly resolve url()
        // note: by default it use publicPath in webpackOptions.output
        publicPath: '../'
      }
    }
  }
};

module.exports = (env) => ({
  devtool: env.target === 'devServer' ? 'eval' : 'source-map',
  devServer: {
    hot: true
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          loadCss(env),
          {
            loader: 'css-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      },
      {
        test: /\.jpg$/,
        use: {
          loader: 'file-loader',
          options: { name: '[name].[ext]' }
        }
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new webpack.HotModuleReplacementPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[name].css'
    }),
    new HtmlWebpackPlugin({
      title: 'separate-css-2'
    })
  ]
});