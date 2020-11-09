const http = require("http");
const fs = require("fs");
const buildChain = require("./chain_builder.js");

// Compile Drash files
require("../scripts/drash_compile_vue_routes.js");

// Compile Rhum files
require("../scripts/rhum_compile_vue_routes.js");

// Compile dmm files
require("../scripts/dmm_compile_vue_routes.js");

// Compile Sockets files
require("../scripts/sockets_compile_vue_routes.js");

// Define the chain for the server's request-response lifecycle
const handlerFiles = [
  "/handlers/static_asset_handler.js",
  "/handlers/landing_page_handler.js",
  "/handlers/version_env_handler.js",
  "/handlers/dev_env_handler.js",
];

// Build the chain
const chain = buildChain(handlerFiles);

// Create the server
http.createServer((request, response) => {
  // Handle errors
  request.on("error", (error) => requestErrorHandler(error, response));
  response.on("error", (error) => responseErrorHandler(error, response));

  if (request.url == "/favicon.ico") {
    return;
  }

  try {
    console.log(request.method.toUpperCase() + " " + request.url);

    // We start off with a 200 response code. The handlers in the chain are
    // responsible for changing this value as necessary.
    response.writeHead(200, { "Content-Type": "text/html" });

    // Run the first handler in the chain and allow the chain to handle the
    // entire lifecycle
    chain[0].run(request, response);

    // End the response so shit doesn't hang.
    response.end();
  } catch (error) {
    oopsHandler(response, error);
  }
}).listen(8000);

console.log(`Server running at http://localhost:8000`);

///////////////////////////////////////////////////////////////////////////////
// FILE MARKER - FUNCTIONS ////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////

// Handle HTTP request errors
function requestErrorHandler(error, response) {
  console.error(error);
  response.statusCode = 400;
  response.end();
}

// Handle HTTP response errors
function responseErrorHandler(error, response) {
  console.error(error);
}

// you don't want to end up here ;)
function oopsHandler(response, error) {
  response.writeHeader(200, { "Content-Type": "text/html" });
  let html = fs.readFileSync("./500.html", "utf8");
  html = html.replace("{{ error }}", error.message + error.stack);
  response.write(html);
  response.end();
}
