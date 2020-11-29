import { run } from "./scripts.ts";

const args = Deno.args.slice();

// This script requires a module name and version
if (Deno.args.length < 2) {
  console.log();
  console.log("Missing module name and/or version");
  console.log("Example usage: npm run dev:server drash v1.x");
  console.log();
  Deno.exit(1);
}

const moduleName = args[0];
const moduleVersion = args[1];

await run(["git", "checkout", `${moduleName}-${moduleVersion}`]);

await run(["node", "console/compile_vue_routes.js", moduleName]);

await run(["npm", "run", "dev:webpack", moduleName, moduleVersion]);

await run(["pkill", "-f", "drash_website_server.ts", moduleName]);

await run(["deno", "run", "-A", "drash_website_server.ts", "--watch"]);
