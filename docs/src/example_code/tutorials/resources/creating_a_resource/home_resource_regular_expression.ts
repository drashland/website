import { Drash } from "https://deno.land/x/drash/mod.ts";

export default class HomeResource extends Drash.Http.Resource {
  static paths = [
    "/([0-9]$)",
  ];

  public GET() {
    this.response.body = "GET request received!";

    return this.response;
  }
}
