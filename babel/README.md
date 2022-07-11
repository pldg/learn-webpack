# Transpile javascript with Babel

[Babel](https://babeljs.io/) is a tool to convert ECMAScript 2015+ code into a backwards compatible version of JavaScript. It transform new syntax into old one, apply polyfills, and more.

In webpack use [babel-loader](https://github.com/babel/babel-loader) to transpile ES2015+ code to support older browsers.

*babel.config.js* handle Babel configuration.

You'll need [@babel/preset-env](https://babeljs.io/docs/en/babel-preset-env.html) to be able to transpile your javascript code. It can be configured to include only transforms needed for the browsers you want to support. It can also be set to load the needed polyfills (see [babel-polyfill](../babel-polyfill) example).

By setting [browserslist](https://github.com/browserslist/browserslist) you can choose which browser to target for your final bundle. In this example it's set inside *package.json*.

## Explain this example

Read comments inside *src/\*js* files. Run the build `npm run dev` and inspect results inside *dist* folder.

## Notes

[Tree shaking](../tree-shaking) should works by default when running in *production mode*, if there are problems you can set babel [modules](https://babeljs.io/docs/en/next/babel-preset-env#modules) option to `false`.

You may also want to use [babel-plugin-transform-imports](https://www.npmjs.com/package/babel-plugin-transform-imports) to load only specific part of an ES2015 library.

If you have problem with [dynamic import](../dynamic-import) try to add [syntax-dynamic-import](https://babeljs.io/docs/en/babel-plugin-syntax-dynamic-import) Babel plugin.
