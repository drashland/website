import { Drash } from "https://deno.land/x/drash@v1.2.5/mod.ts";

import HomeResource from "./home_resource.ts";

const server = new Drash.Http.Server({
  directory: "/path/to/your/project",
  resources: [HomeResource],
  response_output: "text/html",
  static_paths: {
    "/assets": "/front_end", // The physical path needs to be relative to your directory config
  }
});

server.run({
  hostname: "localhost",
  port: 1447
});
