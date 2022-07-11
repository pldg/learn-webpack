import getImagesNames from "./getImagesNames";
import generateImage from "./generateImage";

const images = document.querySelector("#images");
const imagesNames = getImagesNames();

// Generate <img> element
// Lazy load each image and set its src attribute
// Append <img> to #images container
imagesNames.forEach((name) => generateImage(images, name));
