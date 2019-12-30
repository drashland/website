import Drash from "https://deno.land/x/drash/mod.ts";

export default class HomeResource extends Drash.Http.Resource {
  static paths = [
    "/",
    "/:something"
  ];

  public GET() {
    this.response.body = "GET request received!";

    let pathParam = this.request.getPathParam("something");
    if (pathParam) {
      this.response.body += ` Path param "${pathParam}" received!`;
    }

    let queryParam = this.request.getQueryParam("something");
    if (queryParam) {
      this.response.body += ` URL query param "${queryParam}" received!`;
    }

    let bodyParam = this.request.getBodyParam("something");
    if (bodyParam) {
      this.response.body += ` Body param "${bodyParam}" received!`;
    }

    let headerParam = this.request.getHeaderParam("Something");
    if (headerParam) {
      this.response.body += ` Header param "${headerParam}" received!`;
    }

    return this.response;
  }
}
