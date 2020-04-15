import Drash from "https://deno.land/x/drash/mod.ts";

import HomeResource from "./home_resource.ts";

const server = new Drash.Http.Server({
  address: "localhost:1447",
  directory: "/path/to/your/project",
  resources: [HomeResource],
  response_output: "text/html",
  pretty_links: true,
  static_paths: ["/public"]
});

server.run();

