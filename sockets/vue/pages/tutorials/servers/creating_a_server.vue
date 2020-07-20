<script>
import H2Hash from "/common/vue/h2_hash.vue";
import Page from "/common/vue/page.vue";
import CodeBlock from "/common/vue/code_block.vue";

const title = "Creating A Server";

export const resource = {
  paths: [
    "/tutorials/servers/creating-a-server",
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
  p In this tutorial, you will create a very basic server that can handle <code>ping</code>, <code>pong</code>, and <code>test</code> messages.
  p In the verification section, you will need to install and use <code>wscat</code> globally to interact with the socket server. <code>wscat</code> is an npm package.
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
        | import {
        |   IPacket,
        |   SocketServer,
        | } from "https://deno.land/x/sockets@v0.x/mod.ts";
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
  hr
  h2-hash Verification
  ol
    li
      p Run your socket server.
      code-block(title="Terminal" language="text")
        | deno run --allow-net app.ts
    li
      p Install <code>wscat</code> globally. This assumes you have Node and npm installed on your machine.
      code-block(title="Terminal" language="text")
        | npm install -g wscat
    li
      p Connect to your socket server using <code>wscat</code>.
      code-block(title="Terminal" language="text")
        | wscat -c ws://127.0.0.1:1777
    li
      p Send a <code>ping</code> message.
      code-block(title="Terminal" language="text")
        | > ping
      p You should receive the following response:
      code-block(:header="false" language="text")
        | < pong
    li
      p Send a <code>pong</code> message.
      code-block(title="Terminal" language="text")
        | > pong
      p You should receive the following response:
      code-block(:header="false" language="text")
        | < ping
    li
      p Send a <code>test</code> message.
      code-block(title="Terminal" language="text")
        | > test
      p You should receive the following response:
      code-block(:header="false" language="text")
        | < Socket server is listening at 127.0.0.1:1777.
</template>

