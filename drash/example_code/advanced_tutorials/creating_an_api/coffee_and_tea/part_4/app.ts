import { Drash } from "https://deno.land/x/drash@v1.3.0/mod.ts";

import response from "./response.ts";
Drash.Http.Response = response;

import CoffeeResource from "./coffee_resource.ts";
import TeaResource from "./tea_resource.ts";

const server = new Drash.Http.Server({
  response_output: "application/json",
  resources: [
    CoffeeResource,
    TeaResource
  ],
});

server.run({
  hostname: "localhost",
  port: 1447
});
