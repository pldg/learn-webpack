# Client level caching

Hash are useful for client level caching. If a file change its filename hash also change, this invalidate browser cache. If a file doesn't change its filename hash remain the same, so browser do not download it again

- **[hash]** for images and fonts
- **[contenthash]** for CSS
- **[chunkhash]** for chunks

Do not use hash while developing

## Further reading

[Adding hash to filenames](https://survivejs.com/webpack/optimizing/adding-hashes-to-filenames/)