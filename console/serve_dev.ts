import { run } from "./scripts.ts";

const args = Deno.args.slice();
const parentBranch = args[1]; // e.g., rhum-v1.x

await run(["node", "console/compile_vue_routes.js", parentBranch]);

await run(["pkill", "-f", "drash_website_server.ts"]);

await run(["deno", "run", "-A", "drash_website_server.ts"]);
