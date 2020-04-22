import { Drash } from "https://deno.land/x/drash/mod.ts";

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

import { Client } from "https://deno.land/x/postgres/mod.ts";

const denoPostgres = new Client({
  database: "deno_postgres",
  host: "localhost",
  port: "5432",
  user: "user", // specify your db user
});

export {
  denoPostgres
}
