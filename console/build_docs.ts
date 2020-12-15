import { buildDocs, run } from "./scripts.ts";

const args = Deno.args.slice();
const branch = args[0];

const parentBranch = `${args[1]}-${args[2]}`;

console.log(`Building docs for ${branch} under ${parentBranch}`);

await run(["npm", "install"]);

await buildDocs(branch, parentBranch);
