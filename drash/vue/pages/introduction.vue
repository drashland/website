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
      example_code: this.$example_code['drash/example_code/getting_started/quickstart']
    };
  },
}
</script>

<template lang="pug">
div
  introduction-header(heading="Drash" description="Drash is a REST microframework for Deno's HTTP server with zero dependencies")
  div.flex.mb-5
    a(href="https://github.com/drashland/deno-drash/releases" target="_BLANK")
      img.mr-1(alt="Latest Drash Release" src="https://img.shields.io/github/release/drashland/deno-drash.svg?color=brightgreen&label=Latest" width="auto" height="20")
    a(href="https://github.com/drashland/deno-drash/actions" target="_BLANK")
      img.mr-1(alt="Drash CI" src="https://img.shields.io/github/workflow/status/drashland/deno-drash/master?label=CI" width="auto" height="20")
    a(href="https://discord.gg/SgejNXq" target="_BLANK")
      img.mr-1(alt="Drash Land Discord" src="https://img.shields.io/badge/Chat-on%20Discord-blue")
    a(href="https://twitter.com/drash_land" target="_BLANK")
      img.mr-1(alt="Drash Land Twitter" src="https://img.shields.io/twitter/url?label=%40drash_land&style=social&url=https%3A%2F%2Ftwitter.com%2Fdrash_land" width="auto" height="20")
    a(href="https://rb.gy/vxmeed" target="_BLANK")
      img(alt="Drash YouTube" src="https://img.shields.io/badge/Tutorials-YouTube-red" width="auto" height="20")
  div
    hr
    h2-hash Drash In A Nutshell
    p Drash is a REST microframework for <a href="https://deno.land" target="_BLANK">Deno</a>'s HTTP server with zero dependencies.
    p Drash is designed to help you build your projects quickly with the ability to scale. You can build an API, a web app, an SPA (like these documentation pages), or even a static HTML site. How you use Drash is up to you, so it can be everything you need and nothing you don't &mdash; like a DRASH tent.
    p Learn more about Drash 
      a-base-url(href="/about-drash") here
      | .
  div
    hr
    h2-hash Quickstart
    ol
      li
        p Write your <code>app.ts</code> file.
        code-block(title="app.ts" language="typescript")
          | {{ example_code.app.contents }}
      li
        p Run your <code>app.ts</code> file.
        code-block(title="Terminal" language="text")
          | deno run --allow-net app.ts

      li
        p Make a request.
        code-block(title="Terminal" language="text")
          | curl localhost:1447
          |
          | Hello World!
    hr
    h2-hash Importing
    code-block-import(name="Drash" repo="drash")
    hr
    h2-hash Features
    ul
      li
        p Zero Dependencies
      li
        p Extensively Documented
      li
        p Tutorials
      li
        p Lightweight
      li
        p Content Negotiation
      li
        p Routing
      li
        p Middleware
      li
        p Request Body Handling
</template>
