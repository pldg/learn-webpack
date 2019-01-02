export default (img) => {
  const button = document.createElement('button');

  button.innerHTML = 'Click to load image';

  button.onclick = () => {
    import(
      /* webpackMode: "eager" */ 
      './nebula.jpg'
    )
    .then(src => img.src = src.default)
    .catch(err => console.error(err));
  }

  return button;
};