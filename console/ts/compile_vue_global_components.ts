import { Drash } from "../../deps.ts";
import config from "../../conf/app.ts";
const Encoder = new TextEncoder();

let files = Drash.Util.Exports.getFileSystemStructure(`${config.server.directory}/src/vue/components/global`);
let importString = 'import Vue from \"vue\";\n\n';
files.forEach(pathObj => {

  if (pathObj.isDirectory()) {
    return;
  }
  let snakeCasedNoExtension = pathObj.filename
    .replace(".vue", "") // take out the .vue extension
    .replace(/_/g, "-"); // change all underscores to - so the component name is `some-name` and not `some_name`
  importString += 'import ' + pathObj.snake_cased + ' from \"' + pathObj.path + '\";\nVue.component(\"' + snakeCasedNoExtension + '\", ' + pathObj.snake_cased + ');\n\n';
});

let outputFile = `${config.server.directory}/public/assets/js/compiled_vue_global_components.js`;
Deno.writeFileSync(outputFile, Encoder.encode(importString));
