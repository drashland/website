import Drash from "https://deno.land/x/drash/mod.ts";

export default class UsersResource extends Drash.Http.Resource {

  static paths = [
    "/users/:id"
  ];

  public GET() {
    const userId = parseInt(this.request.getPathParam("id"));

    if (isNaN(userId)) {
      throw new Drash.Exceptions.HttpException(
        400,
        "This resource requires the `:id` path param to be a number."
      );
    }

    this.response.body = `You passed in the following user ID as the path param: ${userId}`;

    return this.response;
  }

}
