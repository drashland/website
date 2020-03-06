import Drash from "/var/src/drashland/deno-drash/mod.ts";

export default class HomeResource extends Drash.Http.Resource {
  static paths = ["/"];

  public GET() {
    const cookieValue = this.request.getCookie("my_cookie")
    this.response.body = `You passed in the following cookie value: ${cookieValue}`;
    return this.response;
  }
}
