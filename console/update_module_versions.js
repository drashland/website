const fs = require("fs");

const moduleToUpdate = process.argv[3]
const releaseVersion = process.argv[5].split('release-')[1]

// update version in config
updateConfigs();
updateBaseResource();

///////////////////////////////////////////////////////////////////////////////
// FILE MARKER - FUNCTIONS ////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////

function updateBaseResource() {
  const filename = "./src/resources/base_resource.ts";
  let contents = fs.readFileSync(filename).toString("utf-8");
  console.log(contents);
  const re = {
    from: new RegExp(`"${moduleToUpdate}.+",`, "g"),
    to: `"${moduleToUpdate}": "${releaseVersion}",`
  };
  contents = contents.replace(re.from, re.to);
  fs.writeFileSync(filename, contents);
}

function updateConfigs() {
  const rawConfig = fs.readFileSync("./configs.json").toString("utf-8");
  let config = JSON.parse(rawConfig)
  const previousVersion = config[moduleToUpdate].latest_version
  config[moduleToUpdate].latest_version = `${releaseVersion}`
  if (config[moduleToUpdate].latest_url_deno_land) {
    config[moduleToUpdate].latest_url_deno_land = config[moduleToUpdate].latest_url_deno_land.replace(previousVersion, releaseVersion)
  }
  if (config[moduleToUpdate].latest_url_nest_land) {
    config[moduleToUpdate].latest_url_nest_land = config[moduleToUpdate].latest_url_nest_land.replace(previousVersion, releaseVersion)
  }
  fs.writeFileSync("./configs.json", JSON.stringify(config, 0, 2))
}
