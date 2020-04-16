import { Drash } from "https://deno.land/x/drash/mod.ts";
const decoder = new TextDecoder();

class AngularServer extends Drash.Http.Server {
  public handleHttpRequestError(
    request: any,
    error: any,
    resource: Drash.Http.Resource | any = {},
    response: Drash.Http.Response | any = {}
  ): any {

    if (resource) {
      if (!response) {
        if (typeof resource[request.method.toUpperCase()] !== "function") {
          error = new Drash.Exceptions.HttpException(405);
        }
      }
    }

    response = new Drash.Http.Response(request);
    response.status_code = error.code ? error.code : null;
    response.body = error.message ? error.message : response.getStatusMessage();

    if (response.status_code == 404) {
      response.headers.set("Content-Type", "text/html");
      response.body = new TextDecoder().decode(Deno.readFileSync("./path/to/your/index.html"));
    }

    try {
      this.executeMiddlewareServerLevelAfterRequest(request, null, response);
    } catch (error) {
      // Do nothing
    }

    return response.send();
  }
}
Drash.Http.Server = AngularServer;

export class AngularResource extends Drash.Http.Resource {
  static paths = ["/"];
  public GET() {
    try {
      const raw = Deno.readFileSync("./path/to/your/index.html");
      const template = decoder.decode(raw);
      this.response.body = template;
    } catch (error) {
      throw new Drash.Exceptions.HttpException(400, "index error");
    }
    return this.response;
  }
}

const server = new Drash.Http.Server({
  address: "localhost:1447",
  response_output: "text/html",
  resources: [AngularResource],
  directory: `${await Deno.realpath(".")}`,
  static_paths: ["/public"],
});

server.run();
