import { getImagesNames_1, getImagesNames_2 } from "./getImagesNames";

const imagesContainer = document.querySelector("#images");
const imagesNames = [getImagesNames_1(), getImagesNames_2()];

export default function buildImages(id) {
  const currentImageFolder = imagesNames[parseInt(id) - 1];

  currentImageFolder.forEach((imageName) => {
    const img = document.createElement("img");

    imagesContainer.appendChild(img);

    import(
      /* webpackMode: "lazy-once" */
      `./images/${id}/${imageName}`
    )
      .then((src) => (img.src = src.default))
      .catch((err) => console.error(err));
  });
}
