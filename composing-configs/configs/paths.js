const path = require('path');

const projectRoot = path.resolve(__dirname, '../');

const PATHS = {
  projectRoot,
  configs: __dirname,
  appInput: path.join(projectRoot, 'src'),
  appOutput: path.join(projectRoot, 'dist')
};

module.exports = PATHS;