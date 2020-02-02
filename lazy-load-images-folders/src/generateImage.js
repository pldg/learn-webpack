import lazyLoadImage from './lazyLoadImage';

export default (container, id, imageName) => {
  const img = document.createElement('img');
  container.appendChild(img);

  lazyLoadImage(id, imageName, img);
}