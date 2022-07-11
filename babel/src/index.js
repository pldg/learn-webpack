// Test if tree-shaking works with Babel
// Note: it should work only when build in *production mode*
import { foo } from "./tree-shaking";

foo();

// Test if Babel support dynamic import, it should output a separate file
import("./lazy-load");

// The `const` keyword and the arrow function should be transpiled by Babel
// because "browserlist" is set to "ie 11", if you set it to "default" they'll
// not be transpiled because newer browser support those sytax
const p = new Promise((resolve) => resolve());

console.log("index.js loaded!");
