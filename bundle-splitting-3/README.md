# Bundle splitting 3

With `splitChunk.chunks: 'all'` you tell Webpack to extract all chunks (entry chunks, initial chunks, normal/async chunks) that satisfy the default SplitChunksPlugin settings

- entry1.js import an initial chunk `a.js`
- entry2.js import an initial chunk `b.js`
- both `a.js` and `b.js` has the same dependency `large-shared-component.js`
- because `large-shared-component.js` is larger then 30kb, its extracted in `entry1~entry2.js`

`vendors~entry1.js` is generated because we import React inside `entry1.js`
