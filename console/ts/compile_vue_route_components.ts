import Drash from "../deno-drash/mod.ts";
import config from "./conf/app.ts";
const Encoder = new TextEncoder();

let uniqueId = 0;
let files = Drash.Util.Exports.getFileSystemStructure(`${config.server.directory}/src/vue/components/pages`);
let importString = "";
let componentName = "";
let components = [];

// Write the `import` lines
files.forEach(pathObj => {
  componentName = pathObj.snake_cased + '_' + uniqueId;
  if (pathObj.isDirectory()) {
    return;
  }
  importString += 'import * as ' + componentName + ' from \"' + pathObj.path + '\";\n';
  uniqueId += 1;
  components.push(componentName);
});

// Write the `export` block
importString += "\nexport default [\n";
components.forEach(component => {
  importString += `  ${component},\n`;
});
importString += "];";
let outputFile = `${config.server.directory}/public/assets/js/compiled_routes.js`;
Deno.writeFileSync(outputFile, Encoder.encode(importString));
