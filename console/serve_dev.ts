import { run } from "./scripts.ts";

const args = Deno.args.slice();

const moduleName = args[0].split("-")[0];
const moduleVersion = args[0].split("-")[1];

await run(["node", "console/compile_vue_routes.js", moduleName]);

await run(["npm", "run", "dev:webpack", moduleName, moduleVersion]);

await run(["pkill", "-f", "drash_website_server.ts", moduleName]);

await run(["deno", "run", "-A", "--unstable", "--watch", "drash_website_server.ts"]);
