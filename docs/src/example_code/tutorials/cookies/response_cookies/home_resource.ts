import { Drash } from "https://deno.land/x/drash/mod.ts";

export default class HomeResource extends Drash.Http.Resource {

  static paths = ["/"];

  public GET() {
    this.response.setCookie({name: "my_cookie", value: "chocolate"})
    this.response.body = "my_cookie cookie sent!"
    return this.response;
  }

  public DELETE() {
    this.response.setCookie({
      name: "my_cookie",
      value: "chocolate"
    });
    this.response.delCookie("my_cookie");
    this.response.body = "my_cookie cookie was set and deleted!"
    return this.response;
  }
}
