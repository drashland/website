const BaseHandler = require("./base_handler.js");

class StaticAssetHandler extends BaseHandler {
  getContentTypeHeader(uri) {
    if (uri.includes(".css")) return "text/css";
    if (uri.includes(".jpeg")) return "image/jpeg";
    if (uri.includes(".jpg")) return "image/jpeg";
    if (uri.includes(".js")) return "application/js";
    if (uri.includes(".json")) return "application/json";
    if (uri.includes(".map")) return "application/octet-stream";
    if (uri.includes(".png")) return "image/png";
    if (uri.includes(".svg")) return "image/svg+xml";
    if (uri.includes(".woff")) return "font/woff";
    if (uri.includes(".woff2")) return "font/woff2";
  }

  isStaticAsset(uri) {
    if (
      uri == "/favicon.ico" ||
      uri.includes("css") ||
      uri.includes("jpeg") ||
      uri.includes("jpg") ||
      uri.includes("js") ||
      uri.includes("json") ||
      uri.includes("png") ||
      uri.includes("svg") ||
      uri.includes("woff") ||
      uri.includes("woff2")
    ) {
      return true;
    }

    return false;
  }

  run(request, response) {
    const uri = this.getRequestUri(request);

    if (this.isStaticAsset(uri)) {
      const filepath = `${this.configs.root_directory}${uri}`;
      const file = this.fs.readFileSync(filepath);
      response.writeHead(
        200,
        { "Content-Type": this.getContentTypeHeader(uri) },
      );
      return response.write(file);
    }

    return this.runNextHandler(request, response);
  }
}

module.exports = StaticAssetHandler;
