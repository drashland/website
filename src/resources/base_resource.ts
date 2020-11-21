import { Drash } from "../../deps.ts";
import { configs } from "../../deps.ts";

const decoder = new TextDecoder();

export class BaseResource extends Drash.Http.Resource {

  /**
   * A list of recognized modules that users can access pages for. If a user
   * tries to access a page for a module that isn't in this list, then an error
   * page will be shown.
   */
  protected recognized_modules: string[] = [
    "dmm",
    "drash",
    "rhum",
    "wocket",
  ];

  protected latest_versions: { [key: string]: string } = {
    "dmm": "v1.2.0",
    "drash": "v1.3.0",
    "rhum": "v1.1.4",
    "wocket": "v0.5.0",
  };

  //////////////////////////////////////////////////////////////////////////////
  // FILE MARKER - METHODS - PROTECTED /////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////

  protected async fileExists(filename: string): Promise<boolean> {
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

      if (isStaging) {
        return "staging";
      }

      return "development";
  }

  protected getServerConfigs(): string {
    return JSON.stringify(Object.assign(configs, {
      environment: this.getEnvironment(),
    }));
  }

  protected log(message: string) {
    console.log(`${this.constructor.name} | ${message}`);
  }

  /**
   * Send documentation pages for a module.
   */
  protected sendDocsPage(moduleName: string, version: string = ""): Drash.Http.Response {
    this.response.body = decoder.decode(Deno.readFileSync("./src/module.html"))
        .replace("{{ title }}", "Drash Land - " + this.ucfirst(moduleName))
        .replace(/\{\{ module \}\}/g, moduleName)
        .replace("{{ server_configs }}", this.getServerConfigs());
      if (this.getEnvironment() == "development") {
        this.response.body = this.response.body.replace("{{ version }}", "development")
      } else {
        this.response.body = this.response.body.replace("{{ version }}", version)
      }
      return this.response;
  }

  protected sendError(code: number): Drash.Http.Response {
    this.log(`Sending ${code} error response.`);
    this.response.status_code = code;
    return this.response;
  }

  protected async sendVersionedDocsPage(
    moduleName: string,
    version: string
  ): Promise<Drash.Http.Response> {
    const filename = `./assets/bundles/${moduleName}_app.${version}.js`;
    this.log(`Getting Vue app: ${filename}`);

    if (!await this.fileExists(filename)) {
      this.log(`Module version "${version}" unknown.`);
      return this.sendError(404);
    }

    return this.sendDocsPage(moduleName, version);
  }

  protected ucfirst(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
}
