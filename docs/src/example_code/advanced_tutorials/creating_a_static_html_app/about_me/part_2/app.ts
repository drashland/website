import Drash from "https://deno.land/x/drash/mod.ts";

import AboutResource from "./about_resource.ts";
import ContactResource from "./contact_resource.ts";
import HomeResource from "./home_resource.ts";

const server = new Drash.Http.Server({
  address: "localhost:1447",
  response_output: "text/html",
  resources: [
    AboutResource,
    ContactResource,
    HomeResource,
  ]
});

server.run();
