import { Drash } from "https://deno.land/x/drash/mod.ts";

export default class HomeResource extends Drash.Http.Resource {

  static paths = [
    "/users"
  ];

  public GET() {
    let userId = this.request.getUrlQueryParam("id");

    if (!userId) {
      throw new Drash.Exceptions.HttpException(
        400,
        "This resource requires the `id` URL query param."
      );
    }

    userId = parseInt(userId);
    if (isNaN(userId)) {
      throw new Drash.Exceptions.HttpException(
        400,
        "This resource requires the `id` URL query param to be a number."
      );
    }

    this.response.body = `You passed in the following user ID as the URL query param: ${userId}`;

    return this.response;
  }

}
