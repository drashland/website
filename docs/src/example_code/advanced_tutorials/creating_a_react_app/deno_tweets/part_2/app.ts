import { Drash } from "https://deno.land/x/drash/mod.ts";

import HomeResource from "./home_resource.ts";

const server = new Drash.Http.Server({
  address: "localhost:1447",
  resources: [HomeResource],
  response_output: "text/html",
  directory: ".",
  static_paths: ["/public"]
});

server.run();
