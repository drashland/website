import { Drash } from "../../deps.ts";

function ucfirst(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export class ModuleResource extends Drash.Http.Resource {
  static paths = ["/:module/:version?"]

  public GET() {
    const moduleName = this.request.getPathParam("module") || "";
    const version = this.request.getPathParam("version") || "";
    const uri = this.request.url_path;
    const environment = this.getEnvironment();
    let content = decoder.decode(Deno.readFileSync("index.module.html"));
    content = content
        .replace("{{ environment }}", environment)
        .replace("{{ title }}", "Drash Land - " + ucfirst(moduleName))
        .replace(/\{\{ module \}\}/g, moduleName)
        .replace("{{ version }}", version)
        .replace("{{ drash }}", JSON.stringify({
          environment: this.getEnvironment()
        }));
    this.response.body = content;
    return this.response
  }

  protected getEnvironment() {
      const uri = this.request.url_path;
      const isDrashIo = this.request.headers.get("x-forwarded-host");
      const isStaging = uri.includes("/staging");
      if (isDrashIo) {
        if (isStaging) {
          return "staging";
        }
        return "production";
      }

      return "development";
  }
}

