# Bundle splitting 4

## Extract css with split-chunks-plugin

- `bootstrap.css` is imported inside our entry point
- because of `splitChunk.chunks: 'all'` bootstrap.css is extracted in `vendors~main.css`
- the problem is that splitChunkPlugin also output unnecessary `vendors~main.js` file with only a few line of code in it

This is not a problem if you extract another vendor javascript file inside `vendors~main.js`. For example, you can uncomment `import 'react'`, run the build again and inspect result: as you can see now vendors~main.js have both react.js and the few lines of code generated because of bootstrap.css

## Note

[This feature isn't implemented yet](https://github.com/webpack/webpack/issues/7366#issuecomment-392264201)
