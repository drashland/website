import Drash from "https://deno.land/x/drash/mod.ts";

import UsersResource from "./users_resource.ts";

const server = new Drash.Http.Server({
  address: "localhost:1447",
  response_output: "text/plain",
  resources: [UsersResource],
});

server.run();
