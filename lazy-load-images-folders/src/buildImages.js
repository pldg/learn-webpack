import {
  getImagesNames_1,
  getImagesNames_2
} from './getImagesNames';
import generateImage from './generateImage';

const imagesContainer = document.querySelector('#images');

const imagesNames = [
  getImagesNames_1(),
  getImagesNames_2()
];

export default function buildImages (id) {
  const currentImageFolder = imagesNames[parseInt(id) - 1];
  currentImageFolder.forEach(name => generateImage(imagesContainer, id, name));
}
