import { Drash } from "https://deno.land/x/drash/mod.ts";

export default class TeaResource extends Drash.Http.Resource {

  static paths = [
    "/tea/:id"
  ];

  public GET() {
    let teaId = this.request.getPathParam("id");
    this.response.body = this.getTea(teaId);
    return this.response;
  }

  protected getTea(teaId: number) {
    let record = null;

    try {
      let fileContentsRaw = Deno.readFileSync("./tea.json");
      let decoder = new TextDecoder();
      let records = decoder.decode(fileContentsRaw);
      records = JSON.parse(records);
      record = records[teaId];
    } catch (error) {
      throw new Drash.Exceptions.HttpException(
        400,
        `Error getting tea with ID "${teaId}". Error: ${error.message}.`
      );
    }

    if (!record) {
      throw new Drash.Exceptions.HttpException(
        404,
        `Tea with ID "${teaId}" not found.`
      );
    }

    return record;
  }
}

