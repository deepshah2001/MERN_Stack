console.log("Hello, World!");

// REPL - Read Evaluation Print Loop

// To access or manage native node modules.
const fs = require("fs");       // Importing a node module named fs (file system) which will be used to interact with computer's hardware using node.

fs.copyFileSync("file1.txt", "file2.txt");      // used to copy src file content to destination file. If the destination file doesn't exist then will create new one and if exist then will overwrite it.
// Syntax -> fs.copyFileSynce(src_file_name (or location), dest_file_name (or location));

// NPM (Node Package Manager) - Package manager for external modules i.e. modules which anybody can build but we can incorporate in our projects.
// To access or manage external node modules using NPM.

// To start a npm -> npm init and to install it npm install "package_name".

// After installing a new npm package, it is added to dependencies in our "package.json" file i.e. now our module/project is depedent on that package.

const superVillains = require("supervillains");       // Importing a node module named supervillains using npm.

var superVillainsName = superVillains.random();

console.log(superVillainsName);