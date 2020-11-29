import { run } from "../console/run.ts";

console.log("Building ecosystem");

await run(["npm", "install"]);

await buildWebpackBundles("dmm", "v1.x");
await buildWebpackBundles("drash", "v1.x");
await buildWebpackBundles("rhum", "v1.x");
await buildWebpackBundles("wocket", "v1.x");

await run(["git", "checkout", "main"]);

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
  await run(["git", "checkout", `${moduleName}-${moduleVersion}`]);
  await run(["console/compile_vue_routes", moduleName]);
  await run([
    "node_modules/.bin/webpack",
    "--config ./configs.webpack.production.js",
    "--hide-modules",
    "--env.environment=production",
    `--env.module=${moduleName}`,
    `--env.version=${moduleVersion}`,
  ]);
}
