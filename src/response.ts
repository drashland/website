import Drash from "../../deno-drash/mod.ts";
import * as ResponseService from "./response_service.ts";
import config from "../conf/app.ts";
const Decoder = new TextDecoder();
const Encoder = new TextEncoder();

class Response extends Drash.Http.Response {

  public async send(): Promise<any> {
    let body;
    let template;

    switch (this.headers.get("Content-Type")) {
      // Handle HTML
      case "text/html":
        template = `${config.server.directory}/index.ejs`;
        Drash.Members.ConsoleLogger.debug("Rendering HTML response.");

        try {
          body = await ResponseService.getAppDataInHtml(template);
        } catch (error) {
          Drash.Members.ConsoleLogger.error("WTF... tried rendering an HTML response, but I don't even know.");
          Drash.Members.ConsoleLogger.error(`Attempted rendering file: ${template}`);
          Drash.Members.ConsoleLogger.error("Error below:");
          console.log(error);
          template = Decoder.decode(Deno.readFileSync(`${config.server.directory}/500.html`));
          body = template.replace(/\{\{ error \}\}/g, error);
        }

        break;
    }

    this.request.respond({
      status: this.status_code,
      headers: this.headers,
      body: new TextEncoder().encode(body)
    });
  }
}

Drash.Http.Response = Response;
