import { Drash } from "./deps.ts";
import { ModuleResource } from "./src/resources/module_resource.ts";
import { LandingResource } from "./src/resources/landing_resource.ts";

const server = new Drash.Http.Server({
  resources: [
      LandingResource,
      ModuleResource
  ],
  response_output: "text/html",
  static_paths: [
      "/assets"
  ],
  directory: "."
})

await server.run({
  hostname: "localhost",
  port: 1445
})

console.log(`Running server on http://${server.hostname}:${server.port}`)
