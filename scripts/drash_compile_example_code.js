const fs = require("fs");
const path = require("path");
const configs = require("../configs.json");
const directory = configs.root_directory + "/drash/example_code";
const outFile = configs.root_directory + "/drash/assets/js/compiled_example_code.js";

console.log(`Compiling ${outFile}`);

let exampleCode = {};

function walk(directory) {
  const files = fs.readdirSync(directory);
  for (let index in files) {
    const file = files[index];
    const filepath = path.join(directory, file);
    let fileNamespace = filepath.replace(path.basename(filepath), "");
    fileNamespace = fileNamespace.substr(0, fileNamespace.length - 1);
    if (!exampleCode[fileNamespace]) {
      exampleCode[fileNamespace] = {};
    }
    const stats = fs.statSync(filepath);
    const filenameWithoutExtension = path.basename(filepath).split(".")[0];
    const filepathKebabCase = path.basename(filepath).replace("_", "-").split(".")[0];
    if (stats.isDirectory()) {
      walk(filepath);
    } else if (stats.isFile()) {
      let contents = fs.readFileSync(filepath, "utf8");
      contents = contents.replace("https://deno.land/x/drash/mod.ts", configs.drash.latest_url_deno_land);
      exampleCode[fileNamespace][filenameWithoutExtension] = {
        filepath: `/path/to/your/project/${path.basename(filepath)}`,
        contents: contents,
      };
    }
  }
}

walk(directory);

fs.writeFileSync(outFile, `export default ${JSON.stringify(exampleCode, null, 4)};`)
