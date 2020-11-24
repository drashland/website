const fs = require("fs");
const configs = require("../configs.json");
const buildVersion = new Date().getTime().toString();
let html;

const args = process.argv.slice();

args.shift(); // take off the node binary path
args.shift(); // take off the path to this script

const moduleName = args[0];
const title = ucfirst(moduleName);
const version = args[1];

html = fs.readFileSync("./index.template.version.html", "utf8");
html = html.replace(/\{\{ title \}\}/g, title);
html = html.replace(/\{\{ module \}\}/g, moduleName.toLowerCase());
html = html.replace(/\{\{ build \}\}/g, new Date().getTime().toString());
html = html.replace(/\{\{ version \}\}/g, version);
fs.writeFileSync(`./${moduleName}/${version}/index.html`, html);

function ucfirst(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
