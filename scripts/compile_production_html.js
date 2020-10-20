const fs = require("fs");
let html;

// Create dmm's index.html file
html = fs.readFileSync("./dmm/index.template.html", "utf8");
html = html.replace(/\{\{ environment \}\}/g, "production");
html = html.replace(/\{\{ version \}\}/g, new Date().getTime());
fs.writeFileSync("./dmm/index.html", html);

// Create Drash's index.html file
html = fs.readFileSync("./drash/index.template.html", "utf8");
html = html.replace(/\{\{ environment \}\}/g, "production");
html = html.replace(/\{\{ version \}\}/g, new Date().getTime());
fs.writeFileSync("./drash/index.html", html);

// Create Rhum's index.html file
html = fs.readFileSync("./rhum/index.template.html", "utf8");
html = html.replace(/\{\{ environment \}\}/g, "production");
html = html.replace(/\{\{ version \}\}/g, new Date().getTime());
fs.writeFileSync("./rhum/index.html", html);

// Create Sockets's index.html file
html = fs.readFileSync("./sockets/index.template.html", "utf8");
html = html.replace(/\{\{ environment \}\}/g, "production");
html = html.replace(/\{\{ version \}\}/g, new Date().getTime());
fs.writeFileSync("./sockets/index.html", html);

// Create Cinco's index.html file
html = fs.readFileSync("./cinco/index.template.html", "utf8");
html = html.replace(/\{\{ environment \}\}/g, "production");
html = html.replace(/\{\{ version \}\}/g, new Date().getTime());
fs.writeFileSync("./cinco/index.html", html);
