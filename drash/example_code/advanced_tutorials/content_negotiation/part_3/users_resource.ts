import { Drash } from "https://deno.land/x/drash@v1.2.5/mod.ts";

export default class UsersResource extends Drash.Http.Resource {

  static paths = [
    "/users/:id",
  ];

  public GET() {
    let userId = this.request.getPathParam("id");
    this.response.body = this.getUser(userId);
    return this.response;
  }

  protected getUser(userId) {
    let user = null;

    try {
      let users = this.readFileContents("./users.json");
      users = JSON.parse(users);
      user = users[userId];
    } catch (error) {
      throw new Drash.Exceptions.HttpException(400, `Error getting user with ID "${userId}". Error: ${error.message}.`);
    }

    if (!user) {
      throw new Drash.Exceptions.HttpException(404, `User with ID "${userId}" not found.`);
    }

    return user;
  }

  protected readFileContents(file: string) {
    let fileContentsRaw = Deno.readFileSync(file);
    const decoder = new TextDecoder();
    let decoded = decoder.decode(fileContentsRaw);
    return decoded;
  }
}
