import { BaseResource } from "./base_resource.ts";

export class ModuleResource extends BaseResource {

  static paths = [
    "/:module/:version?",
  ]

  //////////////////////////////////////////////////////////////////////////////
  // FILE MARKER - METHODS - HTTP //////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////

  public GET() {
    const moduleName = this.request.getPathParam("module") as string;
    const version = this.request.getPathParam("version") as string;

    this.log(`Requested docs for "${moduleName}" module.`);

    if (this.recognized_modules.indexOf(moduleName) == -1) {
      this.log(`Module "${moduleName}" unknown.`);
      return this.sendError(404);
    }

    if (version) {
      return this.sendVersionedDocsPage(moduleName, version);
    }

    return this.sendDocsPage(moduleName);
  }
}

