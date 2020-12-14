<script>

const title = "Reservd Event Names";

export const resource = {
  paths: [
    "/tutorials/reserved-event-names",
  ],
  meta: {
    title: title
  }
}

export default {
  data() {
    return {
      base_url: this.$conf.wocket.base_url + "/#",
      title: title,
      toc: [
        "Before You Get Started",
        "Folder Structure End State",
        "Steps",
        "Verification",
      ],
    };
  }
}
</script>

<template lang="pug">
page(
  :base_url="base_url"
  :title="title"
  :toc="toc"
)
  h2-hash Before You Get Started
  p The following list of reserved event names are:
  ul
    li <code>connect</code>
    li <code>disconnect</code>
    li <code>error</code>
    li <code>listening_to</code>
    li <code>pong</code>
    li <code>reconnect</code>
  p These events can be listened on by doing the following:
  code-block(:header="false" language="typescript")
    | server.on("<NAME>", (packet: Packet) => { ... })
  p In this tutorial, you will:
  ul
    li create a server;
    li Listen on all event names
  hr
  folder-structure-end-state
    code-block(:header="false" language="text" :line_numbers="false")
      | ▾ /path/to/your/project/
      |     app.ts
  hr
  h2-hash Steps
  ol
    li
      p Create your server.
      code-block(title="/path/to/your/project/app.ts" language="typescript")
        | import { Packet, Server } from "https://deno.land/x/wocket@{{ $conf.wocket.latest_version }}/mod.ts";
        |
        | // Create the server
        | const server = new Server();
        |
        | // Run the server
        | await server.run({
        |   hostname: "127.0.0.1",
        |   port: 1777,
        | });
        |
        | console.log(
        |   `Server started on ws://${server.hostname}:${server.port}`,
        | );
        |
    li
      p Create your listeners for the reserved event names.
      code-block(title="/path/to/your/project/app.ts" language="typescript" line_highlight="21-40")
        | import { Packet, Server } from "https://deno.land/x/wocket@{{ $conf.wocket.latest_version }}/mod.ts";
        | TODO HIGHLIGHT THE SPECIFIC LINES THAT WERE ADDED
        | // Create the server
        | const server = new Server();
        |
        | // Run the server
        | await server.run({
        |   hostname: "127.0.0.1",
        |   port: 1777,
        | });
        |
        | console.log(
        |   `Server started on ws://${server.hostname}:${server.port}`,
        | );
        |
        | server.on("connect", (packet: Packet) => {
        |   console.log("A client connected");
        | });
        | server.on("disconnect", (packet: Packet) => {
        |   console.log("A client disconnected");
        | });
        | server.on("listening_to", (packet: Packet) => {
        |   console.log("A client is listening to a new channel");
        | });
        | server.on("error", (packet: Packet) => {
        |   console.log("The server encountered an error :(");
        | });
        | server.on("pong", (packet: Packet) => {
        |   console.log("Pong received");
        | });
        | server.on("reconnect", (packet: Packet) => {
        |   console.log("Server reconnected");
        | });
    li
      p Create 'triggers', to trigger those events
      code-block(title="/path/to/your/project/app.ts" language="typescript" line_highlight="21-40")
        | import { Packet, Server } from "https://deno.land/x/wocket@{{ $conf.wocket.latest_version }}/mod.ts";
        | TODO HIGHLIGHT THE SPECIFIC LINES THAT WERE ADDED
        | // Create the server
        | const server = new Server();
        |
        | // Run the server
        | await server.run({
        |   hostname: "127.0.0.1",
        |   port: 1777,
        | });
        |
        | console.log(
        |   `Server started on ws://${server.hostname}:${server.port}`,
        | );
        |
        | server.on("connect", (packet: Packet) => {
        |   console.log("A client connected");
        | });
        | server.on("disconnect", (packet: Packet) => {
        |   console.log("A client disconnected");
        | });
        | server.on("listening_to", (packet: Packet) => {
        |   console.log("A client is listening to a new channel");
        | });
        | server.on("error", (packet: Packet) => {
        |   console.log("We encountered an error :(");
        | });
        | server.on("pong", (packet: Packet) => {
        |   console.log("Pong received");
        | });
        | server.on("reconnect", (packet: Packet) => {
        |   console.log("Server reconnected");
        | });
        | server.on("dummy channel", (packet: Packet) => {}) // To trigger the `listening_to` event
        |
        | const client = new WebSocket(`ws://${server.hostname}:${server.port}`);
        | client.onopen = function () {
        |   client.send(JSON.stringify({
        |     connect_to: ["dummy channel"]
        |   })
        | }
        | client.onmessage = function (evt) {
        |   if (evt.data === "Connected to dummy channel") {
        |     client.close()
        |   }
        | }
  hr
  h2-hash Verification
  ol
    li
      p Run your server.
      code-block(title="Terminal" language="shell-session")
        | $ deno run --allow-net app.ts
    li
      p The output in your shell should look like this:
      code-block(title="Terminal" language="shell-session")
        | A client connected
        | The client is listening to: dummy channel
        | The client disconnected
        | The server encountered an error :(
        | Server reconnected
        | Pong received
</template>

