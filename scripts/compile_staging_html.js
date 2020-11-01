const fs = require("fs");
let html;
let buildVersion = new Date().getTime();

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

// Create Sockets's staging/index.html file
html = fs.readFileSync("./sockets/index.template.html", "utf8");
html = html.replace(/\{\{ environment \}\}/g, "staging");
html = html.replace(/\{\{ version \}\}/g, buildVersion);
fs.writeFileSync("./staging/sockets/index.html", html);
