const fs = require("fs");

let html;
const moduleToUpdate = process.argv[3]
const releaseVersion = process.argv[5].split('release-')[1]

// update version in config
const rawConfig = fs.readFileSync("./configs.json")
let config = JSON.parse(rawConfig)
const previousVersion = config[moduleToUpdate].latest_version
const replaceRegex = {
  from: new RegExp(`${moduleToUpdate}@${previousVersion}`, "g"),
  to: `${moduleToUpdate}@${releaseVersion}`
}
config[moduleToUpdate].latest_version = `${releaseVersion}`
if (config[moduleToUpdate].latest_url_deno_land) {
  config[moduleToUpdate].latest_url_deno_land = config[moduleToUpdate].latest_url_deno_land.replace(previousVersion, releaseVersion)
}
if (config[moduleToUpdate].latest_url_nest_land) {
  config[moduleToUpdate].latest_url_nest_land = config[moduleToUpdate].latest_url_nest_land.replace(previousVersion, releaseVersion)
}
fs.writeFileSync("./configs.json", JSON.stringify(config, 0, 2))

if (moduleToUpdate === "drash") {
  // We dont need to update anything for drash as it has no example code, and all instances of the version are handled by the config

}

if (moduleToUpdate === "dmm") {
  // We dont need to update anything for dmm as it has no example code, and all instances of the version are handled by the config
}

if (moduleToUpdate === "rhum") {
  // skip rhum, as there isn't anything to update manually
}

if (moduleToUpdate === "wocket") {
  // skip wocket, as no example code files
}

if (moduleToUpdate === "middleware") {
  // don't need to do anything as the docs link just points to the repo
}