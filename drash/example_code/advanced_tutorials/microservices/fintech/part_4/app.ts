import { Drash } from "https://deno.land/x/drash@v1.2.5/mod.ts";

import response from "./response.ts";
Drash.Http.Response = response;

import CoffeeResource from "./coffee_resource.ts";
import TeaResource from "./tea_resource.ts";

const server = new Drash.Http.Server({
  address: "localhost:1447",
  response_output: "application/json",
  resources: [
    AccountsResource,
  ],
});

server.run();
