# Asset Modules

By default webpack only recognize js and json files. From webpack v5 loading additional type of assets (images, icons, fonts, text, and more) can be done using [asset modules](https://webpack.js.org/guides/asset-modules/) without configuring loaders:

- `asset/resource` emits a separate file and exports the URL. Previously achievable by using [file-loader](https://v4.webpack.js.org/loaders/file-loader/).
- `asset/inline` exports a data URI of the asset. Previously achievable by using [url-loader](https://v4.webpack.js.org/loaders/url-loader/).
- `asset/source` exports the source code of the asset. Previously achievable by using [raw-loader](https://v4.webpack.js.org/loaders/raw-loader/).
- `asset` automatically chooses between exporting a data URI and emitting a separate file. Previously achievable by using url-loader with asset size limit.

## Futher reading

[load-images](../load-images/README.md)
