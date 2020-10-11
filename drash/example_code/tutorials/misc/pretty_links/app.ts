import { Drash } from "https://deno.land/x/drash@v1.2.5/mod.ts";

import HomeResource from "./home_resource.ts";

const server = new Drash.Http.Server({
  directory: "/path/to/your/project",
  resources: [HomeResource],
  response_output: "text/html",
  pretty_links: true,
  static_paths: ["/public"]
});

server.run({
  hostname: "localhost",
  port: 1447
});
