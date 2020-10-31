import { Drash } from "https://deno.land/x/drash@v1.2.5/mod.ts";
import FilesResource from "./files_resource.ts";

const server = new Drash.Http.Server({
  response_output: "text/plain",
  resources: [FilesResource],
  memory_allocation: {
    multipart_form_data: 128
  },
});

server.run({
  hostname: "localhost",
  port: 1447
});

console.log(`Server running on ${server.hostname}:${server.port}`)
