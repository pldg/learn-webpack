# Use `require.context`

[require.context](https://webpack.js.org/guides/dependency-management/#require-context) can be useful if you want to require all files in a directory or matching a pattern

## Explain this repository

In this example we load images from a directory and we import them inside *index.html*. Because of [url-loader](https://github.com/webpack-contrib/url-loader) *kitten-lowres.jpg* will be transformed in data uri

## Notes

You can't pass variable as argument, read [#4772](https://github.com/webpack/webpack/issues/4772) webpack issue

## Further reading

[Stackoverflow answer #42118921](https://stackoverflow.com/a/42118921)