import { buildWebpackBundles, run } from "./scripts.ts";

const args = Deno.args.slice();
const moduleName = args[0];
const moduleVersion = args[1];

console.log(`Building webpack bundles for ${moduleName} ${moduleVersion}`);

await run(["npm", "install"]);

await buildWebpackBundles(moduleName, moduleVersion);
