const fs = require("fs");
const path = require("path");
const configs = require("../configs.json");
const moduleName = process.argv[2];
const directory = configs.root_directory + "/src/modules/" + moduleName + "/vue/pages";
const outFile = configs.root_directory + "/src/modules/" + moduleName +"/compiled_vue_routes.js";

console.log(`Compiling ${outFile}`);

let importString = ``;
let exportString = `
export default [
`;
let count = 0;

function walk(directory) {
  const files = fs.readdirSync(directory);
  for (let index in files) {
    const file = files[index];
    const filepath = path.join(directory, file);
    const stats = fs.statSync(filepath);
    const filenameWithoutExtension = path.basename(filepath).split(".")[0];
    const filepathKebabCase = path.basename(filepath).replace("_", "-").split(".")[0];
    if (stats.isDirectory()) {
      walk(filepath);
    } else if (stats.isFile()) {
      importString += `
import * as ${filenameWithoutExtension}_${count} from "/${filepath.replace("src/modules/", "")}";`;
      exportString += `  ${filenameWithoutExtension}_${count},\n`;
    }
    count += 1;
  }
}

walk(directory);
exportString += `];`;

fs.writeFileSync(outFile, importString + exportString);
