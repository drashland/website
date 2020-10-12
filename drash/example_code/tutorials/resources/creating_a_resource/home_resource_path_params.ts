import { Drash } from "https://deno.land/x/drash@v1.2.5/mod.ts";

export default class HomeResource extends Drash.Http.Resource {
  static paths = [
    "/:my_param",
  ];

  public GET() {
    this.response.body = "GET request received!";

    let myParam = this.request.getPathParam("my_param");

    this.response.body += ` You passed in the following path param: ${myParam}`;

    return this.response;
  }
}
