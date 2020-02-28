import Drash from "../../../../../../deno-drash/mod.ts";

export default class HomeResource extends Drash.Http.Resource {

  static paths = ["/"];

  public GET() {
    this.response.body = "";

    return this.response;
  }
}

