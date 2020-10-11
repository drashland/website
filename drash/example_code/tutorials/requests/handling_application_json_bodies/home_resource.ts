import { Drash } from "https://deno.land/x/drash@v1.2.5/mod.ts";

export default class HomeResource extends Drash.Http.Resource {

  static paths = [
    "/"
  ];

  public POST() {
    const param = this.request.getBodyParam("name");

    if (!param) {
      throw new Drash.Exceptions.HttpException(
        400,
        "This resource requires the `name` body param."
      );
    }

    this.response.body = `You passed in the following body param: ${param}`;

    return this.response;
  }

}
