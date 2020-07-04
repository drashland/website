@Drash.Http.Middleware({
  before_request: [VerifyTokenMiddleware],
  after_request: []
})
export default class SecretResource extends Drash.Http.Resource {

  static paths = [
    "/secret"
  ];

  @Drash.Http.Middleware({
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

