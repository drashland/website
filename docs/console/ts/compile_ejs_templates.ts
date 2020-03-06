import { Drash } from "../../deps.ts";
import config from "../../conf/app.ts";
import * as ResponseService from "../../src/response_service.ts";

ResponseService.compile(
  `${config.server.directory}/src/templates/html/index.html`,
  `${config.server.directory}/index.html`
);
