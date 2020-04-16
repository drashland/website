import { Drash } from "https://deno.land/x/drash/mod.ts";

import HomeResource from "./home_resource.ts";

const server = new Drash.Http.Server({
  address: "localhost:1447",
  response_output: "text/html",
  resources: [HomeResource]
});

server.run();
