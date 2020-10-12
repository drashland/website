import { Drash } from "https://deno.land/x/drash@v1.2.5/mod.ts";

import HomeResource from "./home_resource.ts";

const server = new Drash.Http.Server({
  resources: [HomeResource],
});

server.run({
  hostname: "localhost",
  port: 1447
});
