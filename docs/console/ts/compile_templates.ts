import { Drash } from "../../deps.ts";
import config from "../../conf/app.ts";
import * as ResponseService from "../../src/response_service.ts";

ResponseService.compile(
  `${config.server.directory}/index.template.html`,
  `${config.server.directory}/index.html`
);
