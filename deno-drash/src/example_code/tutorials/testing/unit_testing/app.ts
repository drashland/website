import Drash from "https://deno.land/x/drash/mod.ts";

import HomeResource from "./home_resource.ts";
import OrdersResource from "./orders_resource.ts";
import UsersResource from "./users_resource.ts";

const server = new Drash.Http.Server({
  address: "localhost:1447",
  response_output: "application/json",
  resources: [
    HomeResource,
    OrdersResource,
    UsersResource
  ]
});

server.run();
