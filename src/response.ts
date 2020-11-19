import { Drash } from "../deps.ts"

const decoder = new TextDecoder()

export class Response extends Drash.Http.Response {
  public generateResponse (): string {
    let html = decoder.decode(Deno.readFileSync("./src/error.html"))
      .replace("{{ status_code }}", this.status_code as unknown as string);

    if (this.status_code === 404) {
      this.body = html
        .replace("{{ status_message }}", "Not Found")
        .replace("{{ error_message }}", "The page you are looking for could not be found. Please go back and try again. Alternatively, you can report the issue <a style='color: #ff7700' href='https://github.com/drashland/website/issues/new?assignees=&labels=Priority%3A+High%2C+Remark%3A+Investigation+Needed&template=documentation_page_issue.md&title=drash.land%20server%20issue%20(404)' target='_BLANK'>here</a>.");
    }

    if (this.status_code === 500) {
      this.body = html
        .replace("{{ status_message }}", "Internal Server Error")
        .replace("{{ error_message }}", "A serious error occurred. We have been notified and are looking into the issue.");
    }

    if (!this.body) {
      this.body = html
        .replace("{{ status_message }}", "Bad Request")
        .replace("{{ error_message }}", "The server could not handle the request. Please go back and try again. Alternatively, you can report the issue <a style='color: #ff7700' href='https://github.com/drashland/website/issues/new?assignees=&labels=Priority%3A+High%2C+Remark%3A+Investigation+Needed&template=documentation_page_issue.md&title=drash.land%20server%20issue%20(400)' target='_BLANK'>here</a>.");
    }

    return this.body as string
  }
}
