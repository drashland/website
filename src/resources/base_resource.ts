import { Drash } from "../../deps.ts";

export class BaseResource extends Drash.Http.Resource {

  protected getEnvironment() {
      const uri = this.request.url_path;
      const isDrashIo = this.request.headers.get("x-forwarded-host");
      const isStaging = uri.includes("/staging");
      if (isDrashIo) {
        if (isStaging) {
          return "staging";
        }
        return "production";
      }

      return "development";
  }

}
