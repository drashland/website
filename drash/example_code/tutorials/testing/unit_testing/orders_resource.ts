import { Drash } from "https://deno.land/x/drash@v1.2.5/mod.ts";

export default class OrdersResource extends Drash.Http.Resource {

  static paths = [
    "/orders/:id"
  ];

  // Simulate a database with order records
  protected database: {[key: string]: {
      id: number,
      name: string,
      quantity: number,
      price: number
    }} = {
    "1090987": {
      id: 1090987,
      name: "Gadgets",
      quantity: 50,
      price: 1000
    },
    "8878213": {
      id: 8878213,
      name: "Gizmos",
      quantity: 25,
      price: 2000
    },
  };

  public GET() {
    const id = this.request.getPathParam("id");
    if (!id) {
      throw new Drash.Exceptions.HttpException(400, "`id` parameter must be passed in")
    }
    this.response.body = this.getOrder(id);
    return this.response;
  }

  protected getOrder(id: string) {
    if (this.database[id]) {
      return this.database[id];
    }

    throw new Drash.Exceptions.HttpException(404, `Order #${id} not found.`);
  }
}
