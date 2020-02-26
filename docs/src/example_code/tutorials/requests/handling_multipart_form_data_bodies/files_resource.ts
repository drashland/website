import Drash from "https://deno.land/x/drash/mod.ts";

export default class HomeResource extends Drash.Http.Resource {

  static paths = [
    "/files"
  ];

  public POST() {
    const decoder = new TextDecoder();
    const file = this.request.getBodyFile("my_file");

    if (!file) {
      throw new Drash.Exceptions.HttpException(
        400,
        "This resource requires files to be uploaded via the request body."
      );
    }

    const outputFile = "./uploads/my_uploaded_file.txt";

    Deno.writeFileSync(outputFile, file.content);

    this.response.body = `You uploaded the following to ${outputFile}: `
      + `\n${decoder.decode(file.content)}`;

    return this.response;
  }

}
