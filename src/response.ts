import { Drash } from "../deps.ts"

const decoder = new TextDecoder()

export class Response extends Drash.Http.Response {
  public generateResponse (): string {
    if (this.status_code === 404) {
      const content = decoder.decode(Deno.readFileSync("./src/404.html"))
      this.body = content
    }
    if (this.status_code === 500) {
      const content = decoder.decode(Deno.readFileSync("./src/500.html"))
      this.body = content
    }
    if (!this.body) {
      const content = decoder.decode(Deno.readFileSync("./src/500.html"))
      this.body = content
    }
    return this.body as string
  }
}