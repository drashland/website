import { Drash } from "./deps.ts";
import { LandingResource } from "./src/resources/landing_resource.ts";
import { ModuleResource } from "./src/resources/module_resource.ts";
import { StagingModuleResource } from "./src/resources/staging_module_resource.ts";
import { Response } from "./src/response.ts";
import { serverConfigs } from "./configs.server.js";

Drash.Http.Response = Response

const server = new Drash.Http.Server({
  resources: [
      LandingResource,
      ModuleResource,
      StagingModuleResource,
  ],
  response_output: "text/html",
  static_paths: {
      [`${serverConfigs.module}-assets`]: `/assets/${serverConfigs.module}`
  },
  directory: "."
})

await server.run(options);

console.log(`Running server on http://${server.hostname}:${server.port}`)
