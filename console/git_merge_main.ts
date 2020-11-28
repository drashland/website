import { run } from "../console/run.ts";

console.log("Merging main into all branches");

await mergeMainInto("dmm-v1.x");
await mergeMainInto("drash-v1.x");
await mergeMainInto("rhum-v1.x");
await mergeMainInto("wocket-v1.x");

await run(["git", "checkout", "main"]);

////////////////////////////////////////////////////////////////////////////////
// FILE MARKER - FUNCTIONS /////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

/**
 * Merge main into the specified branch
 *
 * @param moduleName - The name of the module.
 * @param moduleVersion - The version to build (e.g., v1.x).
 */
async function mergeMainInto(branch: string) {
  await run(["git", "checkout", branch]);
  await run(["git", "merge", "--no-ff", "main", "-m", "update with main branch"]);
  await run(["git", "push"]);
}
