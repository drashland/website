<script>
export const resource = {
  paths: ["/third-party-tutorials/deno-postgres"],
  meta: {
    title: "deno-postgres",
  }
}

export default {
  data() {
    return {
      title: resource.meta.title,
      toc: [
        "Before You Get Started",
        "Folder Structure End State",
        "Steps",
        "Verification",
      ]
    };
  },
}
</script>

<template lang="pug">
page(
  :base_url="this.$base_url"
  :title="title"
  :toc="toc"
)
  h2-hash Before You Get Started
  p In this tutorial, you will create a very basic server that connects to a database using <a href="https://github.com/buildondata/deno-postgres" target="_BLANK">deno-postgres</a>.
  p This tutorial will be written using the following database:
  p
    code-block(title="database: deno_postgres; table: users")
      | deno_postgres=# SELECT * FROM users;
      |  name        | role
      | -------------+--------
      |  bartlomieju | author
      | (1 row)
  hr
  folder-structure-end-state
    | ▾ /path/to/your/project/
    |   app.ts
    |   home_resource.ts
  hr
  h2-hash Steps
  ol
    li
      p Create your resource file. Your resource will use deno-postgres to make a query to the database&ndash;getting all user records from the database.
      code-block(title="/path/to/your/project/home_resource.ts" language="typescript")
        | import { Drash } from "https://deno.land/x/drash@v1.2.5/mod.ts";
        | import { denoPostgres } from "./app.ts";
        | 
        | export default class HomeResource extends Drash.Http.Resource {
        | 
        |   static paths = ["/"];
        | 
        |   public async GET() {
        |     await denoPostgres.connect();
        |     let result = await denoPostgres.query("SELECT * FROM users;");
        |     this.response.body = result.rows;
        |     await denoPostgres.end();
        |     return this.response;
        |   }
        | }
    li
      p Create your app file. Your resource file is expecting <code>denoPostgres</code>; therefore, your app file will need to <code>export</code> it.
      code-block(title="/path/to/your/project/app.ts" language="typescript")
        | import { Drash } from "https://deno.land/x/drash@v1.2.5/mod.ts";
        | 
        | // Set up the server
        | 
        | import HomeResource from "./home_resource.ts";
        | 
        | const server = new Drash.Http.Server({
        |   response_output: "application/json",
        |   resources: [HomeResource]
        | });
        | 
        | server.run({
        |   hostname: "localhost",
        |   port: 1447
        | });
        | 
        | // Set up the database
        | 
        | import { Client } from "https://deno.land/x/postgres/mod.ts";
        | 
        | const denoPostgres = new Client({
        |   database: "deno_postgres",
        |   host: "localhost",
        |   port: "5432",
        |   user: "user", // specify your db user
        | });
        | 
        | export {
        |   denoPostgres
        | }
  hr
  h2-hash Verification
  ol
    li
      P Run your app.
      code-block(title="Terminal" language="shell-session")
        | $ deno run --allow-net app.ts
    li
      P Make a request using <code>curl</code> like below or go to <code>localhost:1447/</code> in your browser.
      code-block(title="Terminal" language="shell-session")
        | $ curl localhost:1447/
      p You should receive the following response (we pretty-printed the response for you):
      code-block(:header="false" language="javascript")
        | [
        |   [
        |     "bartlomieju",
        |     "author"
        |   ]
        | ]
