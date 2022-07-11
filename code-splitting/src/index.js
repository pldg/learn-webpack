// Those are dynamic imports therefor they'll be splitted different files. If
// you change them to regular import statements everything will be included
// inside main.js bundle
import("react");
import("./a");
import("./b");

console.log("index.js loaded!");
