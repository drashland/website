import { Drash } from "../../deps.ts";
import config from "../../conf/app.ts";
const Encoder = new TextEncoder();

let uniqueId: number = 0;
let files: any = Drash.Util.Exports.getFileSystemStructure(`${config.server.directory}/src/vue/components/pages`);
let importString: string = "";
let componentName: string = "";
let components: any = [];

// Write the `import` lines
files.forEach((pathObj: any) => {
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
components.forEach((component: any) => {
  importString += `  ${component},\n`;
});
importString += "];";
let outputFile = `${config.server.directory}/public/assets/js/compiled_routes.js`;
Deno.writeFileSync(outputFile, Encoder.encode(importString));
