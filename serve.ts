const decoder = new TextDecoder();

await run(["console/compile_vue_routes", Deno.args[0]])

await run(["pkill", "-f", "drash_website_server.ts"]);

await run(["deno", "run", "-A", "drash_website_server.ts"]);

async function run(command: string[]) {
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
