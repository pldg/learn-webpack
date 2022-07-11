export default () => {
  const r = require.context("./images", false, /\.jpg$/);

  // Return an array list of filenames (with extension)
  const importAll = (r) => r.keys().map((file) => file.match(/[^\/]+$/)[0]);

  return importAll(r);
};
