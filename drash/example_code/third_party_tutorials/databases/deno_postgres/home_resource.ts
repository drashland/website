import { Drash } from "https://deno.land/x/drash@v1.2.5/mod.ts";
import { denoPostgres } from "./app.ts";

export default class HomeResource extends Drash.Http.Resource {

  static paths = ["/"];

  public async GET() {
    await denoPostgres.connect();
    let result = await denoPostgres.query("SELECT * FROM users;");
    this.response.body = result.rows;
    await denoPostgres.end();
    return this.response;
  }
}
