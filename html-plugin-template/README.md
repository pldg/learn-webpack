# Generate html file from an custom template

You can use [Html Webpack Plugin](https://github.com/jantimon/html-webpack-plugin) to generate html files.

If the default generated html doesn't meet your needs you can supply your own [template](https://github.com/jantimon/html-webpack-plugin#writing-your-own-templates).

## Explain this example

Read *template.html*, *template-utils.js* and *webpack.config.js*.

## Note

The template is by default rendered using [lodash](https://lodash.com/docs/4.17.10#template), do not confuse it with [ejs](http://ejs.co/) (you can't use `<%- include partial.html %>` to include a partial).
