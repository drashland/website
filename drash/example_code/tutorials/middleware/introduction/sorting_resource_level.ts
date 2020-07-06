@Drash.Http.Middleware({
  before_request: [
    RedMiddleware,
    BlueMiddleware
  ]
})
export default class HomeResource extends Drash.Http.Resource {

  static paths = [
    "/"
  ];

  public GET() {
    this.response.body = "GET request received!";
    return this.response;
  }
}

