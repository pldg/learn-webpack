const button1 = document.querySelector('[data-img="1"]');
const button2 = document.querySelector('[data-img="2"]');

function showImages(event) {
  const id = event.target.dataset.img;

  import(/* webpackPrefetch: true */ `./buildImages`)
    .then(r => {
      const buildImages = r.default;
      buildImages(id);
    })
    .catch(err => console.error(err));
};

button1.addEventListener('click', showImages);
button2.addEventListener('click', showImages);