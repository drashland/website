import { Drash } from "https://deno.land/x/drash@v1.2.5/mod.ts";

import AboutResource from "./about_resource.ts";
import ContactResource from "./contact_resource.ts";
import HomeResource from "./home_resource.ts";

const server = new Drash.Http.Server({
  response_output: "text/html",
  resources: [
    AboutResource,
    ContactResource,
    HomeResource,
  ]
});

server.run({
  hostname: "localhost",
  port: 1447
});
