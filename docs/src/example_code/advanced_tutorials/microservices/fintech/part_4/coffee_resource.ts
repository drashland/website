import { Drash } from "https://deno.land/x/drash/mod.ts";

export default class CoffeeResource extends Drash.Http.Resource {

  static paths = [
    "/coffee/:id"
  ];

  public GET() {
    let coffeeId = this.request.getPathParam("id");
    this.response.body = this.getCoffee(coffeeId);
    return this.response;
  }

  protected getCoffee(coffeeId: number) {
    let record = null;

    try {
      let fileContentsRaw = Deno.readFileSync("./coffee.json");
      let decoder = new TextDecoder();
      let records = decoder.decode(fileContentsRaw);
      records = JSON.parse(records);
      record = records[coffeeId];
    } catch (error) {
      throw new Drash.Exceptions.HttpException(
        400,
        `Error getting coffee with ID "${coffeeId}". Error: ${error.message}.`
      );
    }

    if (!record) {
      throw new Drash.Exceptions.HttpException(
        404,
        `Coffee with ID "${coffeeId}" not found.`
      );
    }

    return record;
  }
}

