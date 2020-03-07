import Drash from "/var/src/drashland/deno-drash/mod.ts";

export default class HomeResource extends Drash.Http.Resource {

  static paths = ["/"];

  public GET() {
    this.response.setCookie({name: "my_cookie", value: "chocolate"})
    this.response.body = "my_cookie cookie sent!"
    return this.response;
  }
}
