import { Drash } from "https://deno.land/x/drash@v1.2.5/mod.ts";

import HomeResource from "./home_resource.ts";
import SecretResource from "./secret_resource.ts";

const server = new Drash.Http.Server({
  resources: [
    HomeResource,
    SecretResource
  ],
  response_output: "application/json",
});

server.run({
  hostname: "localhost",
  port: 1447
});

console.log("Server listening: http://localhost:1447");
