import Drash from "../deno-drash/mod.ts";
import * as ResponseService from "../src/response_service.ts";
import config from "./conf/app.ts";

ResponseService.compile(
  `${config.server.directory}/index.ejs`,
  `${config.server.directory}/index.html`
);
