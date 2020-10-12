import { Drash } from "https://deno.land/x/drash@v1.2.5/mod.ts";
import { denoMysql } from "./app.ts";

export default class HomeResource extends Drash.Http.Resource {

  static paths = ["/"];

  public async GET() {
    this.response.body = await denoMysql.query(`select * from users`);
    return this.response;
  }
}
