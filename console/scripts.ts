import { readLines } from "../deps.ts";

const decoder = new TextDecoder();

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
  // await run(["console/compile_vue_routes", moduleName]);
  // await run([
  //   "node_modules/.bin/webpack",
  //   "--config ./configs.webpack.production.js",
  //   "--hide-modules",
  //   "--env.mode=production",
  //   `--env.module=${moduleName}`,
  //   `--env.version=${moduleVersion}`,
  // ]);
}

/**
 * Run a command.
 *
 * @param command - The command in array format (e.g., ["do", "something"]).
 */
export async function run(command: string[]) {
  const p = Deno.run({
    cmd: command,
    stdout: "piped",
    stderr: "piped",
  });

  const status = await p.status();

  if (status.code === 1) {
    console.log(decoder.decode(await p.stderrOutput()));
  }

  for await (const line of readLines(p.stdout)) {
    console.log(line);
  }

  p.close();
}
