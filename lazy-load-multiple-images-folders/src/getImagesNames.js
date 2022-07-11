export function getImagesNames_1() {
  const r = require.context("./images/1/", false, /\.jpg$/);
  return getFilenames(r);
}

export function getImagesNames_2() {
  const r = require.context("./images/2/", false, /\.jpg$/);
  return getFilenames(r);
}

function getFilenames(r) {
  // Return an array list of filenames (with extension)
  const importAll = (r) => r.keys().map((file) => file.match(/[^\/]+$/)[0]);
  return importAll(r);
}
