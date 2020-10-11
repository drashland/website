<script>
import H2Hash from "/common/vue/h2_hash.vue";
import Page from "/common/vue/page.vue";
import CodeBlock from "/common/vue/code_block.vue";

const title = "info";

export const resource = {
  paths: [
    "/cli_commands/info",
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
      base_url: this.$conf.dmm.base_url + "/#",
      title: title,
      toc: [
        "Description",
        "Examples",
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
  h2-hash Description
  p The <code>info</code> command will grab information on any module, be it 3rd party or <code>std</code>.
  p This command requires the following permission:
  ul
    li <code>--allow-net</code>: dmm uses HTTP requests to fetch information on the given module.
  hr
  h2-hash Examples
  ul
    li
      p Get information on a <code>http</code> std module.
      code-block(title="Terminal" language="text")
        | $ dmm info http
        |
        | Information on http
        |
        |   - Name: http
        |   - Description: Cannot retrieve descriptions for std modules
        |   - deno.land Link: https://deno.land/std@{latest std version}/http
        |   - GitHub Repository: https://github.com/denoland/deno/tree/master/std/http
        |   - Import Statement: import * as http from "https://deno.land/std@{latest std version}/http";
        |   - Latest Version: {latest std version}
    li
      p Get information on a <code>denon</code> 3rd party module.
      code-block(title="Terminal" language="text")
        | $ dmm info denon
        |
        | Information on denon
        |
        |   - Name: denon
        |   - Description: denon is the deno replacement for nodemon providing a feature packed and easy to use experience.
        |   - deno.land Link: https://deno.land/x/denon@v2.2.1
        |   - GitHub Repository: https://github.com/denosaurs/denon
        |   - Import Statement: import * as denon from "https://deno.land/x/denon@v2.2.1";
        |   - Latest Version: v2.2.1
</template>

