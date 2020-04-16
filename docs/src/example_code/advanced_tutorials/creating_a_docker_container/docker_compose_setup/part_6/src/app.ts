import Drash from "https://deno.land/x/drash/mod.ts";

class HomeResource extends Drash.Http.Resource {

  static paths = [
    "/"
  ];

  public GET() {
    let fileContents = Deno.readFileSync("./index.html")
    const decoder = new TextDecoder();
    let template = decoder.decode(fileContents);
    this.response.body = template;
    return this.response;
  }
}

const server = new Drash.Http.Server({
  address: ":1447",
  response_output: "text/html",
  resources: [
    HomeResource
  ],
});

server.run();
