import {server} from "./server.ts";

await server.run({
  hostname: "localhost",
  port: 1445
});

console.log(`Running server on http://${server.hostname}:${server.port}`)