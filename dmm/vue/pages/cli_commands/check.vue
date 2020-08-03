<script>
  import H2Hash from "/common/vue/h2_hash.vue";
  import Page from "/common/vue/page.vue";
  import CodeBlock from "/common/vue/code_block.vue";

  const title = "check";

  export const resource = {
    paths: [
      "/cli_commands/check",
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
  p The <code>check</code> command will check if
  ul
    li all of your dependencies can be updated; and
    li shows what dependencies are out of date
  p This command requires the following permissions:
  ul
    li <code>--allow-net</code>: dmm uses HTTP requests to fetch information on the given module.
    li <code>--allow-read</code>: dmm needs to read your dependency file to gather the dependencies you have.
  hr
  h2-hash Examples
  ul
    li
      p Check a single dependency. In this example, we are checking the <code>http</code> std dependency.
      code-block(title="Terminal" language="text")
        | $ cat deps.ts
        |
        | import { serve } from "https://deno.land/std@0.55.0/http/server.ts"; // out of date
        |
        | $ dmm check http
        |
        | Gathering facts...
        | Reading deps.ts to gather your dependencies...
        | Comparing versions...
        | http can be updated from 0.55.0 to 0.63.0
        | To update, run:
        |     dmm update http
    li
      p Check multiple dependencies.
      code-block(title="Terminal" language="text")
        | $ cat deps.ts
        |
        | import { serve } from "https://deno.land/std@0.55.0/http/server.ts"; // out of date
        | import { Drash } from "https://deno.land/x/drash@v1.0.7/mod.ts"; // out of date
        |
        | $ dmm check http drash
        |
        | Gathering facts...
        | Reading deps.ts to gather your dependencies...
        | Comparing versions...
        | http can be updated from 0.55.0 to {latest_release}
        | drash can be updated from v1.0.7 to v{latest_release}
        | To update, run:
        |     dmm update http drash
    li
      p Check all dependencies.
      code-block(title="Terminal" language="text")
        | $ cat deps.ts
        |
        | import { serve } from "https://deno.land/std@0.55.0/http/server.ts"; // out of date
        | import { Drash } from "https://deno.land/x/drash@v1.0.7/mod.ts"; // out of date
        |
        | $ dmm check
        |
        | Gathering facts...
        | Reading deps.ts to gather your dependencies...
        | Comparing versions...
        | http can be updated from 0.55.0 to {latest_release}
        | drash can be updated from v1.0.7 to v{latest_release}
        | To update, run:
        |     dmm update http drash
</template>

