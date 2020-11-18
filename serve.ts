import { readLines } from "./deps.ts";

const a = await Deno.run({
  cmd: ["console/compile_vue_routes"],
  stdout: "piped",
  stderr: "piped",
});

for await (const line of readLines(a.stdout)) {
  try {
    console.log(line);
  } catch (error) {
    console.log(line);
  }
}

const b = await Deno.run({
  cmd: ["deno", "run", "-A", "app.ts"],
  stdout: "piped",
  stderr: "piped",
});

for await (const line of readLines(b.stdout)) {
  try {
    console.log(line);
  } catch (error) {
    console.log(line);
  }
}
