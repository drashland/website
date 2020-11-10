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
  introduction-header(heading="Sinco" description="Sinco is a browser testing and automation tool for Deno")
  div.flex.mb-5
    a(href="https://github.com/drashland/cino/releases" target="_BLANK")
      img.mr-1(alt="Latest Sinco Release" src="https://img.shields.io/github/release/drashland/sinco.svg?color=brightgreen&label=Latest" width="auto" height="20")
    a(href="https://github.com/drashland/sinco/actions" target="_BLANK")
      img.mr-1(alt="Sinco CI" src="https://img.shields.io/github/workflow/status/drashland/sinco/master?label=CI" width="auto" height="20")
    a(href="https://discord.gg/SgejNXq" target="_BLANK")
      img.mr-1(alt="Drash Land Discord" src="https://img.shields.io/badge/Chat-on%20Discord-blue")
    a(href="https://twitter.com/drash_land" target="_BLANK")
      img.mr-1(alt="Drash Land Twitter" src="https://img.shields.io/twitter/url?label=%40drash_land&style=social&url=https%3A%2F%2Ftwitter.com%2Fdrash_land" width="auto" height="20")
    //a(href="https://rb.gy/vxmeed" target="_BLANK")
      img(alt="Sinco YouTube" src="https://img.shields.io/badge/Tutorials-YouTube-red" width="auto" height="20")
  div
    hr
    h2-hash Quickstart
    ol
      li
        p Create a test file and start interacting with the browser
        code-block(title="test.ts" language="typescript")
          | import { HeadlessBrowser } from "https://deno.land/x/sinco@{{ $conf.sinco.latest_version }}/mod.ts";
          |
          | Deno.test("My test", async () => {
          |   // Setup
          |   const sinco = new Headlessbrowser();
          |   await sinco.build("https://chromestatus.com");
          |
          |   // Do any actions and assertions, in any order
          |   await sinco.assertUrlIs("https://chromestatus.com/features")
          |   await sinco.type('input[placeholder="Filter"]', "Hello");
          |   await sinco.assertUrlIs("https://chromestatus.com/features#hello")
          |   await sinco.click('a[href="/features/schedule"]')
          |   await sinco.assertUrlIs("https://chromestatus.com/features/schedule")
          |   await sinco.assertSee("Release timeline")
          |
          |   // Once finished, close
          |   await sinco.done()
          | })
      li
        p Run your test.
        code-block(title="Terminal" language="shell-session")
          | $ deno test --allow-net --allow-run test.ts
    hr
    h2-hash Importing
    code-block-import(name="Sinco" repo="sinco" :version="$conf.sinco.latest_version")
    hr
    h2-hash Features
    ul
      li
        p Click elements
      li
        p Type into input fields
      li
        p Get input field values
      li
        p Wait for AJAX requests to finish
      li
        p Assertions
        ul
          li Assert URL is
          li Assert see
</template>
