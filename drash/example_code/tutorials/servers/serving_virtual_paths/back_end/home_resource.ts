import { Drash } from "https://deno.land/x/drash@v1.2.5/mod.ts";

export default class HomeResource extends Drash.Http.Resource {

  static paths = ["/"];

  public GET() {
    this.response.body = `
    <!DOCTYPE html>
    <html>
      <head>
        <title>Drash</title>
        <link href="/assets/style.css" rel="stylesheet">
      </head>
      <body>
        <h1 class="my-text">This is my title and it is red.</h1>
      </body>
    </html>`;

    return this.response;
  }
}
