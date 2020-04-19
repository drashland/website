import { Drash } from "https://deno.land/x/drash/mod.ts";
import { renderFile } from "https://deno.land/x/dejs/dejs.ts";

class Response extends Drash.Http.Response {
  public async generateHtmlResponse(): Promise<any> {
    let rawOutput = await renderFile(Deno.cwd() + "/index.ejs", {
      body: this.body
    });
    let html = rawOutput.toString();
    return html;
  }
}

Drash.Http.Response = Response;

class HomeResource extends Drash.Http.Resource {
  static paths = ["/"];
  public GET() {
    this.response.body = "Hello World!";
    return this.response;
  }
}

const server = new Drash.Http.Server({
  response_output: "text/html",
  resources: [HomeResource]
});

server.run({
  hostname: "localhost",
  port: 1447
});
