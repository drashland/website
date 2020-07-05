const fs = require("fs");
const outFile = "./drash/staging.html";

let html = fs.readFileSync("./drash/index.template.html", "utf8");
html = html.replace(/\{\{ environment \}\}/g, "staging");
html = html.replace(/\{\{ version \}\}/g, new Date().getTime());

fs.writeFileSync(outFile, html);
