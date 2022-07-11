import lazyLoadImage from "./lazyLoadImage";

export default (container, imageName) => {
  const img = document.createElement("img");
  container.appendChild(img);

  lazyLoadImage(imageName, img);
};
