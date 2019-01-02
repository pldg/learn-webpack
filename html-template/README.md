# Create an html-webpack-plugin template

You can [write your own templates](https://github.com/jantimon/html-webpack-plugin#writing-your-own-templates), use the `template` option and pass a custom HTML or EJS file

If no other loader is found *HtmlWebpackPlugin* use [lodash](https://lodash.com/docs/4.17.10#template) to render the template. Even if in this example the template file has `.ejs` extension do not confuse it with [embedded javaScript templating](http://ejs.co/). For this reason you can't use `<%- include partial.ejs %>` to include a partial. To work with partials see [this stackoverflow question](https://stackoverflow.com/questions/42193689/is-there-a-way-to-include-partial-using-html-webpack-plugin/49223788#49223788)

Some variables will be exposed to be used in the template. For example, set `title` in the plugin options and import it in our html page `<title><%= htmlWebpackPlugin.options.title %></title>`

You can even set custom options for *HtmlWebpackPlugin*. In this example we set `googleAnalytics` option in which you can insert your tracking id and send data to google, the template will create the correct script tag for google analytics

By default *HtmlWebpackPlugin* inject all assets into the given template. Set `inject: false` and use your custom template to inject the assets as you need. In this example we inject all css assets with `rel="preload" as="style"`, and all javascript assets with `defer="defer"`

## Notes

For a more complex template see *html-template-2.ejs*