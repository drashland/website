import { Drash } from "https://deno.land/x/drash@v1.2.5/mod.ts";

import HomeResource from "./home_resource.ts";
import OrdersResource from "./orders_resource.ts";
import UsersResource from "./users_resource.ts";

const server = new Drash.Http.Server({
  response_output: "application/json",
  resources: [
    HomeResource,
    OrdersResource,
    UsersResource
  ]
});

server.run({
  hostname: "localhost",
  port: 1447
});
