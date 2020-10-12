import { Drash } from "https://deno.land/x/drash@v1.2.5/mod.ts";

import HomeResource from "./home_resource.ts";
import VerifyTokenMiddleware from "./verify_token_middleware.ts";

const server = new Drash.Http.Server({
  middleware: {
    before_request: [
      VerifyTokenMiddleware
    ]
  },
  resources: [
    HomeResource
  ],
  response_output: "application/json",
});

server.run({
  hostname: "localhost",
  port: 1447
});
