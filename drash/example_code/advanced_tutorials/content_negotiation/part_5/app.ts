import { Drash } from "https://deno.land/x/drash@{{ $conf.drash.latest_version }}/mod.ts";

import response from "./response.ts";
Drash.Http.Response = response;

import UsersResource from "./users_resource.ts";

const server = new Drash.Http.Server({
  response_output: "application/json",
  resources: [UsersResource],
});

server.run({
  hostname: "localhost",
  port: 1447
});
