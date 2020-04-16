import { Drash } from "https://deno.land/x/drash/mod.ts";

import HomeResource from "./home_resource.ts";

const server = new Drash.Http.Server({
  address: "localhost:1447",
  response_output: "application/json",
  resources: [HomeResource],
  logger: new Drash.CoreLoggers.FileLogger({
    enabled: true,
    level: "all",
    file: "./server.log",
    tag_string: "{datetime} | {level} |",
    tag_string_fns: {
      datetime() {
        return new Date().toISOString().replace("T", " ");
      }
    }
  })
});

server.run();
