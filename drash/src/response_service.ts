import { Drash } from "../deps.ts";
import { getFileSystemStructure } from "../helpers.ts";
import docsConfig from "../conf/app.ts";
let envVarsPath = "../conf/env_vars_" + Deno.env.get("DENO_DRASH_DOCS_ENVIRONMENT") + ".ts";
let env = (await import(envVarsPath)).default;
const decoder = new TextDecoder();
const encoder = new TextEncoder();

function switchVersion(fileContents: string): string {
  return fileContents.replace(
    `import { Drash } from "https://deno.land/x/drash/mod.ts";`,
    docsConfig.example_code_versions.drash
  );
}

// FILE MARKER: FUNCTIONS - EXPORTED ///////////////////////////////////////////

export async function compile(inputFile: any, outputFile: any): Promise<any> {
  let body = await getTemplate(inputFile);
  let encoded = encoder.encode(body);
  Deno.writeFileSync(outputFile, encoded);
}

export function getTemplate(inputFile: any) {
  let appDataJson: any = JSON.stringify({
    example_code: getExampleCode(),
    store: {
      page_data: {
        api_reference: getPageDataApiReference()
      }
    },
    example_code_versions: {
      deno: docsConfig.example_code_versions.deno
    }
  }, null, 2);
  // // All public-facing environments get their variables from
  // // app_data.{environment}.js. The development environment cannot keep writing
  // // app_data.development.js on every request, so we serve `app_data` on the fly
  // if (env.environment != "development") {
  //   Deno.writeFileSync(
  //     docsConfig.server.directory + "/public/assets/js/app_data." + env.environment + ".js",
  //     encoder.encode("const app_data = " + appDataJson + ";")
  //   );
  // }

  let environmentScripts = getEnvironmentScripts(
    env.environment,
    env.base_url,
    appDataJson,
    new Date().getTime().toString()
  );

  let template = decoder.decode(Deno.readFileSync(inputFile));
  template = template
    .replace(/\{\{ base_url \}\}/g, env.base_url)
    .replace(/\{\{ environment \}\}/g, env.environment)
    .replace(/\{\{ cache_buster \}\}/g, new Date().getTime().toString())
    .replace(/\{\{ environment_scripts \}\}/g, environmentScripts)
    .replace(/\{\{ app_data \}\}/g, appDataJson)

  return template;
}

// FILE MARKER: FUNCTIONS - LOCAL //////////////////////////////////////////////

function getEnvironmentScripts(environment: string, baseUrl: string, appData: any, cacheBuster: string) {
  if (environment != "development") {
    return `
  <script src="${baseUrl}/public/assets/js/vendors~app~bundle.${environment}.js?version=${cacheBuster}"></script>
  <script src="${baseUrl}/public/assets/js/vendors~bundle.${environment}.js?version=${cacheBuster}"></script>
  <script src="${baseUrl}/public/assets/js/bundle.${environment}.js?version=${cacheBuster}"></script>
  <script src="${baseUrl}/public/assets/js/vendors~router.${environment}.js?version=${cacheBuster}"></script>
  <script src="${baseUrl}/public/assets/js/router.${environment}.js?version=${cacheBuster}"></script>
  <script src="${baseUrl}/public/assets/js/vendors~app.${environment}.js?version=${cacheBuster}"></script>
  <script src="${baseUrl}/public/assets/js/app.${environment}.js?version=${cacheBuster}"></script>
`;
  }

  return `
  <script src="${baseUrl}/public/assets/js/vendors~app~bundle~router.${environment}.js?version=${cacheBuster}"></script>
  <script src="${baseUrl}/public/assets/js/vendors~bundle~router.${environment}.js?version=${cacheBuster}"></script>
  <script src="${baseUrl}/public/assets/js/vendors~app~bundle~router.${environment}.js?version=${cacheBuster}"></script>
  <script src="${baseUrl}/public/assets/js/vendors~bundle.${environment}.js?version=${cacheBuster}"></script>
  <script src="${baseUrl}/public/assets/js/bundle.${environment}.js?version=${cacheBuster}"></script>
  <script src="${baseUrl}/public/assets/js/router.${environment}.js?version=${cacheBuster}"></script>
  <script src="${baseUrl}/public/assets/js/vendors~app~bundle.${environment}.js?version=${cacheBuster}"></script>
  <script src="${baseUrl}/public/assets/js/vendors~app~router.${environment}.js?version=${cacheBuster}"></script>
  <script src="${baseUrl}/public/assets/js/app.${environment}.js?version=${cacheBuster}"></script>
`;
}

function getPageDataApiReference(): any {
  let contents: string = "";
  try {
    contents = decoder.decode(
      Deno.readFileSync(`./public/assets/json/api_reference.json`)
    );
  } catch (error) {
  }

  return JSON.parse(contents);
}

function getExampleCode() {
  let languages: any = {
    sh: "shell",
    ts: "typescript",
    css: "css",
    js: "javascript"
  };

  let exampleCode: any = {};

  let ignore: string[] = ["api_reference", ".DS_Store"];

  let files: any = getFileSystemStructure(`${docsConfig.server.directory}/src/example_code`);

  files.forEach((file: any) => {
    let pathname = file.pathname.replace(docsConfig.server.directory, "");
    if (file.isDirectory()) {
      return;
    }
    if (!exampleCode[pathname]) {
      exampleCode[pathname] = {};
    }

    if (ignore.indexOf(file.filename) != -1) {
      return;
    }

    let fileContentsRaw = Deno.readFileSync(file.path);
    let fileContents = decoder.decode(fileContentsRaw);
    fileContents = fileContents.replace(/<\/script>/g, "<//script>");
    fileContents = switchVersion(fileContents);
    exampleCode[pathname][file.basename] = {
      contents: fileContents,
      extension: file.extension,
      filename: file.filename,
      language: languages[file.extension],
      title: getTitleOfFile(file, file.extension),
    };
  });

  return exampleCode;
}

function getTitleOfFile(file: any, fileExtension: any): string {
  let title =
    fileExtension == "sh" ? "Terminal" : `/path/to/your/project/${file.filename}`;

  title =
    file.filename == "folder_structure.txt" ? "Project Folder Structure" : title;

  return title;
}
