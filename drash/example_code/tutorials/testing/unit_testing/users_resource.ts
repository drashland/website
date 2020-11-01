import { Drash } from "https://deno.land/x/drash@v1.2.5/mod.ts";

export default class UsersResource extends Drash.Http.Resource {

  static paths = [
    "/users/:id"
  ];

  // Simulate a database with user records
  protected database: {[key: string]: {
    id: number,
    name: string
  }} = {
    "1388873": {
      id: 1388873,
      name: "Seller",
    },
    "1983765": {
      id: 1983765,
      name: "Buyer",
    },
  };

  public GET() {
    const id = this.request.getPathParam("id");
    if (!id) {
      throw new Drash.Exceptions.HttpException(400, "`id` must be passed in")
    }
    this.response.body = this.getUser(id);
    return this.response;
  }

  protected getUser(id: string) {
    if (this.database[id]) {
      return this.database[id];
    }

    throw new Drash.Exceptions.HttpException(404, `User #${id} not found.`);
  }
}
