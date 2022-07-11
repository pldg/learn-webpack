const path = require("path");

const cwd = process.cwd();

const PATHS = {
  cwd,
  configs: __dirname,
  input: path.resolve(cwd, "src"),
  output: path.resolve(cwd, "dist"),
};

module.exports = {
  PATHS,
};
