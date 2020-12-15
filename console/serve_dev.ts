import { run } from "./scripts.ts";

const args = Deno.args.slice();
const branch = args[0]; // e.g., rhum-v1.x

await run(["node", "console/compile_vue_routes.js", branch]);

await run(["pkill", "-f", "drash_website_server.ts"]);

await run(["deno", "run", "-A", "drash_website_server.ts"]);
