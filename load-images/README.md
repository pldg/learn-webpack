# Load images

You can set [url-loader](https://github.com/webpack-contrib/url-loader) to parse any file, in this case `.jpg`. It will return a DataURL if the file is smaller than a byte limit. If the file is larger [file-loader](https://github.com/webpack-contrib/file-loader) is used instead. You can pass all *file-loader* options inside *url-loader*

There are different ways to import an image

- use `require` in html
- use `background-image` in css
- use `import` in javascript

To import images in **html** you have to use [lodash](https://lodash.com/docs/4.17.10#template) syntax `<%= require('path/to/image') %>` to let Webpack parse the files

You can also use [html-loader](https://github.com/webpack-contrib/html-loader) which parse `src` attribute without the need of using lodash syntax. Using html-loader will disable lodash, for example you will not be able to import title like this `<%= htmlWebpackPlugin.options.title %>`

Import images in **javascript** `import image from 'path/to/image';`

Import images in **css** `background-image: url('path/to/image');`

To import `.svg` files in html you can use [raw-loader](https://github.com/webpack-contrib/raw-loader) which give you access to the raw SVG content

## Notes

[placeholders](https://survivejs.com/webpack/optimizing/adding-hashes-to-filenames/index.html#placeholders) `[name]` is the name of the file, `[ext]` is its extension. See [caching](../caching) repository for more information on placeholders

## Further reading

More on [loading images](https://survivejs.com/webpack/loading/images/)