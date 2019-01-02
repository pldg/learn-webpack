import loadImage from './loadImage';

const img = document.createElement('img');
const loadImage_btn = loadImage(img);

document.body.prepend(img);
document.body.prepend(loadImage_btn);
