import './a';
import './b';

import { foo } from './tree-shaking';

foo();

console.log('index.js loaded!');