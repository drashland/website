const a = await Deno.run({
  cmd: ["console/compile_vue_routes"],
  stderr: "piped",
});

await a.status()
a.close()

const b = await Deno.run({
  cmd: ["deno", "run", "-A", "app.ts"],
  stderr: "piped",
});

await b.status()
b.close()