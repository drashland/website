const BaseHandler = require("./base_handler.js");

class VersionEnvHandler extends BaseHandler {

  getBaseUrl(url) {
    if (url.includes("sicno")) {
      return this.configs.sinco.base_url;
    }
    if (url.includes("dmm")) {
      return this.configs.dmm.base_url;
    }
    if (url.includes("drash")) {
      return this.configs.drash.base_url;
    }
    if (url.includes("rhum")) {
      return this.configs.rhum.base_url;
    }
    if (url.includes("wocket")) {
      return this.configs.wocket.base_url;
    }
  }

  getHtml(filepath, baseUrl) {
    let html = this.fs.readFileSync(filepath, "utf8");
    html = html.replace(/\{\{ base_url \}\}/g, baseUrl);
    html = html.replace(/\{\{ environment \}\}/g, "version");
    html = html.replace(/\{\{ version \}\}/g, new Date().getTime().toString());
    return html;
  }

  run(request, response) {
    let uri = this.getRequestUri(request);

    if (uri.match(/v.+[0-9]/g)) {
      try {
        return response.write(this.getHtml(
          "." + uri + "/index.html",
          this.getBaseUrl(uri),
        ));
      } catch (error) {
        return this.response404(response);
      }
    }

    return this.runNextHandler(request, response);
  }
}

module.exports = VersionEnvHandler;
