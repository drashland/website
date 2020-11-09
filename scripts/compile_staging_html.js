const fs = require("fs");
const configs = require("../configs.json");
const buildVersion = new Date().getTime().toString();
let html;

// Create the /staging/index.html
html = fs.readFileSync("./index.template.html", "utf8");
html = html.replace(/\{\{ base_url \}\}/g, configs.base_urls.staging);
fs.writeFileSync("./staging/index.html", html);

// Create dmm's staging/index.html file
html = fs.readFileSync("./dmm/index.template.html", "utf8");
html = html.replace(/\{\{ environment \}\}/g, "staging");
html = html.replace(/\{\{ version \}\}/g, buildVersion);
fs.writeFileSync("./staging/dmm/index.html", html);

// Create Drash's staging/index.html file
html = fs.readFileSync("./drash/index.template.html", "utf8");
html = html.replace(/\{\{ environment \}\}/g, "staging");
html = html.replace(/\{\{ version \}\}/g, buildVersion);
fs.writeFileSync("./staging/drash/index.html", html);

// Create Rhum's staging/index.html file
html = fs.readFileSync("./rhum/index.template.html", "utf8");
html = html.replace(/\{\{ environment \}\}/g, "staging");
html = html.replace(/\{\{ version \}\}/g, buildVersion);
fs.writeFileSync("./staging/rhum/index.html", html);

// Create Wockets staging/index.html file
html = fs.readFileSync("./wocket/index.template.html", "utf8");
html = html.replace(/\{\{ environment \}\}/g, "staging");
html = html.replace(/\{\{ version \}\}/g, buildVersion);
fs.writeFileSync("./staging/wocket/index.html", html);

// Create Sinco's staging/index.html file
html = fs.readFileSync("./cino/index.template.html", "utf8");
html = html.replace(/\{\{ environment \}\}/g, "staging");
html = html.replace(/\{\{ version \}\}/g, buildVersion);
fs.writeFileSync("./sinco/staging/index.html", html);
