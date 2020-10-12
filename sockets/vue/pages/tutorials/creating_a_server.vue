<script>
import H2Hash from "/common/vue/h2_hash.vue";
import Page from "/common/vue/page.vue";
import CodeBlock from "/common/vue/code_block.vue";

const title = "Creating A Server";

export const resource = {
  paths: [
    "/tutorials/creating-a-server",
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
  p In this tutorial, you will create a very basic server that can handle <code>ping</code>, <code>pong</code>, and <code>test</code> packets.
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
        | import { Server } from "https://deno.land/x/sockets@{{ $conf.sockets.latest_version }}/mod.ts";
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
  hr
  h2-hash Verification
  ol
    li
      p Run your server.
      code-block(title="Terminal" language="text")
        | deno run --allow-net app.ts
    li
      p Connect to your server.
      code-block(title="Terminal" language="text")
        | wscat -c ws://127.0.0.1:1777
    li
      p Send a <code>ping</code> packet.
      code-block(title="Terminal" language="text")
        | > ping
      p You should receive the following response:
      code-block(:header="false" language="text")
        | < pong
    li
      p Send a <code>pong</code> packet.
      code-block(title="Terminal" language="text")
        | > pong
      p You should receive the following response:
      code-block(:header="false" language="text")
        | < ping
    li
      p Send a <code>test</code> packet.
      code-block(title="Terminal" language="text")
        | > test
      p You should receive the following response:
      code-block(:header="false" language="text")
        | < Server started on 127.0.0.1:1777.
    li
      p Send an <code>id</code> packet.
      code-block(title="Terminal" language="text")
        | > id
      p You should receive a response similar to the following:
      code-block(:header="false" language="text")
        | < Client ID: 4
</template>

