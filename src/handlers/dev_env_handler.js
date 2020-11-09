const BaseHandler = require("./base_handler.js");

class DevEnvHandler extends BaseHandler {

  getHtml(filepath, baseUrl, module) {
    let html = this.fs.readFileSync(filepath, "utf8");
    html = html.replace(/\{\{ base_url \}\}/g, baseUrl);
    html = html.replace(/\{\{ environment \}\}/g, "development");
    html = html.replace(/\{\{ module \}\}/g, module);
    html = html.replace(/\{\{ build \}\}/g, new Date().getTime().toString());
    html = html.replace(
      /\{\{ build_date \}\}/g,
      new Date().getTime().toString(),
    );
    return html;
  }

  run(request, response) {
    let uri = this.getRequestUri(request);

    let module;

    if (uri.includes("/dawn")) { module = "dawn"; }
    if (uri.includes("/dmm")) { module = "dmm"; }
    if (uri.includes("/drash")) { module = "drash"; }
    if (uri.includes("/rhum")) { module = "rhum"; }
    if (uri.includes("/wocket")) { module = "wocket"; }

    try {
      return response.write(this.getHtml(
        "./index.template.dev.html",
        this.configs.base_urls.development,
        module
      ));
    } catch (error) {
      console.log(error);
    }

    return this.runNextHandler(request, response);
  }
}

module.exports = DevEnvHandler;
