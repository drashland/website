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
        p Set up your back-end.
        code-block(title="test.ts" language="typescript")
          | import { Sockets } from "https://deno.land/x/sockets@v1.x/mod.ts";
      li
        p Set up your front-end.
        code-block(title="Terminal" language="text")
          | deno test --allow-env
    hr
    h2-hash Importing
    code-block-import(name="Sockets" repo="sockets")
    hr
    h2-hash Features
    ul
      li
        p Descriptive naming for your tests
      li
        p Lightweight
      li
        p Zero dependencies
      li
        p Simple and easy to use
      li
        p Asynchronous support
      li
        p Still uses <code>Deno.test</code> under the hood
      li
        p Skip functionality
      li
        p Mock requests
      li
        p Hooks
</template>
