import Drash from "../deps.ts";
import config from "../conf/app.ts";

const consoleLogger = new Drash.Loggers.ConsoleLogger(config.logger);

Drash.addMember("ConsoleLogger", consoleLogger);
