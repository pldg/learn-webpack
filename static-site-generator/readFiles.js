const fs = require("fs");
const path = require("path");

function readFiles(dir, processFiles) {
  fs.readdirSync(dir).forEach((filename) => {
    const filepath = path.resolve(dir, filename);
    const name = path.parse(filename).name;
    const ext = path.parse(filename).ext;
    const stat = fs.statSync(filepath);
    const isFile = stat.isFile();

    if (isFile) processFiles({ filepath, name, ext, stat });
  });
}

module.exports = readFiles;
