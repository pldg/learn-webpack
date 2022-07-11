// @param {string} module - Path to a module you want to dynamic load, moduels
// base path is `./modules/`
export default (module) => {
  document.querySelector(".btn").onclick = () => {
    // `./modules/` is necessary because the path must be statically analizable,
    // if the modules reside in different folder you must change the path here
    import(`./modules/${module}`)
      // You need `.default` to load the module
      .then((m) => console.log(m.default))
      .catch((err) => console.error(err));
  };
};
