import Drash from "https://deno.land/x/drash/mod.ts";

export default class MyResource extends Drash.Http.Resource {
  static paths = [
    "/users/:user_id",
    "/users/:user_id/",
  ];

  public GET() {
    this.response.body = "GET request received!";

    let userId = this.request.getPathParam('user_id');

    this.response.body += ` Parsing User #${userId} data!`;

    return this.response;
  }
}
