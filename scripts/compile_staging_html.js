const fs = require("fs");
let html;

// Create dmm's staging.html file
html = fs.readFileSync("./dmm/index.template.html", "utf8");
html = html.replace(/\{\{ environment \}\}/g, "staging");
html = html.replace(/\{\{ version \}\}/g, new Date().getTime());
fs.writeFileSync("./dmm/staging.html", html);

// Create Drash's staging.html file
html = fs.readFileSync("./drash/index.template.html", "utf8");
html = html.replace(/\{\{ environment \}\}/g, "staging");
html = html.replace(/\{\{ version \}\}/g, new Date().getTime());
fs.writeFileSync("./drash/staging.html", html);

// Create Rhum's staging.html file
html = fs.readFileSync("./rhum/index.template.html", "utf8");
html = html.replace(/\{\{ environment \}\}/g, "staging");
html = html.replace(/\{\{ version \}\}/g, new Date().getTime());
fs.writeFileSync("./rhum/staging.html", html);

// Create Sockets's staging.html file
html = fs.readFileSync("./sockets/index.template.html", "utf8");
html = html.replace(/\{\{ environment \}\}/g, "staging");
html = html.replace(/\{\{ version \}\}/g, new Date().getTime());
fs.writeFileSync("./sockets/staging.html", html);
