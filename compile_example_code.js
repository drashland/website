const fs = require("fs");
const path = require("path");
const directory = "drash/example_code";
const outFile = "drash/assets/js/compiled_example_code.js";

console.log(`Compiling ${outFile}...`);

let exampleCode = {};

function walk(directory) {
  const files = fs.readdirSync(directory);
  for (let index in files) {
    const file = files[index];
    const filepath = path.join(directory, file);
    const fileNamespace = filepath.replace(path.basename(filepath), "");
    if (!exampleCode[fileNamespace]) {
      exampleCode[fileNamespace] = {};
    }
    const stats = fs.statSync(filepath);
    const filenameWithoutExtension = path.basename(filepath).split(".")[0];
    const filepathKebabCase = path.basename(filepath).replace("_", "-").split(".")[0];
    if (stats.isDirectory()) {
      walk(filepath);
    } else if (stats.isFile()) {
      exampleCode[fileNamespace][filenameWithoutExtension] = {
        contents: fs.readFileSync(filepath, "utf8"),
      };
    }
  }
}

walk(directory);

fs.writeFileSync(outFile, `export default ${JSON.stringify(exampleCode, null, 4)};`)

console.log("... Done.");
