# Use sass and postcss together

Follow-up from [sass](../sass) and [postcss](../postcss) repositories

## Notes

Because `@import` are handle by sass and then corrected by resolve-url-loader, you don't need postcss-import to solve [postcss-custom-properties issue#138](https://github.com/postcss/postcss-custom-properties/issues/138)