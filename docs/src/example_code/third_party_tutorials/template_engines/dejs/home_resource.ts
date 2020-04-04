import Drash from "https://deno.land/x/drash/mod.ts";
import { renderFile } from "https://deno.land/x/dejs/mod.ts";

export default class HomeResource extends Drash.Http.Resource {

  static paths = ["/"];

  public async GET() {
    // Set the data if any
    let data = {
      name: this.request.geturlQueryParam("name")
        ? this.request.geturlQueryParam("name")
        : "(name not specified)"
    };
    // Render and serve the template to the client
    const output = await renderFile("./index.ejs", data);
    this.response.body = output.toString();
    return this.response;
  }
}
