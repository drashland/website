import { Drash } from "https://deno.land/x/drash/mod.ts";

import HomeResource from "./home_resource.ts";
import UsersResource from "./users_resource.ts";

const server = new Drash.Http.Server({
  resources: [
    HomeResource,
    UsersResource
  ],
});

server.run({
  hostname: "localhost",
  port: 1447
});
