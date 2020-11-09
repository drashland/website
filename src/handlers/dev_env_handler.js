const BaseHandler = require("./base_handler.js");

class DevEnvHandler extends BaseHandler {

  getHtml(filepath, baseUrl) {
    let html = this.fs.readFileSync(filepath, "utf8");
    html = html.replace(/\{\{ base_url \}\}/g, baseUrl);
    html = html.replace(/\{\{ environment \}\}/g, "development");
    html = html.replace(
      /\{\{ build_date \}\}/g,
      new Date().getTime().toString(),
    );
    return html;
  }

  run(request, response) {
    let uri = this.getRequestUri(request);

    try {
      return response.write(this.getHtml(
        "./" + uri + "/index.template.html",
        this.configs.base_urls.development,
      ));
    } catch (error) {
      console.log(error);
    }

    return this.runNextHandler(request, response);
  }
}

module.exports = DevEnvHandler;
