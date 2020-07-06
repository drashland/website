const fs = require("fs");
const path = require("path");
const configs = require("../configs.json");
const directory = configs.root_directory + "/drash/vue/global";
const outFile = configs.root_directory + "/drash/assets/js/compiled_vue_global_components.js";

console.log(`Compiling ${outFile}`);

let importString = `import Vue from "vue";\n`;

function walk(directory) {
  const files = fs.readdirSync(directory);
  for (let index in files) {
    const file = files[index];
    const filepath = path.join(directory, file);
    const stats = fs.statSync(filepath);
    const filenameWithoutExtension = path.basename(filepath).split(".")[0];
    const filepathKebabCase = path.basename(filepath).replace(/_/g, "-").split(".")[0];
    if (stats.isDirectory()) {
      walk(filepath);
    } else if (stats.isFile()) {
      importString += `import ${filenameWithoutExtension} from "/${filepath}";
Vue.component("${filepathKebabCase}", ${filenameWithoutExtension});
`;
    }
  }
}

walk(directory);

fs.writeFileSync(outFile, importString);
