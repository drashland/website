import { Drash } from "https://deno.land/x/drash@v1.2.5/mod.ts";

export default function VerifyTokenMiddleware(
  request: Drash.Http.Request,
  response?: Drash.Http.Response
): void {
  let token = request.getUrlQueryParam('super_secret_token');

  if (!token) {
    throw new Drash.Exceptions.HttpMiddlewareException(400, "Where is the token?");
  }

  if (token != "AllYourBaseAreBelongToUs") {
    throw new Drash.Exceptions.HttpMiddlewareException(403, `Mmm... "${token}" is a bad token.`);
  }
}
