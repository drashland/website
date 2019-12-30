import Drash from "../deps.ts";
import { renderFile } from "https://deno.land/x/dejs@0.3.0/dejs.ts";
import docsConfig from "../conf/app.ts";
let envVarsPath = "../conf/env_vars_" + Deno.env().DENO_DRASH_DOCS_ENVIRONMENT + ".json";
let env = (await import(envVarsPath)).default;
env.build_date = getDateTimeISO("UTC-5").datetime;
const Decoder = new TextDecoder();
const Encoder = new TextEncoder();

// FILE MARKER: FUNCTIONS - EXPORTED ///////////////////////////////////////////

export async function compile(inputFile, outputFile): Promise<any> {
  let body = await getAppDataInHtml(inputFile);
  let encoded = Encoder.encode(body);
  Deno.writeFileSync(outputFile, encoded);
}

export function getAppData() {
  Deno.writeFileSync(
    docsConfig.server.directory + "/public/assets/js/compiled_app_data.js",
    Encoder.encode("const app_data = " + JSON.stringify({
      conf: env,
      example_code: getExampleCode(),
      store: {
        page_data: {
          api_reference: getPageDataApiReference()
        }
      },
    }, null, 4) + ";")
  );

  // The below is transferred to index.ejs
  return {
    conf: {
      base_url: env.base_url,
      bundle_version: env.bundle_version,
      cache_buster: new Date().getTime(),
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

  let files = Drash.Util.Exports.getFileSystemStructure(`${docsConfig.server.directory}/src/example_code`);

  files.forEach(file => {
    let pathname = file.pathname.replace(docsConfig.server.directory, "");
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

function getDateTimeISO(utcOffset: string, isDaylightSavings: boolean = false) {
  if (typeof utcOffset !== 'string') {
    throw new Error('Argument #1 (utcOffset) must be a string (e.g., "UTC-5", "UTC-)');
  }

  const UTC_OFFSETS = {
    "UTC-4": {
      offset: -4,
      abbreviation_standard: "AST", // Atlantic Standard Time
    },
    "UTC-5": {
      offset: -5,
      abbreviation_standard: "EST", // Eastern Standard Time
      abbreviation_daylight: "EDT"  // Eastern Daylight Time
    },
    "UTC-6": {
      offset: -6,
      abbreviation_standard: "CST", // Central Standard Time
      abbreviation_daylight: "CDT"  // Central Daylight Time
    }
  };

  let offset = UTC_OFFSETS[utcOffset].offset;
  let timeZoneAbbreviation = UTC_OFFSETS[utcOffset].abbreviation_standard;

  if (isDaylightSavings) {
    offset += 1;
    timeZoneAbbreviation = UTC_OFFSETS[utcOffset].abbreviation_daylight;
  }

  let dateTime = new Date();
  let hours = dateTime.getUTCHours() + offset;

  dateTime.setUTCHours(hours);

  let dateString = dateTime.toISOString();
  let split = dateString.split("T");
  let date  = split[0];
  let time  = split[1].substring(0, split[1].length - 1);

  return {
    abbreviation: timeZoneAbbreviation,
    date: date,
    datetime: date + " " + time + " " + timeZoneAbbreviation,
    time: time,
  }
};
