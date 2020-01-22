import Drash from "https://deno.land/x/drash/mod.ts";
import { runTests } from "https://deno.land/std/testing/mod.ts";

import HomeResource from "./home_resource.ts";
import OrdersResource from "./orders_resource.ts";
import UsersResource from "./users_resource.ts";

let server = new Drash.Http.Server({
  address: "localhost:1447",
  response_output: "application/json",
  resources: [
    HomeResource,
    OrdersResource,
    UsersResource
  ],
});

// Run your server

server.run();

// Import your tests so they can be run

import "./tests.ts";

// Run the tests and then SHUT DOWN THE SERVER WHEN DONE. As you can see, the
// deno server is accessible via `server.deno_server`.

runTests()
  .then(() => {
    server.close();
  });
