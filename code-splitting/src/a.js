// This is a regular import, and because it's smaller then 20kb it'll be bundle
// inside src_a_js.js. Instead, if you import large-component.js it'll be
// splitted in a different file
import "./small-component";

console.log("a.js loaded!");
