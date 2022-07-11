# Multiple webpack configurations

To [use multiple webpack configurations](https://webpack.js.org/configuration/configuration-types/) you can set *webpack.config.js* to export a function that return an object, from that function you can access two parameters:

- [`env`](https://webpack.js.org/guides/environment-variables/) is an environment variable that can be set in CLI (the best practice is to set it as an object).
- `argv` describes the options passed to webpack (for example with `argv.mode` you access the [mode](../mode) option).

Both env and argv are useful to create different configurations based on the environment (for example one configuration for production build and one for development).

## Explain this example

Read *package.json* scripts and *webpack.config.js*, run the build with `npm run dev` and see the logs:

```txt
> dev
> webpack --mode development --env target=dev

env.target = dev
mode = development
asset main.js 1.21 KiB [compared for emit] (name: main)
./src/index.js 33 bytes [built] [code generated]
webpack 5.47.1 compiled successfully in 116 ms
```

## Tips

To access `env` in your app you can use [DefinePlugins](https://webpack.js.org/plugins/define-plugin/), it allows you to create global constants which can be configured at compile time.

## Futher reading

See [bundle](../bundle/README.md) example in which `env` is used to load two different webpack configurations.
