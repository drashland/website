import { mergeMainInto, run } from "./scripts.ts";

console.log("Merging main into all branches");

await mergeMainInto("dmm-v1.x");
await mergeMainInto("drash-v1.x");
await mergeMainInto("rhum-v1.x");
await mergeMainInto("wocket-v0.x");
