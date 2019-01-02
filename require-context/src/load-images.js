// search for .jpg files inside ./images directory
// and exclude subdirectories
const r = require.context('./images', false, /\.jpg$/);

// return an array of filepaths resolved by webpack
const importAll = (r) => r.keys().map(path => r(path));

const imagesPaths = importAll(r);

module.exports = imagesPaths;