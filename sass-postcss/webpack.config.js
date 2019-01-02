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
  devtool: env.target == 'devServer' ? 'eval' : 'source-map',
  module: {
    rules: [
      {
        test: /\.jpg$/,
        use: {
          loader: 'file-loader',
          options: { name: '[name].[ext]' }
        }
      },
      {
        test: /\.s?[ac]ss$/,
        use: [
          css(env),
          {
            loader: 'css-loader',
            options: { sourceMap: true }
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
              plugins: () => ([
                require('postcss-custom-properties')({
                  preserve: false
                }),
                require('autoprefixer')
              ])
            }
          },
          {
            loader: 'resolve-url-loader',
            options: { sourceMap: true }
          },
          {
            loader: 'sass-loader',
            options: { sourceMap: true }
          }
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new MiniCssExtractPlugin({
      filename: 'css/[name].css'
    }),
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      title: 'sass-postcss'
    })
  ]
});