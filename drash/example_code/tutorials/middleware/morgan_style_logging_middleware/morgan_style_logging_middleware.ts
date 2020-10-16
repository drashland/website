import { Drash } from "https://deno.land/x/drash@v1.2.5/mod.ts";

const logger = new Drash.CoreLoggers.ConsoleLogger({
  enabled: true,
  level: "all",
  tag_string: "{datetime} | {level} |",
  tag_string_fns: {
    datetime() {
      return new Date().toISOString().replace("T", " ");
    }
  }
});

export function MorganStyleLoggingMiddleware(
  request: any,
  response?: Drash.Http.Response
) {
  // If there is no response, then we know this is occurring before the request
  if (!response) {
    logger.info(`Request received: ${request.method} ${request.url}`);
  }
  // If there is a response, then we know this is occurring after the request
  if (response) {
    logger.info(`Response: ${response.status_code} ${response.getStatusMessage()}`);
  }
}
