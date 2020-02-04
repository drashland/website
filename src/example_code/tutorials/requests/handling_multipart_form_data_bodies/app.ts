import Drash from "https://deno.land/x/drash/mod.ts";
import FilesResource from "./files_resource.ts";

const server = new Drash.Http.Server({
  address: "localhost:1447",
  response_output: "text/plain",
  resources: [FilesResource],
  memory_allocation: {
    multipart_form_data: 128
  },
});

server.run();
