/**
 * deno run --allow-read --allow-write --allow-net bump_module_versions.ts --module <MODULE>
 */

const module = Deno.args.find((arg, i) => {
  return Deno.args[i - 1] === "--module"
})

async function fetchLatestDrashlandRepoVersion (repo: string): Promise<string> {
  const res = await fetch("https://api.github.com/repos/drashland/" + repo + "/releases/latest");
  const body = await res.json()
  const latestVersion = body.tag_name
  return latestVersion
}

async function getStdVersion(options: { latest: boolean, previous: boolean }): Promise<string> {
  const res = await fetch(
      "https://raw.githubusercontent.com/denoland/deno_website2/master/versions.json",
  );
  const versions: {
    std: string[];
    cli: string[];
    cli_to_std: { [key: string]: string };
  } = await res.json(); // { std: ["0.63.0", ...], cli: ["v1.2.2", ...], cli_to_std: { v1.2.2: "0.63.0", ... } }
  if (options.latest) {
    return versions.std[0]
  }
  if (options.previous) {
    return versions.std[1]
  }
  return ""
}

async function getPreviousDrashlandRepoVersion (repo: string): Promise<string> {
  const res = await fetch("https://api.github.com/repos/drashland/" + repo + "/releases")
  const body = await res.json()
  console.log(body)
  const previousRelease = body[1]
  const previousVersion = previousRelease.tag_name
  return previousVersion
}

let webpackConfig = new TextDecoder().decode(Deno.readFileSync("./webpack.config.js"));

if (module === "dmm") {
  const latestDmmVersion = await fetchLatestDrashlandRepoVersion("dmm");
  const previousDmmVersion = await getPreviousDrashlandRepoVersion("dmm");
  webpackConfig.replace(`latest_dmm_version: "${previousDmmVersion}"`, `latest_dmm_version: "${latestDmmVersion}"`)
}

if (module === "drash") {
  const latestDrashVersion = await fetchLatestDrashlandRepoVersion("deno-drash");
  const previousDrashVersion = await getPreviousDrashlandRepoVersion("deno-drash");
  webpackConfig.replace(`latest_drash_version: "${previousDrashVersion}"`, `latest_dmm_version: "${latestDrashVersion}"`)
}

if (module === "sockets") {
  const latestSocketsVersion = await fetchLatestDrashlandRepoVersion("sockets");
  const previousSocketsVersion = await getPreviousDrashlandRepoVersion("sockets");
  webpackConfig.replace(`latest_sockets_version: "${previousSocketsVersion}"`, `latest_dmm_version: "${latestSocketsVersion}"`)
}

if (module === "rhum") {
  const latestRhumVersion = await fetchLatestDrashlandRepoVersion("rhum");
  const previousRhumVersion = await fetchLatestDrashlandRepoVersion("rhum");
  webpackConfig.replace(`latest_rhum_version: "${previousRhumVersion}"`, `latest_dmm_version: "${latestRhumVersion}"`)
}

// Always do std
const latestStdVersion = await getStdVersion({ latest: true, previous: false });
const previousStdVersion = await getStdVersion({ latest: false, previous: true });
webpackConfig.replace(`latest_std_version: "${previousStdVersion}"`, `latest_dmm_version: "${latestStdVersion}"`)

Deno.writeFileSync("./webpack.config.js", new TextEncoder().encode(webpackConfig))


