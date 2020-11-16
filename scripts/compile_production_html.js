const fs = require("fs");
const configs = require("../configs.json");
const buildVersion = new Date().getTime().toString();
let html;

// Create the /index.html
html = fs.readFileSync("./index.template.html", "utf8");
html = html.replace(/\{\{ base_url \}\}/g, configs.base_urls.production);
fs.writeFileSync("./index.html", html);

// Create dmm's index.html file
html = fs.readFileSync("./dmm/index.template.html", "utf8");
html = html.replace(/\{\{ environment \}\}/g, "production");
html = html.replace(/\{\{ version \}\}/g, buildVersion);
fs.writeFileSync("./dmm/index.html", html);

// Create Drash's index.html file
html = fs.readFileSync("./drash/index.template.html", "utf8");
html = html.replace(/\{\{ environment \}\}/g, "production");
html = html.replace(/\{\{ version \}\}/g, buildVersion);
fs.writeFileSync("./drash/index.html", html);

// Create Rhum's index.html file
html = fs.readFileSync("./rhum/index.template.html", "utf8");
html = html.replace(/\{\{ environment \}\}/g, "production");
html = html.replace(/\{\{ version \}\}/g, buildVersion);
fs.writeFileSync("./rhum/index.html", html);

// Create Wockets index.html file
html = fs.readFileSync("./wocket/index.template.html", "utf8");
html = html.replace(/\{\{ environment \}\}/g, "production");
html = html.replace(/\{\{ version \}\}/g, buildVersion);
fs.writeFileSync("./wocket/index.html", html);
