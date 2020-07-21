<script>
import H2Hash from "/common/vue/h2_hash.vue";
import Page from "/common/vue/page.vue";
import CodeBlock from "/common/vue/code_block.vue";

const title = "Opening Channels";

export const resource = {
  paths: [
    "/tutorials/servers/opening-channels",
  ],
  meta: {
    title: title
  }
}

export default {
  components: {
    CodeBlock,
    H2Hash,
    Page,
  },
  data() {
    return {
      base_url: this.$conf.sockets.base_url + "/#",
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
  p In this tutorial, you will create a very basic server that can handle a single channel.
  p Opening channels can be done using the following call:
  code-block(:header="false" language="typescript")
    | socketServer.openChannel("Channel Name");
  hr
  h2-hash Folder Structure End State
  code-block(:header="false" language="text" :line_numbers="false")
    | ▾ /path/to/your/project/
    |     app.ts
  hr
  h2-hash Steps
  ol
    li
      p Create your server.
      code-block(title="/path/to/your/project/app.ts" language="typescript")
        | import { IPacket, SocketServer } from "https://deno.land/x/sockets@v0.x/mod.ts";
        |
        | // Create the socket server
        | const socketServer = new SocketServer();
        |
        | // Run the socket server
        | socketServer.run({
        |   hostname: "127.0.0.1",
        |   port: 1777,
        | });
        |
        | console.log(
        |   `Socket server started on ws://${socketServer.hostname}:${socketServer.port}`,
        | );
        |
    li
      p Open the Channel 1 channel (see the highlighted code).
      code-block(title="/path/to/your/project/app.ts" language="typescript" line_highlight="16-17")
        | import { IPacket, SocketServer } from "https://deno.land/x/sockets@v0.x/mod.ts";
        |
        | // Create the socket server
        | const socketServer = new SocketServer();
        |
        | // Run the socket server
        | socketServer.run({
        |   hostname: "127.0.0.1",
        |   port: 1777,
        | });
        |
        | console.log(
        |   `Socket server started on ws://${socketServer.hostname}:${socketServer.port}`,
        | );
        |
        | // Open Channel 1 so that clients can send messages to it
        | socketServer.openChannel("Channel 1");
    li
      p Add a message handler to Channel 1 (see the highlighted code).
      code-block(title="/path/to/your/project/app.ts" language="typescript" line_highlight="19-31")
        | import { IPacket, SocketServer } from "https://deno.land/x/sockets@v0.x/mod.ts";
        |
        | // Create the socket server
        | const socketServer = new SocketServer();
        |
        | // Run the socket server
        | socketServer.run({
        |   hostname: "127.0.0.1",
        |   port: 1777,
        | });
        |
        | console.log(
        |   `Socket server started on ws://${socketServer.hostname}:${socketServer.port}`,
        | );
        |
        | // Open Channel 1 so that clients can send messages to it
        | socketServer.openChannel("Channel 1");
        |
        | // Add a handler for messages sent to Channel 1. This handler will be executed
        | // every time a message is sent to Channel 1. In this handler, we are just
        | // confirming receipt of the message and sending the message to Channel 1. Any
        | // client connected to Channel 1 will receive the message. In this tutorial,
        | // your client will be connected to Channel 1 and will receive the message
        | // below.
        | socketServer.on("Channel 1", (packet: IPacket) => {
        |   console.log(packet);
        |   socketServer.to(
        |     "Channel 1",
        |     `Message received from client #${packet.from}: ${packet.message}`,
        |   );
        | });
  hr
  h2-hash Verification
  ol
    li
      p Run your socket server.
      code-block(title="Terminal" language="text")
        | deno run --allow-net app.ts
    li
      p Connect to your socket server.
      code-block(title="Terminal" language="text")
        | wscat -c ws://127.0.0.1:1777
    li
      p Connect to Channel 1.
      code-block(title="Terminal" language="text")
        | > {"connect_to":["Channel 1"]}
      p You should receive the following response:
      code-block(:header="false" language="text")
        | < Connected to Channel 1.
    li
      p Send a message to Channel 1.
      code-block(title="Terminal" language="text")
        | > {"send_message":{"to":"Channel 1","message":"Hello World!."}}
      p You should receive a response similar to the following:
      code-block(:header="false" language="text")
        | < {"from":"Server","to":"Channel 1","message":"Message received from client #4: Hello World!."}
</template>

