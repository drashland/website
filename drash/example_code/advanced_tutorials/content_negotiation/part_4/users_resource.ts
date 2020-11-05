import { Drash } from "https://deno.land/x/drash@v1.3.0/mod.ts";

export default class UsersResource extends Drash.Http.Resource {

  static paths = [
    "/users/:id"
  ];

  public GET() {
    let userId = this.request.getPathParam("id");
    let user = this.getUser(userId);

    // Read the Accept header and check if text/html is acceptable
    if (this.request.accepts("text/html")) {
      return this.generateHtml(user);
    }

    // Default to a JSON representation
    return this.generateJson(user);
  }

  protected getUser(userId: any) {
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

  protected generateHtml(user: any) {
    this.response.headers.set("Content-Type", "text/html");
    try {
      let html = this.readFileContents("./user.html");
      html = html
        .replace(/\{\{ alias \}\}/, user.alias)
        .replace(/\{\{ name \}\}/, user.name);
      this.response.body = html;
      return this.response;
    } catch (error) {
      throw new Drash.Exceptions.HttpException(500, error.message);
    }
  }

  protected generateJson(user: any) {
    this.response.headers.set("Content-Type", "application/json");
    user.api_key = "**********";
    user.api_secret = "**********";
    this.response.body = user;
    return this.response;
  }

  protected readFileContents(file: string) {
    let fileContentsRaw = Deno.readFileSync(file);
    const decoder = new TextDecoder();
    let decoded = decoder.decode(fileContentsRaw);
    return decoded;
  }
}

