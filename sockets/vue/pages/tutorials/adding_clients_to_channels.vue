<script>
import H2Hash from "/common/vue/h2_hash.vue";
import Page from "/common/vue/page.vue";
import CodeBlock from "/common/vue/code_block.vue";

const title = "Add Clients To Channels";

export const resource = {
  paths: [
    "/tutorials/adding-clients-to-channels",
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
  p Adding clients to channels can be done using the following call:
  code-block(:header="false" language="typescript")
    | socketServer.addClientToChannel("Channel Name", clientId);
  p In this tutorial, you will:
  ul
    li create a socket server;
    li open two channels;
    li open two client connections; and
    li have one client call the socket server to tell it to add the other client to a channel.
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
      p Open two channels: Channel 1 and Actions (see the highlighted code). The Actions channel's handler (in the next step) will add a client to Channel 1 based on the message it receives.
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
      code-block(title="/path/to/your/project/app.ts" language="typescript" line_highlight="21-40")
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
        |       if (message.action == "add_client_to_channel") {
        |         socketServer.addClientToChannel(message.channel, parseInt(message.client_id));
        |         socketServer.to(
        |           "Actions",
        |           `Client #${message.client_id} was added to the ${message.channel} channel.`
        |         );
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
      p Connect the first client to your socket server.
      code-block(title="Terminal" language="text")
        | wscat -c ws://127.0.0.1:1777
    li
      p Connect the second client to your socket server and get its ID.
      code-block(title="Terminal" language="text")
        | wscat -c ws://127.0.0.1:1777
        | > id
      p You should receive a response similar to the following:
      code-block(title="Terminal" language="text")
        | < Client ID: 5
    li
      p Using the first client, connect to the Actions channel.
      code-block(title="Terminal" language="text")
        | > {"connect_to":["Actions"]}
      p You should receive the following response:
      code-block(title="Terminal" language="text")
        | > Connected to Actions.
    li
      p Using the first client, send a message to the Actions channel to add the second client to Channel 1. Make sure you use the correct client ID!
      code-block(title="Terminal" language="text")
        | > {"send_message":{"to":"Actions","message":{"action":"add_client_to_channel","client_id":"5","channel":"Channel 1"}}}
      p You should receive a response similar to the following:
      code-block(:header="false" language="text")
        | < {"from":"Server","to":"Actions","message":"Client #5 was added to the Channel 1 channel."}
    li
      p Using the second client, disconnect from Channel 1.
      code-block(title="Terminal" language="text")
        | > {"disconnect_from":["Channel 1"]}
      p If the second client was connected, you should receive the following response:
      code-block(:header="false" language="text")
        | < Disconnected from Channel 1.
</template>

