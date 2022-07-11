// This file is required inside index.html, it will be parsed at compile time
// and it'll not be part of the final bundle

// Search for .jpg files inside ./images directory (exluding subfolders)
const r = require.context("./images", false, /\.jpg$/);

// Get images paths
// -> ["./image1.jpg", "./image2.jpg"]
const imagesPaths = r.keys();

// Compile images with webpack
// -> 73728f89fad1b84b9a3d.jpg
const parsed_image1 = r(imagesPaths[0]);
const parsed_image2 = r(imagesPaths[1]);

// Export compiled images to be used inside index.html
module.exports = [parsed_image1, parsed_image2];
