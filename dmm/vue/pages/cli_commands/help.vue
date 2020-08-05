<script>
  import H2Hash from "/common/vue/h2_hash.vue";
  import Page from "/common/vue/page.vue";
  import CodeBlock from "/common/vue/code_block.vue";

  const title = "--help";

  export const resource = {
    paths: [
      "/cli_commands/help",
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
  p The <code>--help</code> command will give information on how to use dmm, and what commands are available - with examples.
  hr
  h2-hash Example
  ul
    li
      p See the help output.
      code-block(title="Terminal" language="text")
        | $ dmm --help
        |
        | A module manager for Deno.
        |
        | USAGE:
        |     deno install --allow-read --allow-net --allow-write https://deno.land/x/dmm@{{ $conf.dmm.latest_dmm_version }}/mod.ts
        |
        |     deno run --allow-read --allow-net [--allow-write] https://deno.land/x/dmm@{{ $conf.dmm.latest_dmm_version }}/mod.ts [ARGS] [MODULES]
        |
        |     dmm [ARGS] [MODULES]
        |
        | ARGUMENTS:
        | The check and update arguments cannot be used together.
        |
        |     check
        |         Checks the specified modules for newer version. Will check all if modules are omitted.
        |
        |     update
        |         Updates the specified modules to the newest version. Will update all if modules are omitted.
        |
        |     info
        |         Shows information about the given module, be it std or 3rd party. The 3rd party module must be referenced at https://deno.land/x/
        |
        | OPTIONS:
        |     --help
        |         Prints help message
        |     --version
        |         Prints dmm version
        |
        | EXAMPLE USAGE:
        |     Assume you are importing an out of date version of `fs` from `std`.
        |     deno run --allow-net --allow-read https://deno.land/x/dmm@{{ $conf.dmm.latest_dmm_version }}/mod.ts check fs
        |     deno run --allow-net --allow-read --allow-write https://deno.land/x/dmm@{{ $conf.dmm.latest_dmm_version }}/mod.ts update fs
        |     deno run --allow-net https://deno.land/x/dmm@{{ $conf.dmm.latest_dmm_version }}/mod.ts info http
        |     dmm info http
</template>

