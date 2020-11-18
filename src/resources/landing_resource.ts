import { Drash } from "../../deps.ts";

const decoder = new TextDecoder();

export class LandingResource extends Drash.Http.Resource {
  static paths = [
    "/",
    "/staging?/:module?",
  ]

  public GET () {
    const uri = this.request.url_path;
    let content = "";

    try {
      content = decoder.decode(Deno.readFileSync("./src/landing.html"));
    } catch (error) {
      console.log(error);
    }

    content = content
        .replace("{{ environment }}", this.getEnvironment())
        .replace("{{ title }}", "Drash Land")
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
