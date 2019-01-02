const readFiles = require('./readFiles');
const generatePage = require('./webpack.generatePage');

// create an array list of all pages filenames (without extension)
const pageNames = [];
readFiles('./src/views', ({ name }) => pageNames.push(name));

const pages = pageNames.map(pageName => generatePage({
  title: pageName,
  // if 'page1' then filename: 'index.html'
  // otherwise filename: 'page2/index.html'
  // and so on for every other page
  path: pageName === 'page1' ? '' : pageName,
  // `pageName` is a custom HtmlWebpackPlugin option
  // which is loaded in html-template.ejs
  pageName
}));

module.exports = pages;