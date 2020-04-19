import { Drash } from "https://deno.land/x/drash/mod.ts";
import { runTests } from "https://deno.land/std/testing/mod.ts";

import HomeResource from "./home_resource.ts";
import OrdersResource from "./orders_resource.ts";
import UsersResource from "./users_resource.ts";

const server = new Drash.Http.Server({
  response_output: "application/json",
  resources: [
    HomeResource,
    OrdersResource,
    UsersResource
  ],
});

// Run your server

server.run({
  hostname: "localhost",
  port: 1447
});

// Import your tests so they can be run

import "./tests.ts";

// Run your tests and then shut down the server when done

runTests()
  .then(() => {
    server.close();
  });
