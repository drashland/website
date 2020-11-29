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

/**
 * Build the docs for the module in question.
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
