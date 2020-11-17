const fs = require("fs");
const configs = require("../configs.json");
const buildVersion = new Date().getTime().toString();
let html;

compile("landing");
compile("dmm");
compile("drash");
compile("rhum");
// build("sinco");
compile("wocket");

function compile(module) {
  if (module == "landing") {
    html = fs.readFileSync("./index.template.html", "utf8");
    html = html.replace(/\{\{ base_url \}\}/g, configs.base_urls.staging);
    fs.writeFileSync("./staging/index.html", html);
    return;
  }

  html = fs.readFileSync("./index.template.dev.html", "utf8");
  html = html.replace(/\{\{ environment \}\}/g, "production");
  html = html.replace(/\{\{ version \}\}/g, buildVersion);
  fs.writeFileSync(`./staging/${module}/index.html`, html);
}
