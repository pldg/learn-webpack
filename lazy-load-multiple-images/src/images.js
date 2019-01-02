import getImagesNames from './getImagesNames';
import generateImage from './generateImage';

const images = document.querySelector('#images');
const imagesNames = getImagesNames();

// generate <img> element
// lazy-load each image and set its src attribute
// append <img> to #images container
imagesNames.forEach(name => generateImage(images, name));