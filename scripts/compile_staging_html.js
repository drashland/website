const fs = require("fs");
let html;
let buildVersion = new Date().getTime();

// Create dmm's staging/index.html file
html = fs.readFileSync("./dmm/index.template.html", "utf8");
html = html.replace(/\{\{ environment \}\}/g, "staging");
html = html.replace(/\{\{ version \}\}/g, buildVersion);
fs.writeFileSync("./dmm/staging/index.html", html);

// Create Drash's staging/index.html file
html = fs.readFileSync("./drash/index.template.html", "utf8");
html = html.replace(/\{\{ environment \}\}/g, "staging");
html = html.replace(/\{\{ version \}\}/g, buildVersion);
fs.writeFileSync("./drash/staging/index.html", html);

// Create Rhum's staging/index.html file
html = fs.readFileSync("./rhum/index.template.html", "utf8");
html = html.replace(/\{\{ environment \}\}/g, "staging");
html = html.replace(/\{\{ version \}\}/g, buildVersion);
fs.writeFileSync("./rhum/staging/index.html", html);

// Create Sockets's staging/index.html file
html = fs.readFileSync("./sockets/index.template.html", "utf8");
html = html.replace(/\{\{ environment \}\}/g, "staging");
html = html.replace(/\{\{ version \}\}/g, buildVersion);
fs.writeFileSync("./sockets/staging/index.html", html);

// Create Cinco's staging/index.html file
html = fs.readFileSync("./cinco/index.template.html", "utf8");
html = html.replace(/\{\{ environment \}\}/g, "staging");
html = html.replace(/\{\{ version \}\}/g, buildVersion);
fs.writeFileSync("./cinco/staging/index.html", html);
