<script>
import H2Hash from "/common/vue/h2_hash.vue";
import Page from "/common/vue/page.vue";
import CodeBlock from "/common/vue/code_block.vue";

const title = "Closing Channels";

export const resource = {
  paths: [
    "/tutorials/closing-channels",
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
  p Closing channels can be done using the following call:
  code-block(:header="false" language="typescript")
    | socketServer.closeChannel("Channel Name");
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
      p Open two channels: Channel 1 and Actions (see the highlighted code). The Actions channel's handler (in the next step) will close Channel 1 based on the message it receives.
      code-block(title="/path/to/your/project/app.ts" language="typescript" line_highlight="16-21")
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
        | // Open the Channel 1 channel so that it can be closed via the Actions channel
        | socketServer.openChannel("Channel 1");
        |
        | // Open the Actions channel so that clients can send messages to it and take
        | // actions based on the message they send
        | socketServer.openChannel("Actions");
    li
      p Add a message handler to the Actions channel (see the highlighted code).
      code-block(title="/path/to/your/project/app.ts" language="typescript" line_highlight="21-37")
        | import { IPacket, SocketServer } from "https://deno.land/x/sockets@v0.x/mod.ts";
        |
        | // Create the socket server
        | const socketServer = new SocketServer();
        | socketServer.run({
        |   hostname: "127.0.0.1",
        |   port: 1777,
        | });
        |
        | console.log(
        |   `Socket server started on ws://${socketServer.hostname}:${socketServer.port}`,
        | );
        |
        | // Open the Channel 1 channel so that it can be closed via the Actions channel
        | socketServer.openChannel("Channel 1");
        |
        | // Open the Actions channel so that clients can send messages to it and take
        | // actions based on the message they send
        | socketServer.openChannel("Actions");
        |
        | // Add a handler for messages sent to the Actions channel. This handler will be
        | // executed every time a message is sent to the Actions channel. In this
        | // handler, we are parsing the message and taking an action based on the
        | // specified message.
        | socketServer.on("Actions", (packet: IPacket) => {
        |   const message = packet.message as {[k: string]: string};
        |   if (message.action && message.channel) {
        |     try {
        |       if (message.action == "close_channel") {
        |         socketServer.closeChannel(message.channel);
        |         socketServer.to("Actions", `${message.channel} closed.`);
        |       }
        |     } catch (error) {
        |       console.log(error);
        |     }
        |   }
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
        | > {"connect_to":["Actions", "Channel 1"]}
      p You should receive the following response:
      code-block(:header="false" language="text")
        | < Connected to Actions.
        | < Connected to Channel 1.
    li
      p Send a message to the Actions channel to close Channel 1.
      code-block(title="Terminal" language="text")
        | > {"send_message":{"to":"Actions","message":{"action":"close_channel","channel":"Channel 1"}}}
      p You should receive a response similar to the following:
      code-block(:header="false" language="text")
        | < {"from":"Server","to":"Actions","message":"Channel 1 closed."}
    li
      p Try disconnecting from Channel 1. The channel should not be found since it was closed.
      code-block(title="Terminal" language="text")
        | > {"disconnect_from":["Channel 1"]}
      p You should receive the following response:
      code-block(:header="false" language="text")
        | < Channel "Channel 1" not found.
</template>

