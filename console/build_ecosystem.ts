import { run } from "../console/run.ts";

console.log("Building ecosystem");

await run(["npm", "install"]);

await buildWebpackBundles("dmm", "v1.x");
await buildWebpackBundles("drash", "v1.x");
await buildWebpackBundles("rhum", "v1.x");
await buildWebpackBundles("wocket", "v1.x");

////////////////////////////////////////////////////////////////////////////////
// FILE MARKER - FUNCTIONS /////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

/**
 * Build the webpack bundles for the module in question.
 *
 * @param moduleName - The name of the module.
 * @param moduleVersion - The version to build (e.g., v1.x).
 */
export async function buildWebpackBundles(
  moduleName: string,
  moduleVersion: string
) {
  await run(["console/build_webpack_bundles", moduleName, moduleVersion]);
}
