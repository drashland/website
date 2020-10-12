import { Drash } from "https://deno.land/x/drash@v1.2.5/mod.ts";

import HomeResource from "./home_resource.ts";

const server = new Drash.Http.Server({
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

server.run({
  hostname: "localhost",
  port: 1447
});
