export default (id, imageName, img) => {
  import(
    /* webpackMode: "lazy-once" */
    `./images/${id}/${imageName}`
  )
  .then(src => img.src = src.default)
  .catch(err => console.error(err));
}