const fs = require("fs");

const contents = fs.readFileSync("./configs.js")
  .toString("utf-8")
  .replace("export const configs = ", "")
  .replace("};", "}");

const configs = JSON.parse(contents);

module.exports = configs;
