# Bundle

You can use webpack to merge multiple javascripts files into one single bundle. The output of the final bundle depends on webpack configuration (the [mode](../mode/README.md) option will load the default optimizations).

## Explain this example

We expect the code inside *shared-component.js* to not be duplicated even if it's imported inside *a.js* and *b.js*. This will work on both development and production modes.

Run `npm run prod` for production build:

```js
(()=>{var o={42:()=>{console.log("shared-component.js loaded!")}},e={};function s(r){var l=e[r];if(void 0!==l)return l.exports;var d=e[r]={exports:{}};return o[r](d,d.exports,s),d.exports}(()=>{"use strict";s(42),console.log("a.js loaded!"),console.log("b.js loaded!"),console.log("index.js loaded!")})()})();
```

## Notes

In this example [`env`](https://webpack.js.org/guides/environment-variables/) is used to load two different webpack configurations, one for production (`npm run prod`) and one for development (`npm run dev`), for more info see [multiple-configurations](../multiple-configurations/README.md) example.

## Tips

To make the output cleaner to examine set [`devtool: false`](https://webpack.js.org/configuration/devtool/) (webpack generate eval based source maps by default and doing this will disable the behavior).

From webpack 5.20 you can use [clean](https://webpack.js.org/configuration/output/#outputclean) option to clean the output directory before emit.
