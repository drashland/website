import { readLines } from "../deps.ts";

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

  for await (const stderrLine of readLines(p.stderr)) {
    const line = stderrLine.trim();
    console.log(line);
  }

  const status = await p.status()

  if (status.code === 1) {
    console.log(decoder.decode(await p.stderrOutput()));
  }

  p.close();
}
