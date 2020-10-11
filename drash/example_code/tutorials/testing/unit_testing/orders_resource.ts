import { Drash } from "https://deno.land/x/drash@v1.2.5/mod.ts";

export default class OrdersResource extends Drash.Http.Resource {

  static paths = [
    "/orders/:id"
  ];

  // Simulate a database with order records
  protected database = {
    1090987: {
      id: 1090987,
      name: "Gadgets",
      quantity: 50,
      price: 1000
    },
    8878213: {
      id: 8878213,
      name: "Gizmos",
      quantity: 25,
      price: 2000
    },
  };

  public GET() {
    this.response.body = this.getOrder(this.request.getPathParam("id"));
    return this.response;
  }

  protected getOrder(id) {
    if (this.database[id]) {
      return this.database[id];
    }

    throw new Drash.Exceptions.HttpException(404, `Order #${id} not found.`);
  }
}
