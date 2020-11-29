import { run } from "../console/run.ts";

console.log("Building ecosystem");

await run(["npm", "install"]);

await buildDocs("dmm", "v1.x");
await buildDocs("drash", "v1.x");
await buildDocs("rhum", "v1.x");
await buildDocs("wocket", "v1.x");

////////////////////////////////////////////////////////////////////////////////
// FILE MARKER - FUNCTIONS /////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

/**
 * Build the webpack bundles for the module in question.
 *
 * @param moduleName - The name of the module.
 * @param moduleVersion - The version to build (e.g., v1.x).
 */
export async function buildDocs(
  moduleName: string,
  moduleVersion: string
) {
  await run(["console/build_docs", moduleName, moduleVersion]);
}
