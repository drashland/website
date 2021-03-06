<script>
import H2Hash from "/assets/common/vue/h2_hash.vue";
import CodeBlock from "/assets/common/vue/code_block.vue";
import CodeBlockImport from "/assets/common/vue/code_block_import.vue";
import IntroductionHeader from "/assets/common/vue/introduction_header.vue";

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
  introduction-header(heading="Sinco" description="TODO")
  div.flex.mb-5
    a(href="https://github.com/drashland/line/releases" target="_BLANK")
      img.mr-1(alt="Latest Line Release" src="https://img.shields.io/github/release/drashland/line.svg?color=brightgreen&label=Latest" width="auto" height="20")
    a(href="https://github.com/drashland/line/actions" target="_BLANK")
      img.mr-1(alt="Line CI" src="https://img.shields.io/github/workflow/status/drashland/line/master?label=CI" width="auto" height="20")
    a(href="https://discord.gg/SgejNXq" target="_BLANK")
      img.mr-1(alt="Drash Land Discord" src="https://img.shields.io/badge/Chat-on%20Discord-blue")
    a(href="https://twitter.com/drash_land" target="_BLANK")
      img.mr-1(alt="Drash Land Twitter" src="https://img.shields.io/twitter/url?label=%40drash_land&style=social&url=https%3A%2F%2Ftwitter.com%2Fdrash_land" width="auto" height="20")
    //a(href="https://rb.gy/vxmeed" target="_BLANK")
      img(alt="Line YouTube" src="https://img.shields.io/badge/Tutorials-YouTube-red" width="auto" height="20")
  div
    hr
    h2-hash Quickstart
    ol
      li
        p TODO 
        code-block(title="test.ts" language="typescript")
          | TODO
    hr
    h2-hash Importing
    code-block-import(name="Line" repo="line" :version="$conf.line.latest_version")
    hr
    h2-hash Features
    ul
      li
        p Zero 3rd party dependencies
      li
        p TODO
</template>
