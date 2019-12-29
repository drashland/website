import Drash from "../deno-drash/mod.ts";
import config from "./conf/app.ts";

const consoleLogger = new Drash.Loggers.ConsoleLogger({
  enabled: config.logger.enabled,
  level: config.logger.level,
  tag_string: "{date} | {level} |",
  tag_string_fns: {
    date: function() {
      return new Date().toISOString().replace("T", " ");
    }
  }
})
Drash.addMember( "ConsoleLogger", consoleLogger);

const Decoder = new TextDecoder();
const Encoder = new TextEncoder();

import AppResponse from "./src/app_response.ts";
Drash.Http.Response = AppResponse;
import AppResource from "./src/app_resource.ts";

const server = new Drash.Http.Server({
  address: "localhost:8000",
  directory: config.server.directory,
  response_output: "text/html",
  logger: Drash.Members.ConsoleLogger,
  resources: [AppResource],
  static_paths: ["/public"]
})
server.run();
