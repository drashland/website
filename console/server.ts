import { run } from "./scripts.ts";

console.log("Starting app.ts...");
// Kill it if it's running ...
await run(["pkill", "-f", "app.ts"]);
// ... then re-run it
await run(["deno", "run", "-A", "--unstable", "--watch", "app.ts"]);
