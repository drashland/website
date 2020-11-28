import { run } from "../console/run.ts";

console.log("Pulling latest changes from all branches");

await pullLatest("dmm-v1.x");
await pullLatest("drash-v1.x");
await pullLatest("rhum-v1.x");
await pullLatest("wocket-v1.x");

await run(["git", "checkout", "main"]);

////////////////////////////////////////////////////////////////////////////////
// FILE MARKER - FUNCTIONS /////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

/**
 * Pull the latest change from the specified branch.
 *
 * @param branch - The branch to pull.
 */
async function pullLatest(branch: string) {
  await run(["git", "checkout", branch]);
  await run(["git", "pull"]);
}
