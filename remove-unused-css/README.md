# Remove unused css

Remove unused css with [purgecss](https://purgecss.com).

Do `npm run prod`:

- All unused *bootstrap.css* styles are removed, only those needed for `class="alert alert-danger"` component are output in `dist/main.css` bundle.
- `.unused-class` is removed.
- `.text-color` is placed in the bundle.
- `.textUnderline` is dynamic added in javascript, purgecss detect it and place it in the bundle.
- By using [safelist option](https://purgecss.com/safelisting.html#safelisting) `.do_not_remove_this-class` will not be removed.

## Notes

Purgecss will install [node-glob](https://github.com/isaacs/node-glob) to detect classes.

It works with sass files too.
