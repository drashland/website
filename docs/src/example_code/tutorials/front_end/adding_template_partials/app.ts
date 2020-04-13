// import Drash from "https://deno.land/x/drash/mod.ts";
import Drash from "../../../../../../../deno-drash/mod.ts";

import UserResource from "./user_resource.ts";

const server = new Drash.Http.Server({
  address: "localhost:1447",
  resources: [
    UserResource
  ],
  response_output: "text/html",
  template_engine: true,
  views_path: "./views",
});

server.run();
