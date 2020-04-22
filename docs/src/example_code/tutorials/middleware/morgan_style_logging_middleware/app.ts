import { Drash } from "https://deno.land/x/drash/mod.ts";

import HomeResource from "./home_resource.ts";
import MorganStyleLoggingMiddleware from "./morgan_style_logging_middleware.ts";

const server = new Drash.Http.Server({
  middleware: {
    server_level: {
      before_request: [
        MorganStyleLoggingMiddleware
      ],
      after_request: [
        MorganStyleLoggingMiddleware
      ]
    }
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
