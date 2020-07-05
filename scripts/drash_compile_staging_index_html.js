const fs = require("fs");
const outFile = "./drash/staging/index.html";

let html = fs.readFileSync("./drash/index.template.html", "utf8");
html = html.replace(/\{\{ environment \}\}/g, "staging");

fs.writeFileSync(outFile, html);
