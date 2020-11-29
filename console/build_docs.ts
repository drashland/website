import { buildDocs, run } from "./scripts.ts";

const args = Deno.args.slice();
const moduleName = args[0];
const moduleVersion = args[1];

console.log(`Building docs for ${moduleName} ${moduleVersion}`);

await run(["npm", "install"]);

await buildDocs(moduleName, moduleVersion);
