import Drash from "https://deno.land/x/drash/mod.ts";

export default class ColaResource extends Drash.Http.Resource {
  protected COLAS: any = {
    1: "Diet Cola",
    2: "Vanilla Cola",
    3: "Cherry Cola",
  };

  static paths = ["/cola/:id"];

  public GET() {
    let colaId = this.request.getPathParam("id");

    if (!COLAS[colaId]) {
      return this.response.redirect(302, "/colas/1");
    }

    this.response.body = this.getCola(colaId);
    return this.response;
  }

  protected getCola(colaId: string) {
    return this.COLAS[colaId];
  }
}
