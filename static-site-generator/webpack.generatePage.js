const HtmlWebpackPlugin = require('html-webpack-plugin');

const generatePage = ({
  path = '',
  template = './html-template.ejs',
  title,
  pageName
} = {}) => ({
  plugins: [
    new HtmlWebpackPlugin({
      filename: `${path && path + '/'}index.html`,
      template,
      title,
      pageName
    })
  ]
});

module.exports = generatePage;