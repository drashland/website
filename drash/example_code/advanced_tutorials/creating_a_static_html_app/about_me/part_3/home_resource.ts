import { Drash } from "https://deno.land/x/drash@v1.3.0/mod.ts";
const decoder = new TextDecoder();

export default class HomeResource extends Drash.Http.Resource {

  static paths = [
    "/"
  ];

  public GET() {
    try {
      let fileContentsRaw = Deno.readFileSync("./html/home.html");
      let template = decoder.decode(fileContentsRaw);
      this.response.body = template;
    } catch (error) {
      throw new Drash.Exceptions.HttpException(
        400,
        `Error reading HTML template.`
      );
    }
    return this.response;
  }
}
