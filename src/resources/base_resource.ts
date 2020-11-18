import { Drash } from "../../deps.ts";

const decoder = new TextDecoder();

export class BaseResource extends Drash.Http.Resource {

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

  protected ucfirst(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  protected getModulePage(data: {
    version: string,
    module: string,
  }): string {
    let content = decoder.decode(Deno.readFileSync("./src/module.html"));
    content = content
        .replace("{{ environment }}", this.getEnvironment())
        .replace("{{ title }}", "Drash Land - " + this.ucfirst(data.module))
        .replace(/\{\{ module \}\}/g, data.module)
        .replace("{{ version }}", data.version)
        .replace("{{ drash }}", JSON.stringify({
          environment: this.getEnvironment()
        }));
    return content
  }

  protected async fileExists (filename: string): Promise<boolean> {
    try {
      await Deno.stat(filename);
      // successful, file or directory must exist
      return true;
    } catch (error) {
      if (error instanceof Deno.errors.NotFound) {
        // file or directory does not exist
        return false;
      } else {
        // unexpected error, maybe permissions, pass it along
        return false;
      }
    }
  };

}
