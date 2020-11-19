import { Drash } from "../../deps.ts";
import { BaseResource } from "./base_resource.ts";

const decoder = new TextDecoder();

/**
 * /
 * /staging
 */
export class LandingResource extends BaseResource {
  static paths = [
    "/(staging)?",
  ]

  public GET () {
    console.log('GET LandingResource')
    let content = decoder.decode(Deno.readFileSync("./src/landing.html"));

    content = content
        .replace("{{ title }}", "Drash Land")
        .replace("{{ drash }}", JSON.stringify({
          environment: this.getEnvironment()
        }));

    this.response.body = content;

    return this.response
  }
}