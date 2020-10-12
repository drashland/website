import { Drash } from "https://deno.land/x/drash@v1.2.5/mod.ts";
const decoder = new TextDecoder();

export default class ContactResource extends Drash.Http.Resource {

  static paths = [
    "/contact"
  ];

  public GET() {
    try {
      let fileContentsRaw = Deno.readFileSync("./html/contact.html");
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
