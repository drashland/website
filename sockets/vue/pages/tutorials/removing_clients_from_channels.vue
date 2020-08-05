<script>
import H2Hash from "/common/vue/h2_hash.vue";
import Page from "/common/vue/page.vue";
import CodeBlock from "/common/vue/code_block.vue";

const title = "Removing Clients From Channels";

export const resource = {
  paths: [
    "/tutorials/removing-clients-from-channels",
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
  p Removing clients from channels can be done using the following call:
  code-block(:header="false" language="typescript")
    | server.removeClientFromChannel("Channel Name", clientId);
  p In this tutorial, you will:
  ul
    li create a server;
    li open two channels;
    li open two client connections; and
    li have one client call the server to tell it to remove the other client from a channel.
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
        | import { Packet, Server } from "https://deno.land/x/sockets@{{ $conf.sockets.latest_sockets_version }}/mod.ts";
        |
        | // Create the server
        | const server = new Server();
        |
        | // Run the server
        | server.run({
        |   hostname: "127.0.0.1",
        |   port: 1777,
        | });
        |
        | console.log(
        |   `Server started on ws://${server.hostname}:${server.port}`,
        | );
        |
    li
      p Open two channels: Channel 1 and Actions (see the highlighted code). The Actions channel's handler (in the next step) will remove a client from Channel 1 based on the message it receives.
      code-block(title="/path/to/your/project/app.ts" language="typescript" line_highlight="16-21")
        | import { Packet, Server } from "https://deno.land/x/sockets@{{ $conf.sockets.latest_sockets_version }}/mod.ts";
        |
        | // Create the server
        | const server = new Server();
        |
        | // Run the server
        | server.run({
        |   hostname: "127.0.0.1",
        |   port: 1777,
        | });
        |
        | console.log(
        |   `Server started on ws://${server.hostname}:${server.port}`,
        | );
        |
        | // Open the Channel 1 channel so that it can be closed via the Actions channel
        | server.openChannel("Channel 1");
        |
        | // Open the Actions channel so that clients can send packets to it and take
        | // actions based on the message they send
        | server.openChannel("Actions");
    li
      p Add a packet handler to the Actions channel (see the highlighted code).
      code-block(title="/path/to/your/project/app.ts" language="typescript" line_highlight="21-40")
        | import { Packet, Server } from "https://deno.land/x/sockets@{{ $conf.sockets.latest_sockets_version }}/mod.ts";
        |
        | // Create the server
        | const server = new Server();
        | server.run({
        |   hostname: "127.0.0.1",
        |   port: 1777,
        | });
        |
        | console.log(
        |   `Server started on ws://${server.hostname}:${server.port}`,
        | );
        |
        | // Open the Channel 1 channel so that it can be closed via the Actions channel
        | server.openChannel("Channel 1");
        |
        | // Open the Actions channel so that clients can send packets to it and take
        | // actions based on the message they send
        | server.openChannel("Actions");
        |
        | // Add a handler for packets sent to the Actions channel. This handler will be
        | // executed every time a packet is sent to the Actions channel. In this
        | // handler, we are parsing the message and taking an action based on the
        | // specified message.
        | server.on("Actions", (packet: Packet) => {
        |   const message = packet.message as {[k: string]: string};
        |   if (message.action && message.channel) {
        |     try {
        |       if (message.action == "remove_client_from_channel") {
        |         server.removeClientFromChannel(message.channel, parseInt(message.client_id));
        |         server.to(
        |           "Actions",
        |           `Client #${message.client_id} was removed from the ${message.channel} channel.`
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
      p Run your server.
      code-block(title="Terminal" language="text")
        | deno run --allow-net app.ts
    li
      p Connect the first client to your server.
      code-block(title="Terminal" language="text")
        | wscat -c ws://127.0.0.1:1777
    li
      p Connect the second client to your server and get its ID.
      code-block(title="Terminal" language="text")
        | wscat -c ws://127.0.0.1:1777
        | > id
      p You should receive a response similar to the following:
      code-block(title="Terminal" language="text")
        | < Client ID: 5
    li
      p Using the second client, connect to Channel 1.
      code-block(title="Terminal" language="text")
        | > {"connect_to":["Channel 1"]}
      p You should receive the following response:
      code-block(title="Terminal" language="text")
        | < Connected to Channel 1.
    li
      p Using the first client, connect to the Actions channel.
      code-block(title="Terminal" language="text")
        | > {"connect_to":["Actions"]}
      p You should receive the following response:
      code-block(title="Terminal" language="text")
        | > Connected to Actions.
    li
      p Using the first client, send a packet to the Actions channel to remove the second client from Channel 1. Make sure you use the correct client ID!
      code-block(title="Terminal" language="text")
        | > {"send_packet":{"to":"Actions","message":{"action":"remove_client_from_channel","client_id":"5","channel":"Channel 1"}}}
      p You should receive a response similar to the following:
      code-block(:header="false" language="text")
        | < {"from":"Server","to":"Actions","message":"Client #5 was removed from the Channel 1 channel."}
    li
      p Using the second client, disconnect from Channel 1.
      code-block(title="Terminal" language="text")
        | > {"disconnect_from":["Channel 1"]}
      p If the second client was removed, you should receive the following response:
      code-block(:header="false" language="text")
        | < Not connected to Channel 1.
</template>

