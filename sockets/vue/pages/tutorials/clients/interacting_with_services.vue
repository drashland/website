<script>
import H2Hash from "/common/vue/h2_hash.vue";
import Page from "/common/vue/page.vue";
import CodeBlock from "/common/vue/code_block.vue";

const title = "Interacting With Servers";

export const resource = {
  paths: [
    "/tutorials/clients/interacting-with-servers",
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
        "Interacting With Servers Using The Browser Console",
        "Interacting With Servers Using wscat",
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
  h2-hash Interacting With Servers Using The Browser Console
  ol
    li
      p Create your server.
      code-block(title="/path/to/your/project/app.ts" language="typescript")
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
      p Run your server.
      code-block(title="Terminal")
        | deno run --allow-net app.ts
    li
      p Open up your browser and enter the following in the console to connect to your server.
      code-block(title="Browser Console" language="javascript")
        | // Create WebSocket connection
        | const socket = new WebSocket("ws://127.0.0.1:1777");
        |
        | // Log when connected to the socket server
        | socket.addEventListener("open", function (event) {
        |   console.log("Socket connected");
        | });
        |
        | // Listen for messages from the socket server
        | socket.addEventListener("message", function (event) {
        |   if (typeof event.data == "string") {
        |     console.log(event.data);
        |   } else {
        |     event.data.arrayBuffer().then((buffer) => {
        |       const decodedMessage = new TextDecoder().decode(buffer);
        |       const parsedMessage = JSON.parse(decodedMessage);
        |       console.log(parsedMessage);
        |     });
        |   }
        | });
    li
      p Send a <code>test</code> message.
      code-block(title="Browser Console" language="javascript")
        | socket.send("test");
      p You should receive the following response:
      code-block(:header="false")
        | Socket server is listening at 127.0.0.1:1777.
    li
      p Send a <code>ping</code> message.
      code-block(title="Browser Console" language="javascript")
        | socket.send("ping");
      p You should receive the following response:
      code-block(:header="false")
        | pong
    li
      p Connect to Channel 1 using the <code>connect_to</code> field.
      code-block(title="Browser Console" language="javascript")
        | socket.send(JSON.stringify({"connect_to":["Channel 1"]}));
      p You should receive the following response:
      code-block(:header="false")
        | Connected to Channel 1.
    li
      p Send a JSON string to Channel 1 using the <code>send_message</code> field.
      code-block(title="Browser Console" language="javascript")
        | socket.send(JSON.stringify({"send_message":{"to":["Channel 1"],"message":"Hello World!"}}));
      p You should receive a response similar to the following:
      code-block(:header="false")
        | {from: "Server", to: "Channel 1", message: "Message received from client #12: Hello World!"}
      p You should see something similar to the following in the terminal where you started your socket server:
      code-block(:header="false")
        | { callbacks: [ [Function] ], to: "Channel 1", message: "Hello World!", from: 6 }
    li
      p Disconnect from Channel 1 using the <code>disconnect_from</code> field.
      code-block(title="Browser Console" language="javascript")
        | socket.send(JSON.stringify({"disconnect_from":["Channel 1"]}));
      p You should receive a response similar to the following:
      code-block(:header="false")
        | Disconnected from Channel 1.
  hr
  h2-hash Interacting With Servers Using wscat
  ol
    li
      p Create your server.
      code-block(title="/path/to/your/project/app.ts" language="typescript")
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
      p Run your server.
      code-block(title="Terminal")
        | deno run --allow-net app.ts
    li
      p Connect to your socket server.
      code-block(title="Terminal" language="javascript")
        | wscat -c 127.0.0.1:1777
    li
      p Send a <code>test</code> message.
      code-block(title="Terminal" language="javascript")
        | > test
      p You should receive the following response:
      code-block(:header="false")
        | < Socket server is listening at 127.0.0.1:1777.
    li
      p Send a <code>ping</code> message.
      code-block(title="Terminal" language="javascript")
        | > ping
      p You should receive the following response:
      code-block(:header="false")
        | < pong
    li
      p Connect to Channel 1 using the <code>connect_to</code> field.
      code-block(title="Terminal" language="javascript")
        | > {"connect_to":["Channel 1"]}
      p You should receive the following response:
      code-block(:header="false")
        | < Connected to Channel 1.
    li
      p Send JSON to Channel 1 using the <code>send_message</code> field.
      code-block(title="Terminal" language="javascript")
        | > {"send_message":{"to":["Channel 1"],"message":"Hello World!"}}
      p You should receive a response similar to the following:
      code-block(:header="false")
        | < {from: "Server", to: "Channel 1", message: "Message received from client #12: Hello World!"}
      p You should see something similar to the following in the terminal where you started your socket server:
      code-block(:header="false")
        | { callbacks: [ [Function] ], to: "Channel 1", message: "Hello World!", from: 6 }
    li
      p Disconnect from Channel 1 using the <code>disconnect_from</code> field.
      code-block(title="Terminal" language="javascript")
        | > {"disconnect_from":["Channel 1"]}
      p You should receive a response similar to the following:
      code-block(:header="false")
        | < Disconnected from Channel 1.
</template>
