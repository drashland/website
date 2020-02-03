import Drash from "https://deno.land/x/drash/mod.ts";
const logger = new Drash.Loggers.ConsoleLogger({
  enabled: true,
  level: "all",
  tag_string: "{datetime} | {level} |",
  tag_string_fns: {
    datetime() {
      return new Date().toISOString().replace("T", " ");
    }
  }
});

export default class MorganStyleLoggingMiddleware extends Drash.Http.Middleware {
  public run() {
    logger.info(this.request.method + " " + this.request.url);
  }
}
