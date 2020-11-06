<script>
export const resource = {
  paths: ["/third-party-tutorials/deno-mysql"],
  meta: {
    title: "deno_mysql",
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
  p In this tutorial, you will create a very basic server that connects to a database using <a href="https://github.com/manyuanrong/deno_mysql" target="_BLANK">deno_mysql</a>.
  p This tutorial will be written using the following database:
  p
    code-block(title="database: deno_mysql; table: users")
      | mysql> select * from users;
      | +-------------+--------+
      | | name        | role   |
      | +-------------+--------+
      | | manyuanrong | author |
      | +-------------+--------+
      | 1 row in set (0.00 sec)
  hr
  folder-structure-end-state
    | ▾ /path/to/your/project/
    |   app.ts
    |   home_resource.ts

  hr
  h2-hash Steps
  ol
    li
      p Create your resource file. Your resource will use deno_mysql to make a query to the database&ndash;getting all user records from the database.
      code-block(title="/path/to/your/project/home_resource.ts" language="typescript")
        | import { Drash } from "https://deno.land/x/drash@{{ $conf.drash.latest_version }}/mod.ts";
        | import { denoMysql } from "./app.ts";
        | 
        | export default class HomeResource extends Drash.Http.Resource {
        | 
        |   static paths = ["/"];
        | 
        |   public async GET() {
        |     this.response.body = await denoMysql.query(`select * from users`);
        |     return this.response;
        |   }
        | }
    li 
      p Create your app file. Your resource file is expecting <code>denoMysql</code>; therefore, your app file will need to <code>export</code> it.
      code-block(title="/path/to/your/project/app.ts" language="typescript")
        | import { Drash } from "https://deno.land/x/drash@{{ $conf.drash.latest_version }}/mod.ts";
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
        | import { Client } from "https://deno.land/x/mysql/mod.ts";
        | 
        | const denoMysql = await new Client().connect({
        |   hostname: "127.0.0.1",
        |   username: "username", // specify your username
        |   db: "deno_mysql",
        |   // password: "password", // uncomment and specify your password if using a password
        | });
        | 
        | export {
        |   denoMysql
        | }
  hr
  h2-hash Verification
  ol
    li
      p Run your app.
      code-block(title="Terminal" language="shell-session")
        | $ deno run --allow-net --allow-write app.ts
    li
      p Make a request using <code>curl</code> like below or go to <code>localhost:1447/</code> in your browser.
      code-block(title="Terminal" language="shell-session")
        | $ curl localhost:1447/
      p You should receive the following response (we pretty-printed the response for you):
      code-block(:header="false" language="json")
        | [
        |   {
        |     "name": "manyuanrong",
        |     "role": "author"
        |   }
        | ]
