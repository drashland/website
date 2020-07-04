const fs = require("fs");
const path = require("path");
const directory = "drash/vue/global";
const outFile = "drash/assets/js/compiled_vue_global_components.js";

console.log(`Compiling ${outFile}...`);

const files = fs.readdirSync(directory);
let importString = `import Vue from "vue";\n\n`;
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
import ${filenameWithoutExtension} from "/${filepath}";
Vue.component("${filepathKebabCase}", ${filenameWithoutExtension});
`;
  }
}

fs.writeFileSync(outFile, importString);

console.log("... Done.");
