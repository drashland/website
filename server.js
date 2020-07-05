const http = require("http");
const fs = require("fs");
const configs = require("./configs.json");

require("./scripts/drash_compile_vue_global_components.js");
require("./scripts/drash_compile_vue_routes.js");
require("./scripts/drash_compile_example_code.js");

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

    response.writeHeader(200, {"Content-Type": "text/html"});  

    if (request.url == "/") {
      const html = fs.readFileSync("index.html");
      response.write(html);
    } else if (
      request.url == "/drash"
      || request.url == "/drash/"
    ) {
      handleDrashApp(response);
    } else {
      const file = fs.readFileSync(`${configs.root_directory}${request.url}`);
      response.writeHead(200, {"Content-Type": getContentTypeHeader(request.url)});
      response.write(file);
    }
    response.end();
  } catch (error) {
    oops(response, error);
  }
}

// Handle the application at the /drash URI
function handleDrashApp(response) {
  let html = fs.readFileSync("./drash/index.template.html", "utf8");
  html = html.replace(/\{\{ environment \}\}/g, configs.environment);
  response.write(html);
}

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

// you don't want to end up here ;)
function oops(response, error) {
  response.writeHeader(200, {"Content-Type": "text/html"});
  let html = fs.readFileSync("./500.html", "utf8");
  html = html.replace("{{ error }}", error.message + error.stack);
  response.write(html);
  response.end();
}
