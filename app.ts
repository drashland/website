import { Drash } from "https://deno.land/x/drash/mod.ts"

const decoder = new TextDecoder()
const encoder = new TextEncoder()

class DrashResource extends Drash.Http.Resource {
  static paths = ["/(staging)/?drash"]

  public GET() {
    const uri = this.request.url_path;
    const hostname = this.server.hostname
    const isStaging = uri.indexOf("staging") > -1;
    const environment = hostname === "localhost" ? "development" : isStaging ? "staging" : "production"
    let content = decoder.decode(Deno.readFileSync("index.html"));
    content = content
        .replace("{{ environment }}", environment)
        .replace("{{ title }}", "Drash Land - Drash")
        .replace("{{ module }}", "drash");
    this.response.body = content;
    return this.response
  }
}

class LandingResource extends Drash.Http.Resource {
  static paths = ["/(staging)?"]

  public GET () {
    const uri = this.request.url_path;
    const hostname = this.server.hostname
    const isStaging = uri.indexOf("staging") > -1;
    const environment = hostname === "localhost" ? "development" : isStaging ? "staging" : "production"
    let content = decoder.decode(Deno.readFileSync("index.html"));
    content = content
        .replace("{{ environment }}", environment)
        .replace("{{ title }}", "Drash Land")
        .replace("{{ module }}", "landing");
    this.response.body = content;
    return this.response
  }
}

const server = new Drash.Http.Server({
  resources: [
      LandingResource,
      DrashResource
  ],
  response_output: "text/html",
  static_paths: [
      "/assets"
  ],
  directory: "."
})

await server.run({
  hostname: "localhost",
  port: 1445
})

console.log(`Running server on http://${server.hostname}:${server.port}`)