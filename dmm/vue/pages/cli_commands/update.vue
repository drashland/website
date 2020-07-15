<script>
  import H2Hash from "/common/vue/h2_hash.vue";
  import Page from "/common/vue/page.vue";
  import CodeBlock from "/common/vue/code_block.vue";

  const title = "update";

  export const resource = {
    paths: [
      "/cli_commands/update",
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
  p The <code>update</code> command will update all of your dependencies if there is an newer release available, or only one or only some depending on the CLI arguments. The way this works is, dmm will check the version on your imported dependencies and compare them with the latest version.
  p This command requires the following permissions:
    ul
      li <code>--allow-net</code> - dmm uses HTTP requests to fetch information on the  given module
      li <code>--allow-read</code> - dmm needs to read your dependency file to gather the dependencies you have
      li <code>--allow-write</code> - dmm will update the version strings inside your <code>deps.ts</code>
  hr
  h2-hash Example
  ul
    li
      p Update your <code>http std</code> dependency (assuming you have that as a dependency.
      code-block(title="Terminal" language="text")
        | $ cat deps.ts
        |
        | import { serve } from "https://deno.land/std@v0.55.0/http/server.ts"; // out of date
        |
        | $ dmm update http
        |
        | Gathering facts...
        | Reading deps.ts to gather your dependencies...
        | Checking if your modules can be updated...
        | http was updated from v0.55.0 to v{latest_release}
        |
        | $ cat deps.ts
        |
        | import { serve } from "https://deno.land/std@v{latest_release}/http/server.ts"; // now up to date

    li
      p Update multiple dependencies.
      code-block(title="Terminal" language="text")
        | $ cat deps.ts
        |
        | import { serve } from "https://deno.land/std@v0.55.0/http/server.ts"; // out of date
        | import { Drash } from "https://deno.land/x/drash@v1.0.7/mod.ts"; // out of date
        |
        | $ dmm update http drash
        |
        | Gathering facts...
        | Reading deps.ts to gather your dependencies...
        | Checking if your modules can be updated...
        | http was updated from v0.55.0 to v{latest_release}
        | drash was updated from v1.0.7 to v{latest_release}
    li
      p Update all dependencies.
      code-block(title="Terminal" language="text")
        | $ cat deps.ts
        |
        | import { serve } from "https://deno.land/std@v0.55.0/http/server.ts"; // out of date
        | import { Drash } from "https://deno.land/x/drash@v1.0.7/mod.ts"; // out of date
        |
        | $ dmm update
        |
        | Gathering facts...
        | Reading deps.ts to gather your dependencies...
        | Checking if your modules can be updated...
        | http was updated from v0.55.0 to v{latest_release}
        | drash was updated from v1.0.7 to v{latest_release}
</template>

