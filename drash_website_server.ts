import { Drash } from "./deps.ts";
import { LandingResource } from "./src/resources/landing_resource.ts";
import { ModuleResource } from "./src/resources/module_resource.ts";
import { Response } from "./src/response.ts";

Drash.Http.Response = Response

const server = new Drash.Http.Server({
  resources: [
    LandingResource,
    ModuleResource,
  ],
  response_output: "text/html",
  static_paths: {
    "/assets": "/assets",
  },
  directory: "."
})

await server.run({
  hostname: "localhost",
  port: 1445
});

console.log(`Server started at: http://${server.hostname}:${server.port}`)
