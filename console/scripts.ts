const decoder = new TextDecoder();

export async function run(command: string[]) {
  const p = Deno.run({
    cmd: command,
    stderr: "piped",
  });

  const status = await p.status()

  if (status.code === 1) {
    console.log(decoder.decode(await p.stderrOutput()));
  }

  p.close();
}

export async function buildDocs(moduleName: string, moduleVersion: string) {
  await run(["console/build_docs", moduleName, moduleVersion]);
}

/**
 * Pull the latest change from the specified branch.
 *
 * @param branch - The branch to pull.
 */
export async function gitPullLatest(branch: string) {
  await run(["git", "checkout", branch]);
  await run(["git", "pull"]);
}

/**
 * Merge main into the specified branch
 *
 * @param moduleName - The name of the module.
 * @param moduleVersion - The version to build (e.g., v1.x).
 */
export async function gitMergeMainInto(branch: string) {
  await run(["git", "checkout", branch]);
  await run(["git", "merge", "--no-ff", "main", "-m", "update with main branch"]);
  await run(["git", "push"]);
}
