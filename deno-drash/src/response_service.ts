import { Drash } from "../deps.ts";
import { renderFile } from "https://deno.land/x/dejs@0.3.4/mod.ts";
import docsConfig from "../conf/app.ts";
let envVarsPath = "../conf/env_vars_" + Deno.env().DENO_DRASH_DOCS_ENVIRONMENT + ".json";
let env = (await import(envVarsPath)).default;
const decoder = new TextDecoder();
const encoder = new TextEncoder();

function switchVersion(fileContents: string): string {
return fileContents.replace(
    `import Drash from "https://deno.land/x/drash/mod.ts";`,
    docsConfig.example_code_versions.drash
  );
}

// FILE MARKER: FUNCTIONS - EXPORTED ///////////////////////////////////////////

export async function compile(inputFile: any, outputFile: any): Promise<any> {
  let body = await getAppDataInHtml(inputFile);
  let encoded = encoder.encode(body);
  Deno.writeFileSync(outputFile, encoded);
}

export function getAppData() {
  let templateVariables: any = {
    conf: {
      base_url: env.base_url,
      environment: env.environment,
      cache_buster: new Date().getTime(),
    },
  };

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

  // All public-facing environments get their variables from
  // app_data.{environment}.js. The development environment cannot keep writing
  // app_data.development.js on every request, so we serve `app_data` on the fly
  if (env.environment != "development") {
    Deno.writeFileSync(
      docsConfig.server.directory + "/public/assets/js/app_data." + env.environment + ".js",
      encoder.encode("const app_data = " + appDataJson + ";")
    );
    return templateVariables;
  }

  templateVariables.app_data = appDataJson;
  return templateVariables;
}

export async function getAppDataInHtml(inputFile: any) {
  const output: any = await renderFile(inputFile, getAppData());
  let html: any = output.toString();
  return html;
}

// FILE MARKER: FUNCTIONS - LOCAL //////////////////////////////////////////////

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

  let files: any = Drash.Util.Exports.getFileSystemStructure(`${docsConfig.server.directory}/src/example_code`);

  files.forEach((file: any) => {
    let pathname = file.pathname.replace(docsConfig.server.directory, "");
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
