import { run } from "./scripts.ts";

console.log("Installing dependencies...\n");
await run(["npm", "i"]);

console.log("Compiling Vue routes...\n");
await run(["node", "console/compile_vue_routes.js"]);

console.log("\nRunning webpack to create bundled JS files...");
await run([
  "node_modules/.bin/webpack",
  "--config",
  "./configs.webpack.development.js",
  "--watch",
  "--hide-modules",
].concat(Deno.args));
