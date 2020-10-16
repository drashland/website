import { Drash } from "https://deno.land/x/drash@v1.2.5/mod.ts";

import HomeResource from "./home_resource.ts";

const server = new Drash.Http.Server({
  response_output: "application/json", // Accepts text/html, text/xml, application/xml
  resources: [HomeResource],
});

server.run({ // or await server.run({
  hostname: "localhost",
  port: 1447
});
