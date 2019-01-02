export default (imageName, img) => {
  import(
    /* webpackMode: "lazy-once" */
    `./images/${imageName}`
  )
  .then(src => img.src = src.default)
  .catch(err => console.error(err));
}