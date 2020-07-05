import { Drash } from "https://deno.land/x/drash/mod.ts";

export function LogAccessMiddleware(
  request: Drash.Http.Request,
  response: Drash.Http.Response
): void {
  console.log("Secret resource was accessed by: {username}");
}
