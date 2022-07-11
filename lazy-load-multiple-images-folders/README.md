# Lazy load images folders

Dynamically import folders with images when a button is clicked (follow up from [lazy-load-multiple-images](../lazy-load-multiple-images) example).

## How to

Set a `data-image` attribute to each button with an unique id (it'll be used to track which image folder to load):

```html
<body>
  <button data-img="1">Load images from folder 1</button>
  <button data-img="2">Load images from folder 2</button>
  <div id="images"></div>
</body>
```

Import images using [require.context](../context-module/README.md) and extract their filenames:

```js
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
```

Create a function to lazy load the appropriate image folder based on the id of the button:

- Order image folders inside an array (index will point to correct folder id).
- Generate `<img>` tags.
- Use [`import()`](../dynamic-import/README.md) to set `src` attribute to each image on demand.

```js
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
```

Lazy load the build images function to create a separate chunk. Call `buildImages(id)` with the correct button id:

```js
const button1 = document.querySelector('[data-img="1"]');
const button2 = document.querySelector('[data-img="2"]');

function showImages(event) {
  const id = event.target.dataset.img;

  import(/* webpackPrefetch: true */ `./buildImages`)
    .then((r) => {
      const buildImages = r.default;
      buildImages(id);
    })
    .catch((err) => console.error(err));
}

button1.addEventListener("click", showImages);
button2.addEventListener("click", showImages);
```
