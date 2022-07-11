# Use postcss

[Postcss](https://github.com/postcss/postcss) is a tool for transforming styles with javascript plugins. These [plugins](https://github.com/postcss/postcss/blob/main/docs/plugins.md) can lint your css, support variables and mixins, transpile future css syntax, inline images, and more.

## Configuration

- Install [postcss-loader](https://github.com/webpack-contrib/postcss-loader).
- Install [postcss-import](https://github.com/postcss/postcss-import) to handle import statements for stylesheets.
- Install [postcss-preset-env](https://github.com/csstools/postcss-plugins/tree/main/plugin-packs/postcss-preset-env) which bundle a list of plugins.
- Set [browserslist](https://github.com/browserslist/browserslist).

## Explain this example

Because browserlist is set to `ie 10`, custom properties are transpiled to their original value and prefixes are added for flexbox.

## Notes

Postcss plugins order is important, they are evaluated from left to right.

If you target older browser (like IE) set [`preserve`](https://github.com/csstools/postcss-plugins/tree/main/plugin-packs/postcss-preset-env#preserve) to `false`.

When `preserve: false` it only transpile css custom properties that are defined within their file. Therefor if you import them from a different file `@import "./partials/var.css";` you must parse the import statement with *postcss-import*. If you want to run a test try to to comment out `postcssImport()` and run the build, only `--color-1` will be transpiled.

If you are using [sass](../SASS/README.md) you don't need postcss-import (import statements are handled by sass).
