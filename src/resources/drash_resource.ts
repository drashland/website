import { Drash } from "../../deps.ts";
import { BaseResource } from "./base_resource.ts";

const decoder = new TextDecoder();

/**
 * /drash
 * /drash/v1.2.3
 * /staging/drash
 * /staging/drash/v1.2.3
 */
export class DrashResource extends BaseResource {
  static paths = ["/(staging/)?drash/:version?"]

  public async GET() {
    console.log('GET DrashResource')
    const moduleName = "drash";
    const version =  this.request.getPathParam("version") || "";

    if (version) { // check to see if the version exists
      // TODO :: Point to the version file, eg `app.ts` --> `./assets/bundles/${module}_app_${environment}_${version}`
      if (await this.fileExists("./app.ts") === false) {
        // Pass it to base response
        this.response.status_code = 404
        return this.response
      }
    }

    this.response.body = this.getModulePage({
      module: moduleName,
      version: version
    })

    return this.response
  }
}

