import Drash from "../deps.ts";
import { renderFile } from "https://deno.land/x/dejs@0.3.0/dejs.ts";
import config from "../conf/app.ts";
const BASE_URL = Deno.env().DENO_DRASH_DOCS_BASE_URL;
const ENVIRONMENT = Deno.env().DENO_DRASH_DOCS_ENVIRONMENT
const Decoder = new TextDecoder();
const Encoder = new TextEncoder();

// FILE MARKER: FUNCTIONS - EXPORTED ///////////////////////////////////////////

export async function compile(inputFile, outputFile): Promise<any> {
  let body = await getAppDataInHtml(inputFile);
  let encoded = Encoder.encode(body);
  Deno.writeFileSync(outputFile, encoded);
}

export function getAppData() {
  const buildTimestamp = new Date().getTime();
  const bundleVersion = (ENVIRONMENT == "production")
    ? ".min"
    : "";

  Deno.writeFileSync(
    config.server.directory + "/public/assets/js/compiled_app_data.js",
    Encoder.encode("const app_data = " + JSON.stringify({
      example_code: getExampleCode(),
      store: {
        page_data: {
          api_reference: getPageDataApiReference()
        }
      }
    }) + ";")
  );

  return {
    // The below is transferred to index.ejs
    scripts: {
      local: [
        "/public/assets/vendor/prismjs/prism.js",
        "/public/assets/vendor/jquery-3.3.1/jquery.min.js",
        "/public/assets/vendor/bootstrap-4.1.3-dist/js/bootstrap.min.js",
        `/public/assets/js/compiled_app_data.js?version=${buildTimestamp}`,
        `/public/assets/js/bundle${bundleVersion}.js?version=${buildTimestamp}`
      ],
      external: ["https://unpkg.com/axios/dist/axios.min.js"]
    },
    conf: {
      base_url: BASE_URL
        ? BASE_URL
        : ""
    },
  };
}

export async function getAppDataInHtml(inputFile) {
  const output = await renderFile(inputFile, getAppData());
  let html = output.toString();
  return html;
}

// FILE MARKER: FUNCTIONS - LOCAL //////////////////////////////////////////////

function getPageDataApiReference() {
  let contents = "";
  try {
    contents = Decoder.decode(
      Deno.readFileSync(`./public/assets/json/api_reference.json`)
    );
  } catch (error) {
  }

  return JSON.parse(contents);
}

function getExampleCode() {
  let languages = {
    sh: "shell",
    ts: "typescript",
    css: "css",
    js: "javascript"
  };

  let exampleCode = {};

  let ignore = ["api_reference", ".DS_Store"];

  let files = Drash.Util.Exports.getFileSystemStructure(`${config.server.directory}/src/example_code`);

  files.forEach(file => {
    let pathname = file.pathname.replace(config.server.directory, "");
    if (!exampleCode[pathname]) {
      exampleCode[pathname] = {};
    }

    if (ignore.indexOf(file.filename) != -1) {
      return;
    }

    let fileContentsRaw = Deno.readFileSync(file.path);
    let fileContents = Decoder.decode(fileContentsRaw);
    fileContents = fileContents.replace(/<\/script>/g, "<//script>");

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


function getTitleOfFile(file, fileExtension) {
  let title =
    fileExtension == "sh" ? "Terminal" : `/path/to/your/project/${file.filename}`;

  title =
    file.filename == "folder_structure.txt" ? "Project Folder Structure" : title;

  return title;
}
