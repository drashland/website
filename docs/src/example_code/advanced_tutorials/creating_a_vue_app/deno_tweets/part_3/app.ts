import Drash from "https://deno.land/x/drash/mod.ts";

import HomeResource from "./home_resource.ts";

const server = new Drash.Http.Server({
  address: "localhost:1447",
  response_output: "text/html",
  resources: [HomeResource],
  directory: "/path/to/your/project",
  static_paths: ["/public"]
});

server.run();
