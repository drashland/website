import { BaseResource } from "./base_resource.ts";

const decoder = new TextDecoder();

export class LandingResource extends BaseResource {
  static paths = [
    "/",
    "/staging",
  ]

  public async GET () {
    this.log("Requested landing page.");

    const filename = "./src/landing.html";

    if (!await this.fileExists(filename)) {
      return this.sendError(404);
    }

    let content = decoder.decode(Deno.readFileSync(filename));
    const environment = this.getEnvironment();
    const titleSuffix = environment != "production"
      ? ` [${environment}]`
      : "";
    content = content
        .replace("{{ environment }}", environment)
        .replace("{{ title }}", "Drash Land" + titleSuffix)
        .replace("{{ drash }}", JSON.stringify({
          environment: environment
        }));

    this.response.body = content;

    return this.response
  }
}
