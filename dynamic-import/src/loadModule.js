export default (moduleName) => {
  const button = document.createElement('button');

  button.innerHTML = `Click to load ${moduleName}`;

  button.onclick = () => {
    // lazy loading module
    // important: the path must be statically analyzable
    import(`./modules/${moduleName}`)
      .then(someModule => console.log(someModule.default))
      .catch(err => console.error(err));
  }

  return button;
};