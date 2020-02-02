# Lazy load images folders

Follow up from [lazy-load-multiple-images](../lazy-load-multiple-images) repository

Dynamically import folders with images depending on the button you click

- Require each images folder separately and extract their filenames ([*getImagesNames.js*](./src/getImagesNames.js)) (note that you [can't pass variable to `require.context`](https://stackoverflow.com/a/51898106/))
- Set `data-image` attribute to each button with an unique id
- Lazy load the appropriate folder based on the id of the button that is clicked ([*lazyLoadImage.js*](./src/lazyLoadImage.js))
- Push images folders into an array to keep them organized (following ids order), then you can call [*generateImage.js*](./src/generateImage.js) on the correct folder ([*buildImages.js*](./src/buildImages.js))
