// Thanks to "tree shaking" functionality, you should see only `foo` and not
// `bar` when running the build using production mode
import { foo } from './tree-shaking';

foo();

console.log('index.js loaded!');