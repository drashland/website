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
          "Example",
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
  p The <code>check</code> command will check if all of your dependencies can be updated (or shows what dependencies are out of date), or only one or only some depending on the CLI arguments.
  p This command requires the following permissions:
    ul
      li <code>--allow-net</code> - dmm uses HTTP requests to fetch information on the  given module
      li <code>--allow-read</code> - dmm needs to read your dependency file to gather the dependencies you have
  hr
  h2-hash Example
  ul
    li
      p Check your <code>http std</code> dependency (assuming you have that as a dependency.
      code-block(title="terminal" language="terminal")
        | $ cat deps.ts
        |
        | import { serve } from "https://deno.land/std@v0.55.0/http/server.ts"; // out of date
        |
        | $ dmm check http
        |
        | Gathering facts...
        | Reading deps.ts to gather your dependencies...
        | Comparing versions...
        | http can be updated from v0.55.0 to v0.61.0
        | To update, run:
        |     dmm update http
    li
      p Check multiple dependencies.
      code-block(title="terminal" language="terminal")
        | $ cat deps.ts
        |
        | import { serve } from "https://deno.land/std@v0.55.0/http/server.ts"; // out of date
        | import { Drash } from "https://deno.land/x/drash@v1.0.7/mod.ts"; // out of date
        |
        | $ dmm check http drash
        |
        | Gathering facts...
        | Reading deps.ts to gather your dependencies...
        | Comparing versions...
        | http can be updated from v0.55.0 to v{latest_release}
        | drash can be updated from v1.0.7 to v{latest_release}
        | To update, run:
        |     dmm update http drash
    li
      p Check all dependencies.
      code-block(title="terminal" language="terminal")
        | $ cat deps.ts
        |
        | import { serve } from "https://deno.land/std@v0.55.0/http/server.ts"; // out of date
        | import { Drash } from "https://deno.land/x/drash@v1.0.7/mod.ts"; // out of date
        |
        | $ dmm check
        |
        | Gathering facts...
        | Reading deps.ts to gather your dependencies...
        | Comparing versions...
        | http can be updated from v0.55.0 to v{latest_release}
        | drash can be updated from v1.0.7 to v{latest_release}
        | To update, run:
        |     dmm update http drash
</template>

