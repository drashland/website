import { Drash } from "https://deno.land/x/drash/mod.ts";
import { LogAccessMiddleware } from "./log_access_middleware.ts";
import { VerifyTokenMiddleware } from "./verify_token_middleware.ts";

@Drash.Decorators.Middleware({
  before_request: [VerifyTokenMiddleware],
  after_request: []
})
export default class SecretResource extends Drash.Http.Resource {

  static paths = [
    "/secret"
  ];

  @Drash.Decorators.Middleware({
    before_request: [LogAccessMiddleware],
    after_request: []
  })
  public GET() {
    this.response.body = {
      method: "GET",
      body: "You have accessed the secret resource!"
    };
    return this.response;
  }
}

