const decoder = new TextDecoder();

/**
 * Run a command.
 *
 * @param command - The command in array format (e.g., ["git", "pull"]).
 */
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
