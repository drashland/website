import { Drash } from "../deps.ts";
import config from "../conf/app.ts";

const consoleLogger = new Drash.CoreLoggers.ConsoleLogger(config.logger);

Drash.addMember("ConsoleLogger", consoleLogger);
