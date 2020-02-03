import Drash from "https://deno.land/x/drash/mod.ts";

// Set up the server

import HomeResource from "./home_resource.ts";

const server = new Drash.Http.Server({
  address: "localhost:1447",
  response_output: "application/json",
  resources: [HomeResource]
});

server.run();

// Set up the database

import { Client } from "https://deno.land/x/mysql/mod.ts";

const denoMysql = await new Client().connect({
  hostname: "127.0.0.1",
  username: "username", // specify your username
  db: "deno_mysql",
  // password: "password", // uncomment and specify your password if using a password
});

export {
  denoMysql
}
