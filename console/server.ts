import { run } from "./scripts.ts";

console.log("Starting drash_website_server.ts...");
// Kill it if it's running ...
await run(["pkill", "-f", "drash_website_server.ts"]);
// ... then re-run it
await run(["deno", "run", "-A", "drash_website_server.ts"]);
