import { Drash } from "../deps.ts"

const decoder = new TextDecoder()

export class Response extends Drash.Http.Response {
  public generateResponse (): string {
    try {
      this.body = decoder.decode(Deno.readFileSync(`./Error${this.status_code}.html`));
    } catch (error) {
      console.log(error);
    }

    if (!this.body) {
      this.body = decoder.decode(Deno.readFileSync(`./Error400.html`));
    }

    return this.body as string
  }
}
