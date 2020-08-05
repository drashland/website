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
          | import { Server } from "https://deno.land/x/sockets@{{ $conf.sockets.latest_sockets_version }}/mod.ts";
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
      li
        p Run your server.
        code-block(title="Terminal" language="text")
          | deno run --allow-net app.ts
          |
          | Server started on ws://127.0.0.1:1777
      li
        p Install <code>wscat</code> or similar client to interact with your server.
        code-block(title="Terminal" language="text")
          | npm install -g wscat
      li
        p Connect to your server.
        code-block(title="Terminal" language="text")
          | wscat -c ws://127.0.0.1:1777
      li
        p Ping your server.
        code-block(title="Terminal" language="text")
          | > ping
          |
          | < pong
    hr
    h2-hash Importing
    code-block-import(name="Server" repo="sockets" :version="$conf.sockets.latest_sockets_version")
</template>
