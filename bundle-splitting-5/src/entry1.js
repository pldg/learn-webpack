import 'react';
import './chunks/a'; // also import "large-shared-component.js"
import './chunks/b'; // also import "large-shared-component.js"

import('./chunks/lazy');

console.log('entry1.js loaded!');