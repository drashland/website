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
        "Example Usage",
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
  p The <code>info</code> command will fetch information on any module, be it 3rd party or Deno Standard.
  p This command requires the following permission:
  ul
    li <code>--allow-net</code>: dmm uses HTTP requests to fetch information on the given module(s).
  hr
  h2-hash Example Usage
  ul
    li
      p Get information on a <code>http</code> std module and denon 3rd part module.
      code-block(title="Terminal" language="shell-session")
        | $ dmm info http denon
      code-block(title="Terminal" language="shell-session")
        | INFO Information on http
        |
        |   - Name: http
        |   - Description: Cannot retrieve descriptions for std modules
        |   - deno.land Link: https://deno.land/std@0.76.0/http
        |   - GitHub Repository: https://github.com/denoland/deno/tree/master/std/http
        |   - Import Statement: import * as http from "https://deno.land/std@0.76.0/http";
        |   - Latest Version: 0.76.0
        |
        | INFO Information on denon
        |
        |   - Name: denon
        |   - Description: Get module info
        |   - deno.land Link: https://deno.land/x/denon@2.4.4
        |   - GitHub Repository: https://github.com/denosaurs/denon
        |   - Import Statement: import * as denon from "https://deno.land/x/denon@2.4.4";
        |   - Latest Version: 2.4.4
</template>

