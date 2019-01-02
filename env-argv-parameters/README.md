# Access `env` and `argv` parameters

[Export a function](https://webpack.js.org/configuration/configuration-types/#exporting-a-function) from `webpack.config.js` that return an object

From that function you can access two parameters

- `env` is an environment variable that can be set in CLI
- `argv` describes the options passed to webpack

`env` can take any value we want, the best practice is to set it as an object

With `argv.mode` you access `--mode`

Both parameters are useful to create different configurations based on the environment

To access `env` in your app you can use [DefinePlugins](https://webpack.js.org/plugins/define-plugin/), it allows you to create global constants which can be configured at compile time