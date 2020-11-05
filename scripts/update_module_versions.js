const fs = require("fs");

let html;
const moduleToUpdate = process.argv[3]
const releaseVersion = process.argv[5]

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
console.log(replaceRegex)

if (moduleToUpdate === "drash") {
  html = fs.readFileSync("./drash/example_code/tutorials/resources/creating_a_resource/users_resource_optional_path_params.ts", "utf8")
  html = html.replace(replaceRegex.from, replaceRegex.to)
  fs.writeFileSync("./drash/example_code/tutorials/resources/creating_a_resource/users_resource_optional_path_params.ts", html);

  html = fs.readFileSync("./drash/example_code/advanced_tutorials/content_negotiation/part_2/app.ts", "utf8")
  html = html.replace(replaceRegex.from, replaceRegex.to)
  fs.writeFileSync("./drash/example_code/advanced_tutorials/content_negotiation/part_2/app.ts", html);

  html = fs.readFileSync("./drash/example_code/advanced_tutorials/content_negotiation/part_3/app.ts", "utf8")
  html = html.replace(replaceRegex.from, replaceRegex.to)
  fs.writeFileSync("./drash/example_code/advanced_tutorials/content_negotiation/part_3/app.ts", html);

  html = fs.readFileSync("./drash/example_code/advanced_tutorials/content_negotiation/part_3/users_resource.ts", "utf8")
  html = html.replace(replaceRegex.from, replaceRegex.to)
  fs.writeFileSync("./drash/example_code/advanced_tutorials/content_negotiation/part_3/users_resource.ts", html);

  html = fs.readFileSync("./drash/example_code/advanced_tutorials/content_negotiation/part_4/app.ts", "utf8")
  html = html.replace(replaceRegex.from, replaceRegex.to)
  fs.writeFileSync("./drash/example_code/advanced_tutorials/content_negotiation/part_4/app.ts", html);

  html = fs.readFileSync("./drash/example_code/advanced_tutorials/content_negotiation/part_4/users_resource.ts", "utf8")
  html = html.replace(replaceRegex.from, replaceRegex.to)
  fs.writeFileSync("./drash/example_code/advanced_tutorials/content_negotiation/part_4/users_resource.ts", html);

  html = fs.readFileSync("./drash/example_code/advanced_tutorials/content_negotiation/part_5/app.ts", "utf8")
  html = html.replace(replaceRegex.from, replaceRegex.to)
  fs.writeFileSync("./drash/example_code/advanced_tutorials/content_negotiation/part_5/app.ts", html);

  html = fs.readFileSync("./drash/example_code/advanced_tutorials/content_negotiation/part_5/users_resource.ts", "utf8")
  html = html.replace(replaceRegex.from, replaceRegex.to)
  fs.writeFileSync("./drash/example_code/advanced_tutorials/content_negotiation/part_5/users_resource.ts", html);

  html = fs.readFileSync("./drash/example_code/advanced_tutorials/content_negotiation/part_5/response.ts", "utf8")
  html = html.replace(replaceRegex.from, replaceRegex.to)
  fs.writeFileSync("./drash/example_code/advanced_tutorials/content_negotiation/part_5/response.ts", html);

  html = fs.readFileSync("./drash/example_code/advanced_tutorials/using_drash_with_docker_compose/part_1/src/app.ts", "utf8")
  html = html.replace(replaceRegex.from, replaceRegex.to)
  fs.writeFileSync("./drash/example_code/advanced_tutorials/using_drash_with_docker_compose/part_1/src/app.ts", html);

  html = fs.readFileSync("./drash/example_code/advanced_tutorials/using_drash_with_docker_compose/part_4/.docker/drash.dockerfile", "utf8")
  html = html.replace(replaceRegex.from, replaceRegex.to)
  fs.writeFileSync("./drash/example_code/advanced_tutorials/using_drash_with_docker_compose/part_4/.docker/drash.dockerfile", html);

  html = fs.readFileSync("./drash/example_code/advanced_tutorials/using_drash_with_docker_compose/part_5/.docker/drash.dockerfile", "utf8")
  html = html.replace(replaceRegex.from, replaceRegex.to)
  fs.writeFileSync("./drash/example_code/advanced_tutorials/using_drash_with_docker_compose/part_5/.docker/drash.dockerfile", html);

  html = fs.readFileSync("./drash/example_code/advanced_tutorials/using_drash_with_docker_compose/part_6/src/app.ts", "utf8")
  html = html.replace(replaceRegex.from, replaceRegex.to)
  fs.writeFileSync("./drash/example_code/advanced_tutorials/using_drash_with_docker_compose/part_6/src/app.ts", html);

  html = fs.readFileSync("./drash/example_code/advanced_tutorials/creating_a_react_app/deno_tweets/part_1/app.ts", "utf8")
  html = html.replace(replaceRegex.from, replaceRegex.to)
  fs.writeFileSync("./drash/example_code/advanced_tutorials/creating_a_react_app/deno_tweets/part_1/app.ts", html);

  html = fs.readFileSync("./drash/example_code/advanced_tutorials/creating_a_react_app/deno_tweets/part_2/app.ts", "utf8")
  html = html.replace(replaceRegex.from, replaceRegex.to)
  fs.writeFileSync("./drash/example_code/advanced_tutorials/creating_a_react_app/deno_tweets/part_2/app.ts", html);

  html = fs.readFileSync("./drash/example_code/advanced_tutorials/creating_a_react_app/deno_tweets/part_2/home_resource.ts", "utf8")
  html = html.replace(replaceRegex.from, replaceRegex.to)
  fs.writeFileSync("./drash/example_code/advanced_tutorials/creating_a_react_app/deno_tweets/part_2/home_resource.ts", html);

  html = fs.readFileSync("./drash/example_code/advanced_tutorials/creating_a_react_app/deno_tweets/part_3/app.ts", "utf8")
  html = html.replace(replaceRegex.from, replaceRegex.to)
  fs.writeFileSync("./drash/example_code/advanced_tutorials/creating_a_react_app/deno_tweets/part_3/app.ts", html);

  html = fs.readFileSync("./drash/example_code/advanced_tutorials/creating_a_react_app/deno_tweets/part_3/home_resource.ts", "utf8")
  html = html.replace(replaceRegex.from, replaceRegex.to)
  fs.writeFileSync("./drash/example_code/advanced_tutorials/creating_a_react_app/deno_tweets/part_3/home_resource.ts", html);

  html = fs.readFileSync("./drash/example_code/advanced_tutorials/creating_a_static_html_app/about_me/part_1/app.ts", "utf8")
  html = html.replace(replaceRegex.from, replaceRegex.to)
  fs.writeFileSync("./drash/example_code/advanced_tutorials/creating_a_static_html_app/about_me/part_1/app.ts", html);

  html = fs.readFileSync("./drash/example_code/advanced_tutorials/creating_a_static_html_app/about_me/part_2/app.ts", "utf8")
  html = html.replace(replaceRegex.from, replaceRegex.to)
  fs.writeFileSync("./drash/example_code/advanced_tutorials/creating_a_static_html_app/about_me/part_2/app.ts", html);

  html = fs.readFileSync("./drash/example_code/advanced_tutorials/creating_a_static_html_app/about_me/part_2/about_resource.ts", "utf8")
  html = html.replace(replaceRegex.from, replaceRegex.to)
  fs.writeFileSync("./drash/example_code/advanced_tutorials/creating_a_static_html_app/about_me/part_2/about_resource.ts", html);

  html = fs.readFileSync("./drash/example_code/advanced_tutorials/creating_a_static_html_app/about_me/part_2/contact_resource.ts", "utf8")
  html = html.replace(replaceRegex.from, replaceRegex.to)
  fs.writeFileSync("./drash/example_code/advanced_tutorials/creating_a_static_html_app/about_me/part_2/contact_resource.ts", html);

  html = fs.readFileSync("./drash/example_code/advanced_tutorials/creating_a_static_html_app/about_me/part_2/home_resource.ts", "utf8")
  html = html.replace(replaceRegex.from, replaceRegex.to)
  fs.writeFileSync("./drash/example_code/advanced_tutorials/creating_a_static_html_app/about_me/part_2/home_resource.ts", html);

  html = fs.readFileSync("./drash/example_code/advanced_tutorials/creating_a_static_html_app/about_me/part_3/app.ts", "utf8")
  html = html.replace(replaceRegex.from, replaceRegex.to)
  fs.writeFileSync("./drash/example_code/advanced_tutorials/creating_a_static_html_app/about_me/part_3/app.ts", html);

  html = fs.readFileSync("./drash/example_code/advanced_tutorials/creating_a_static_html_app/about_me/part_3/about_resource.ts", "utf8")
  html = html.replace(replaceRegex.from, replaceRegex.to)
  fs.writeFileSync("./drash/example_code/advanced_tutorials/creating_a_static_html_app/about_me/part_3/about_resource.ts", html);

  html = fs.readFileSync("./drash/example_code/advanced_tutorials/creating_a_static_html_app/about_me/part_3/contact_resource.ts", "utf8")
  html = html.replace(replaceRegex.from, replaceRegex.to)
  fs.writeFileSync("./drash/example_code/advanced_tutorials/creating_a_static_html_app/about_me/part_3/contact_resource.ts", html);

  html = fs.readFileSync("./drash/example_code/advanced_tutorials/creating_a_static_html_app/about_me/part_3/home_resource.ts", "utf8")
  html = html.replace(replaceRegex.from, replaceRegex.to)
  fs.writeFileSync("./drash/example_code/advanced_tutorials/creating_a_static_html_app/about_me/part_3/home_resource.ts", html);

  html = fs.readFileSync("./drash/example_code/advanced_tutorials/creating_a_vue_app/deno_tweets/part_1/app.ts", "utf8")
  html = html.replace(replaceRegex.from, replaceRegex.to)
  fs.writeFileSync("./drash/example_code/advanced_tutorials/creating_a_vue_app/deno_tweets/part_1/app.ts", html);

  html = fs.readFileSync("./drash/example_code/advanced_tutorials/creating_a_vue_app/deno_tweets/part_2/app.ts", "utf8")
  html = html.replace(replaceRegex.from, replaceRegex.to)
  fs.writeFileSync("./drash/example_code/advanced_tutorials/creating_a_vue_app/deno_tweets/part_2/app.ts", html);

  html = fs.readFileSync("./drash/example_code/advanced_tutorials/creating_a_vue_app/deno_tweets/part_2/home_resource.ts", "utf8")
  html = html.replace(replaceRegex.from, replaceRegex.to)
  fs.writeFileSync("./drash/example_code/advanced_tutorials/creating_a_vue_app/deno_tweets/part_2/home_resource.ts", html);

  html = fs.readFileSync("./drash/example_code/advanced_tutorials/creating_a_vue_app/deno_tweets/part_3/app.ts", "utf8")
  html = html.replace(replaceRegex.from, replaceRegex.to)
  fs.writeFileSync("./drash/example_code/advanced_tutorials/creating_a_vue_app/deno_tweets/part_3/app.ts", html);

  html = fs.readFileSync("./drash/example_code/advanced_tutorials/creating_a_vue_app/deno_tweets/part_3/home_resource.ts", "utf8")
  html = html.replace(replaceRegex.from, replaceRegex.to)
  fs.writeFileSync("./drash/example_code/advanced_tutorials/creating_a_vue_app/deno_tweets/part_3/home_resource.ts", html);

  html = fs.readFileSync("./drash/example_code/advanced_tutorials/creating_a_vue_app/deno_tweets/part_4/app.ts", "utf8")
  html = html.replace(replaceRegex.from, replaceRegex.to)
  fs.writeFileSync("./drash/example_code/advanced_tutorials/creating_a_vue_app/deno_tweets/part_4/app.ts", html);

  html = fs.readFileSync("./drash/example_code/advanced_tutorials/creating_a_vue_app/deno_tweets/part_4/home_resource.ts", "utf8")
  html = html.replace(replaceRegex.from, replaceRegex.to)
  fs.writeFileSync("./drash/example_code/advanced_tutorials/creating_a_vue_app/deno_tweets/part_4/home_resource.ts", html);

  html = fs.readFileSync("./drash/example_code/advanced_tutorials/creating_an_api/coffee_and_tea/part_2/app.ts", "utf8")
  html = html.replace(replaceRegex.from, replaceRegex.to)
  fs.writeFileSync("./drash/example_code/advanced_tutorials/creating_an_api/coffee_and_tea/part_2/app.ts", html);

  html = fs.readFileSync("./drash/example_code/advanced_tutorials/creating_an_api/coffee_and_tea/part_3/app.ts", "utf8")
  html = html.replace(replaceRegex.from, replaceRegex.to)
  fs.writeFileSync("./drash/example_code/advanced_tutorials/creating_an_api/coffee_and_tea/part_3/app.ts", html);

  html = fs.readFileSync("./drash/example_code/advanced_tutorials/creating_an_api/coffee_and_tea/part_3/coffee_resource.ts", "utf8")
  html = html.replace(replaceRegex.from, replaceRegex.to)
  fs.writeFileSync("./drash/example_code/advanced_tutorials/creating_an_api/coffee_and_tea/part_3/coffee_resource.ts", html);

  html = fs.readFileSync("./drash/example_code/advanced_tutorials/creating_an_api/coffee_and_tea/part_3/tea_resource.ts", "utf8")
  html = html.replace(replaceRegex.from, replaceRegex.to)
  fs.writeFileSync("./drash/example_code/advanced_tutorials/creating_an_api/coffee_and_tea/part_3/tea_resource.ts", html);

  html = fs.readFileSync("./drash/example_code/advanced_tutorials/creating_an_api/coffee_and_tea/part_4/app.ts", "utf8")
  html = html.replace(replaceRegex.from, replaceRegex.to)
  fs.writeFileSync("./drash/example_code/advanced_tutorials/creating_an_api/coffee_and_tea/part_4/app.ts", html);

  html = fs.readFileSync("./drash/example_code/advanced_tutorials/creating_an_api/coffee_and_tea/part_4/coffee_resource.ts", "utf8")
  html = html.replace(replaceRegex.from, replaceRegex.to)
  fs.writeFileSync("./drash/example_code/advanced_tutorials/creating_an_api/coffee_and_tea/part_4/coffee_resource.ts", html);

  html = fs.readFileSync("./drash/example_code/advanced_tutorials/creating_an_api/coffee_and_tea/part_4/tea_resource.ts", "utf8")
  html = html.replace(replaceRegex.from, replaceRegex.to)
  fs.writeFileSync("./drash/example_code/advanced_tutorials/creating_an_api/coffee_and_tea/part_4/tea_resource.ts", html);

  html = fs.readFileSync("./drash/example_code/advanced_tutorials/creating_an_api/coffee_and_tea/part_4/response.ts", "utf8")
  html = html.replace(replaceRegex.from, replaceRegex.to)
  fs.writeFileSync("./drash/example_code/advanced_tutorials/creating_an_api/coffee_and_tea/part_4/response.ts", html);

  html = fs.readFileSync("./drash/example_code/dependency_management/deps.ts", "utf8")
  html = html.replace(replaceRegex.from, replaceRegex.to)
  fs.writeFileSync("./drash/example_code/dependency_management/deps.ts", html);

  html = fs.readFileSync("./drash/example_code/getting_started/quickstart/app.ts", "utf8")
  html = html.replace(replaceRegex.from, replaceRegex.to)
  fs.writeFileSync("./drash/example_code/getting_started/quickstart/app.ts", html);

  // Ignoring: third_party_tutorials and advanced/tutorials/microservices
}

if (moduleToUpdate === "dmm") {
  // We dont need to update anything for dmm as it has no example code, and all instances of the version are handled by the config
}

if (moduleToUpdate === "rhum") {
  // skip rhum, as there isn't anything to update manually
}
if (moduleToUpdate === "sockets") {
  // skip sockets, as no example code files
}
if (moduleToUpdate === "middleware") {
  // don't need to do anything as the docs link just points to the repo
}