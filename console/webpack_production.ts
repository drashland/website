import { run } from "./scripts.ts";

console.log("Compiling Vue routes...\n");
await run(["node", "console/compile_vue_routes.js"]);

console.log("\nRunning webpack to create bundled JS files...");
await run([
  "node_modules/.bin/webpack",
  "--config",
  "./configs.webpack.production.js",
  "--hide-modules",
].concat(Deno.args));
