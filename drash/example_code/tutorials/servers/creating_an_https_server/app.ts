import { Drash } from "https://deno.land/x/drash@v1.2.5/mod.ts";

import HomeResource from "./home_resource.ts";

const server = new Drash.Http.Server({
  response_output: "application/json",
  resources: [HomeResource],
});

server.runTLS({
  hostname: "localhost",
  port: 1447,
  certFile: "/path/to/certFile.crt",
  keyFile: "/path/to/keyFile.key"
});

