import { Drash } from "../../deps.ts";
import { BaseResource } from "./base_resource.ts";

const decoder = new TextDecoder();

function ucfirst(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export class ModuleResource extends BaseResource {
  static paths = ["/:module/:version?"]

  protected recognized_version: {[key: string]: string[]} = {
    drash: [
      "v1.3.0",
    ],
    dmm: [
      "v1.2.0",
    ],
    rhum: [
      "v1.1.4",
    ],
    wocket: [
      "v0.5.0",
    ]
  };

  public GET() {
    const moduleName = this.request.getPathParam("module") || "";
    const version = this.request.getPathParam("version") || "";
    if (version) {
      const result = this.validateVersion(moduleName, version);
      if (!result) {
        return this.response;
      }
    }
    const uri = this.request.url_path;
    let content = decoder.decode(Deno.readFileSync("./src/module.html"));
    content = content
        .replace("{{ environment }}", this.getEnvironment())
        .replace("{{ title }}", "Drash Land - " + ucfirst(moduleName))
        .replace(/\{\{ module \}\}/g, moduleName)
        .replace("{{ version }}", version)
        .replace("{{ drash }}", JSON.stringify({
          environment: this.getEnvironment()
        }));
    this.response.body = content;
    return this.response
  }

  protected validateVersion(moduleName: string, version: string): boolean {
    if (!this.recognized_version[moduleName]) {
      this.response.body = decoder.decode(Deno.readFileSync("404.html"));
      return false;
    }

    if (this.recognized_version[moduleName].indexOf(version) == -1) {
      this.response.body = decoder.decode(Deno.readFileSync("404.html"));
      return false;
    }

    return true;
  }
}

