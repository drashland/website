const http = require("http");
const fs = require("fs");
const configs = require("./configs.json");

// Compile Drash files
require("./scripts/drash_compile_vue_routes.js");

// Compile Rhum files
require("./scripts/rhum_compile_vue_routes.js");

// Compile Cinco files
require("./scripts/cinco_compile_vue_routes.js")

// Compile dmm files
require("./scripts/dmm_compile_vue_routes.js")

// Compile Sockets files
require("./scripts/sockets_compile_vue_routes.js")

// Create the server
http.createServer((request, response) => {
  request.on('error', (error) => handleRequestError(error, response) );
  response.on('error', (err) => handleResponseError(error, response) );
  handleHttpRequest(request, response);
}).listen(8000);

console.log(`Server running at http://localhost:8000`);

function getContentTypeHeader(path) {
  if (path.includes(".css")) { return "text/css"; }
  if (path.includes(".jpeg")) { return "image/jpeg"; }
  if (path.includes(".jpg")) { return "image/jpeg"; }
  if (path.includes(".js")) { return "application/js"; }
  if (path.includes(".json")) { return "application/json"; }
  if (path.includes(".map")) { return "application/octet-stream"; }
  if (path.includes(".png")) { return "image/png"; }
  if (path.includes(".svg")) { return "image/svg+xml"; }
  if (path.includes(".woff")) { return "font/woff"; }
  if (path.includes(".woff2")) { return "font/woff2"; }
}

// Handle HTTP request errors
function handleRequestError(error, response) {
  console.error(error);
  response.statusCode = 400;
  response.end();
}

// Handle HTTP response errors
function handleResponseError(error, response) {
  console.error(error);
}

// Handle all requests. This just services the index.html file that holds the Vue application.
function handleHttpRequest(request, response) {
  try {
    if (requestUrlIsPath(request.url)) {
      console.log(`${request.method} ${request.url}`);
    }

    let url = request.url;
    try {
      url = url.split("?")[0];
    } catch (error) {
    }


    response.writeHeader(200, {"Content-Type": "text/html"});  

    if (url == "/") {
      let html = fs.readFileSync("index.template.html", "utf-8");
      html = html.replace(/\{\{ base_url \}\}/g, configs.base_urls.development);
      console.log(html);
      response.write(html);
    } else if (target(url) == "dmm") {
      handleDmmApp(url, response);
    } else if (target(url) == "drash") {
      handleDrashApp(url, response);
    } else if (target(url) == "rhum") {
      handleRhumApp(url, response);
    } else if (target(url) == "sockets") {
      handleSocketsApp(url, response);
    } else if (target(url) === "cinco") {
      handleCincoApp(url, response)
    } else {
      const file = fs.readFileSync(`${configs.root_directory}${url}`);
      response.writeHead(200, {"Content-Type": getContentTypeHeader(url)});
      response.write(file);
    }
    response.end();
  } catch (error) {
    oops(response, error);
  }
}

// Handle the application at the /dmm URI
function handleDmmApp(url, response) {
  let html = fs.readFileSync("./dmm/index.template.html", "utf8");
  html = html.replace(/\{\{ environment \}\}/g, "development");
  html = html.replace(/\{\{ version \}\}/g, new Date().getTime());
  response.write(html);
}

// Handle the application at the /drash URI
function handleDrashApp(url, response) {
  let html = fs.readFileSync("./drash/index.template.html", "utf8");
  html = html.replace(/\{\{ environment \}\}/g, "development");
  html = html.replace(/\{\{ version \}\}/g, new Date().getTime());
  response.write(html);
}

// Handle the application at the /dmm URI
function handleRhumApp(url, response) {
  let html = fs.readFileSync("./rhum/index.template.html", "utf8");
  html = html.replace(/\{\{ environment \}\}/g, "development");
  html = html.replace(/\{\{ version \}\}/g, new Date().getTime());
  response.write(html);
}

// Handle the application at the /dmm URI
function handleSocketsApp(url, response) {
  let html = fs.readFileSync("./sockets/index.template.html", "utf8");
  html = html.replace(/\{\{ environment \}\}/g, "development");
  html = html.replace(/\{\{ version \}\}/g, new Date().getTime());
  response.write(html);
}

function handleCincoApp(url, response) {
  if (url === "/cinco/staging" || url === "/cinco/staging/") {
    let html = fs.readFilesync("./cinco/staging.html", "utf8")
    response.write(html)
    return
  }
  let html = fs.readFileSync("./cinco/index.template.html", "utf8");
  html = html.replace(/\{\{ environment \}\}/g, "development");
  html = html.replace(/\{\{ version \}\}/g, new Date().getTime());
  response.write(html);
}

// you don't want to end up here ;)
function oops(response, error) {
  response.writeHeader(200, {"Content-Type": "text/html"});
  let html = fs.readFileSync("./500.html", "utf8");
  html = html.replace("{{ error }}", error.message + error.stack);
  response.write(html);
  response.end();
}

// Is the URL in question targeting a static asset?
function requestUrlIsPath(url) {
  if (
    url != "/favicon.ico"
    && !url.includes("css")
    && !url.includes("jpeg")
    && !url.includes("jpg")
    && !url.includes("js")
    && !url.includes("json")
    && !url.includes("png")
    && !url.includes("svg")
    && !url.includes("woff")
    && !url.includes("woff2")
  ) {
    return true;
  }

  return false;
}

// What is the URL in question targeting?
function target(url) {

  console.log('url: ' + url)
  if (
    url == "/dawn"
    || url == "/dawn/"
    || url == "/dawn/dmm"
    || url == "/dawn/dmm/"
  ) {
    return "dmm";
  }
  if (
    url == "/dmm"
    || url == "/dmm/"
  ) {
    return "dmm";
  }
  if (
    url == "/drash"
    || url == "/drash/"
  ) {
    return "drash";
  }
  if (
    url == "/rhum"
    || url == "/rhum/"
  ) {
    return "rhum";
  }
  if (
    url == "/sockets"
    || url == "/sockets/"
  ) {
    return "sockets";
  }
  if (
    url === "/cinco"
    || url === "/cinco/"
    || url === "/cinco/staging"
    || url === "cinco/staging/"
  ) {
    return "cinco"
  }
}
