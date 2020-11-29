import { buildWebpackBundles, run } from "./scripts.ts";

console.log("Building ecosystem");

await run(["npm", "install"]);

await buildWebpackBundles("dmm", "v1.x");
await buildWebpackBundles("drash", "v1.x");
await buildWebpackBundles("rhum", "v1.x");
await buildWebpackBundles("wocket", "v1.x");

await run(["git", "checkout", "main"]);
