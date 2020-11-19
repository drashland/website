import { Drash } from "./deps.ts";
import { DrashResource } from "./src/resources/drash_resource.ts";
import { LandingResource } from "./src/resources/landing_resource.ts";
import { Response } from "./src/response.ts";

Drash.Http.Response = Response

const server = new Drash.Http.Server({
  resources: [
      LandingResource,
      DrashResource,
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
