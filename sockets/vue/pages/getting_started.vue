<script>
import H2Hash from "/common/vue/h2_hash.vue";
import CodeBlock from "/common/vue/code_block.vue";
import CodeBlockImport from "/common/vue/code_block_import.vue";
import IntroductionHeader from "/common/vue/introduction_header.vue";

export const resource = {
  paths: ["/", "/introduction"],
  meta: {
    title: "Introduction",
  }
}

export default {
  components: {
    H2Hash,
    CodeBlock,
    CodeBlockImport,
    IntroductionHeader,
  },
  data() {
    return {
      set_up_front_end: `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8"/>
  <meta name="viewport" content="width=device-width, minimum-scale=1.0, user-scalable=no"/>
  <title>Sockets</title>
</head>
<body>
  <div id="messages"></div>
  <script>
    let socketClient = null;
  <\/script>
  <script type="module">
    import SocketClient from "https://cdn.jsdelivr.net/gh/drashland/sockets-client@latest/client.js";

    socketClient = new SocketClient({ hostname: 'localhost', port: 3000 });

    socketClient.on("Channel 1", (incomingMessage) => {
      console.log(
        "Message received from the server: " + JSON.stringify(incomingMessage),
      );
      const messages = document.getElementById("messages");
      const li = document.createElement("li");
      li.appendChild(document.createTextNode(incomingMessage.text));
      messages.appendChild(li);
    });
  <\/script>
</body>
</html>`
    };
  }
}
</script>

<template lang="pug">
div
  introduction-header(heading="Sockets" description="Sockets is a WebSocket library for Deno")
  div.flex.mb-5
    a(href="https://github.com/drashland/sockets/releases" target="_BLANK")
      img.mr-1(alt="Latest Sockets Release" src="https://img.shields.io/github/release/drashland/sockets.svg?color=brightgreen&label=Latest" width="auto" height="20")
    a(href="https://github.com/drashland/sockets/actions" target="_BLANK")
      img.mr-1(alt="Sockets CI" src="https://img.shields.io/github/workflow/status/drashland/sockets/master?label=CI" width="auto" height="20")
    a(href="https://discord.gg/SgejNXq" target="_BLANK")
      img.mr-1(alt="Drash Land Discord" src="https://img.shields.io/badge/Chat-on%20Discord-blue")
    a(href="https://twitter.com/drash_land" target="_BLANK")
      img.mr-1(alt="Drash Land Twitter" src="https://img.shields.io/twitter/url?label=%40drash_land&style=social&url=https%3A%2F%2Ftwitter.com%2Fdrash_land" width="auto" height="20")
    //a(href="https://rb.gy/vxmeed" target="_BLANK")
      img(alt="Sockets YouTube" src="https://img.shields.io/badge/Tutorials-YouTube-red" width="auto" height="20")
  div
    hr
    h2-hash Quickstart
    ol
      li
        p Set up your server to handle a single channel named Channel 1.
        code-block(title="app.ts" language="typescript")
          | import {
          |   IPacket,
          |   SocketServer,
          | } from "https://deno.land/x/sockets@master/mod.ts";
          |
          | // Create the socket server
          | const socketServer = new SocketServer();
          | socketServer.run({
          |   hostname: "localhost",
          |   port: 3000,
          | });
          | console.log(
          |   `Socket server started on ws://${socketServer.hostname}:${socketServer.port}`,
          | );
          |
          | // Create "Channel 1" so that clients can send messages to it
          | socketServer
          |   .createChannel("Channel 1")
          |   .onMessage((packet: IPacket) => {
          |     console.log(packet);
          |     console.log("Sending a message back to the client.");
          |     // Send messages to all clients listening to "Channel 1"
          |     socketServer.to(
          |       "Channel 1",
          |       `Message received! You sent "${packet.message}" as the message.`,
          |     );
          |   });
      li
        p Set up your <code>index.html</code> file and have it listen for messages sent from the server to the Channel 1 channel.
        code-block(title="index.html" language="html")
          | {{ set_up_front_end }}
      li
        p Start your server.
        code-block(title="Terminal" language="text")
          | deno run --allow-net app.ts
      li
        p Open up your <code>index.html</code> file in your browser, open your browser's console, and enter the following. The following will send a message to the socket server and the socket server will respond back with what you sent as the message.
        code-block(title="Browser Console" language="javascript")
          | socketClient.to("Channel 1", "Hello");
      li
        p Go back to the terminal where you started your server. You should see something similar to the following:
        code-block(title="Terminal" language="javascript")
          | {
          |   callbacks: [ [Function] ],
          |   name: "Channel 1",
          |   listeners: Map {
          |     4 => WebSocketImpl {
          |         sendQueue: [Array],
          |         _isClosed: false,
          |         conn: [Object],
          |         mask: undefined,
          |         bufReader: [Object],
          |         bufWriter: [Object]
          |       }
          |   },
          |   channelName: "Channel 1",
          |   message: "test",
          |   from: 4
          | }
    hr
    h2-hash Importing
    code-block-import(name="Sockets" repo="sockets")
</template>
