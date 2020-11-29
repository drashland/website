import { buildDocs, run } from "./scripts.ts";

console.log("Building ecosystem");

await run(["npm", "install"]);

await buildDocs("dmm-v1.x");
await buildDocs("drash-v1.x");
await buildDocs("rhum-v1.x");
await buildDocs("wocket-v0.x");
