# Load SASS

Use [sass-loader](https://github.com/webpack-contrib/sass-loader)

## Bug 1

`url()` are not parsed correctly. If you disable *resolve-url-loader* and run webpack the compilation won't work, now try to comment out `@import './partials/image-kitten.scss'`, the compilation will work

### Solution for Bug 1

Add *resolve-url-loader* after *sass-loader*. You must enable *sass-loader* `sourceMap` to make **resolve-url-loader** works. More info: [problem with `url()`](https://github.com/webpack-contrib/sass-loader#problems-with-url)

## Bug 2

Try to disable `import 'bootstrap/scss/bootstrap.scss'` inside *index.js*, and import `@import '~bootstrap/scss/bootstrap.scss'` inside *style.scss*. Then run webpack, source maps reference will not be correct. Inspect `<body>`, `body { background-color: lightblue }` should be referenced to `style.scss:5` but is referenced to `_reboot.scss:57` which is part of *bootstrap*

### Solution for Bug 2

Import bootstrap inside *index.js* instead of inside *style.scss*