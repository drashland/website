import { Drash } from "https://deno.land/x/drash@v1.2.5/mod.ts";

// Set up the server

import HomeResource from "./home_resource.ts";

const server = new Drash.Http.Server({
  response_output: "application/json",
  resources: [HomeResource]
});

server.run({
  hostname: "localhost",
  port: 1447
});

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
