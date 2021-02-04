const res = await fetch("https://raw.githubusercontent.com/denoland/deno_website2/master/versions.json");
const versions: {
  std: string[],
  cli: string[],
  cli_to_std: {
    [key: string]: string
  }
} = await res.json();
const latestDenoVersion = versions.cli[0]
const latestStdVersion = versions.std[0]

const p1 = Deno.run({
  cmd: ["node", "console/update_module_versions.js", "--module", "deno", "--version", `release-${latestDenoVersion}`]
})
await p1.status()
const p2 = Deno.run({
  cmd: ["node", "console/update_module_versions.js", "--module", "deno_std", "--version", `release-${latestStdVersion}`]
})
await p2.status()