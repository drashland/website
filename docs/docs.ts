import { Drash } from "./deps.ts";
import config from "./conf/app.ts";

import "./src/console_logger.ts";

class Resource extends Drash.Http.Resource {
  static paths = ["*"];
  public GET() {
    return this.response;
  }
}

import "./src/response.ts";

const server = new Drash.Http.Server({
  directory: config.server.directory,
  response_output: "text/html",
  logger: Drash.Members.ConsoleLogger,
  resources: [Resource],
  static_paths: ["/public"]
});

server.run({
  hostname: "localhost",
  port: 8000
});

console.log("Docs started at localhost:8000");
