import Drash from "../../../../../../deno-drash/mod.ts";

export default class HomeResource extends Drash.Http.Resource {
  static paths = ["/"];

  public GET() {
    const cookieValue = this.request.getCookie('testCookie')
    this.response.body = cookieValue
    return this.response
  }

  public POST () {
    this.response.setCookie({ name: 'testCookie', value: 'Drash' })
    this.response.body = "Saved your cookie!";
    return this.response;
  }

  public PUT() {
    this.response.body = "PUT request received!";
    return this.response;
  }

  public DELETE() {
    this.response.body = "DELETE request received!";
    this.response.delCookie('testCookie')
    return this.response;
  }
}
