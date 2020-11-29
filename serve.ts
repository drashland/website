import { run } from "./console/run.ts";

await run(["node", "console/compile_vue_routes.js", Deno.args[0]]);

await run(["pkill", "-f", "drash_website_server.ts"]);

await run(["deno", "run", "-A", "drash_website_server.ts"]);
