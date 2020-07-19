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

    socketClient = new SocketClient({ hostname: 'localhost', port: 1777 });

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
        p Create your server and allow it to handle a single channel named Channel 1.
        code-block(title="app.ts" language="typescript")
          | import {
          |   IPacket,
          |   SocketServer,
          | } from "https://deno.land/x/sockets@v0.x/mod.ts";
          |
          | // Create the socket server
          | const socketServer = new SocketServer();
          | socketServer.run({
          |   hostname: "127.0.0.1",
          |   port: 1777,
          | });
          | console.log(
          |   `Socket server started on ws://${socketServer.hostname}:${socketServer.port}`,
          | );
          | 
          | // Create Channel 1 so that clients can send messages to it
          | socketServer.createChannel("Channel 1");
          | 
          | // Add a handler for messages sent to Channel 1
          | socketServer.on("Channel 1", (packet: IPacket) => {
          |   console.log(packet);
          |   // Do something with the packet (in this case, we're just confirming receipt and sending the message back)
          |   socketServer.to(
          |     packet.to, // => Channel 1
          |     `Message received from client #${packet.from}: ${packet.message}`,
          |   );
          | });
        li
          p Run your socket server.
          code-block(title="Terminal" language="text")
            | deno run --allow-net app.ts
        li
          p Install <code>wscat</code> or similar client to interact with your socket server.
          code-block(title="Terminal" language="text")
            | npm install -g wscat
        li
          p Connect to your socket server.
          code-block(title="Terminal" language="text")
            | wscat -c ws://127.0.0.1:1777
        li
          p Connect to Channel 1.
          code-block(title="Terminal" language="text")
            | > {"connect_to":["Channel 1"]}
            | < Connected to Channel 1.
        li
          p Send a message to Channel 1.
          code-block(title="Terminal" language="text")
            | > {"send_message":{"to":["Channel 1"],"message":"Hello World!"}}
            | < {"from":"Server","to":"Channel 1","message":"Message received from client #4: Hello World!"}
    hr
    h2-hash Importing
    code-block-import(name="Sockets" repo="sockets")
</template>
