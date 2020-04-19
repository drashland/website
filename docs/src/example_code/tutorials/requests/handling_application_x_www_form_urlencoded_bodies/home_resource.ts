import { Drash } from "https://deno.land/x/drash/mod.ts";

export default class HomeResource extends Drash.Http.Resource {

  static paths = [
    "/"
  ];

  public POST() {
    const param = this.request.getBodyParam("snack");

    if (!param) {
      throw new Drash.Exceptions.HttpException(
        400,
        "This resource requires the `snack` body param."
      );
    }

    this.response.body = `You passed in the following body param: ${param}`;

    return this.response;
  }

}
