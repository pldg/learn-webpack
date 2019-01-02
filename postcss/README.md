# Use postcss-loader

In this example [postcss](https://github.com/postcss/postcss) plugins are required in `webpack.config.js`, you can also [separate postcss config](https://github.com/postcss/postcss-loader#configuration)

[Autoprefixer](https://github.com/postcss/autoprefixer) will add prefixes for css properties. It use [browserslist](https://github.com/ai/browserslist) to specify the browsers you want to target, in this example it's set in `package.json`

[postcss-custom-properties](https://github.com/postcss/postcss-custom-properties) with its option `preserve: false` will transform all css variables to their original value

## Notes

Postcss plugins order is important

If you use postcss-custom-properties I recommend to use [postcss-import](https://github.com/postcss/postcss-import), and set css-loader `import: false` to let postcss-import handle `@import`'s statements. See [postcss-custom-properties issue#138](https://github.com/postcss/postcss-custom-properties/issues/138) for more information

## Further reading

See [sass-postcss](../sass-postcss) repository