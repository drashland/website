import { Drash } from "../../deps.ts";
import { BaseResource } from "./base_resource.ts";

const decoder = new TextDecoder();

export class LandingResource extends BaseResource {
  static paths = [
    "/(staging)?",
  ]

  public GET () {
    const uri = this.request.url_path;
    let content = decoder.decode(Deno.readFileSync("./src/landing.html"));

    content = content
        .replace("{{ environment }}", this.getEnvironment())
        .replace("{{ title }}", "Drash Land")
        .replace("{{ drash }}", JSON.stringify({
          environment: this.getEnvironment()
        }));

    this.response.body = content;

    return this.response
  }
}