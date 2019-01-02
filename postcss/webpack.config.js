const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (env) => ({
  devtool: env.target == 'devServer' ? 'eval' : 'source-map',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: env.target == 'devServer' ? 'style-loader' : MiniCssExtractPlugin.loader
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              import: false // let postcss-import handle @import
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
              plugins: () => ([
                require('postcss-import'), // to correct postcss-custom properties bug
                require('postcss-custom-properties')({
                  preserve: false
                }),
                require('autoprefixer')
              ])
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      title: 'postcss'
    })
  ]
});