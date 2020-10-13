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
  introduction-header(heading="dmm" description="dmm is a lightweight module manager")
  div.flex.mb-5
    a(href="https://github.com/drashland/dmm/releases" target="_BLANK")
      img.mr-1(alt="Latest dmm Release" src="https://img.shields.io/github/release/drashland/dmm.svg?color=brightgreen&label=Latest" width="auto" height="20")
    a(href="https://github.com/drashland/dmm/actions" target="_BLANK")
      img.mr-1(alt="dmm CI" src="https://img.shields.io/github/workflow/status/drashland/dmm/master?label=CI" width="auto" height="20")
    a(href="https://discord.gg/SgejNXq" target="_BLANK")
      img.mr-1(alt="Drash Land Discord" src="https://img.shields.io/badge/Chat-on%20Discord-blue")
    a(href="https://twitter.com/drash_land" target="_BLANK")
      img.mr-1(alt="Drash Land Twitter" src="https://img.shields.io/twitter/url?label=%40drash_land&style=social&url=https%3A%2F%2Ftwitter.com%2Fdrash_land" width="auto" height="20")
    //a(href="" target="_BLANK")
      img(alt="dmm YouTube" src="https://img.shields.io/badge/Tutorials-YouTube-red" width="auto" height="20")
  div
    hr
    h2-hash Quickstart
    ol
      li
        p Make sure you have out of date dependencies inside your <code>deps.ts</code> file.
        code-block(title="deps.ts" language="typescript")
          | import { Drash } from "https://deno.land/x/drash@{{ $conf.drash.latest_version }}/mod.ts";
          | import { red } from "https://deno.land/std@{latest std version}/fmt/colors.ts";
      li
        p Update your dependencies.
        code-block(title="Terminal" language="shell-session")
          | $ deno run ---allow-read='.' --allow-write='deps.ts' --allow-net='cdn.deno.land,api.deno.land' https://deno.land/x/dmm@{{ $conf.dmm.latest_version }}/mod.ts update
          |
          | Gathering facts...
          | Reading deps.ts to gather your dependencies...
          | Checking if your modules can be updated...
          | drash was updated from v1.0.0 to {{ $conf.drash.latest_version }}
          | fmt was updated from 0.55.0 to {latest std version}

    hr
    h2-hash Installing
    p You can install dmm through <code>deno install</code>. See below.
    code-block(title="Terminal" language="shell-session")
      | $ deno install --allow-read='.' --allow-write='deps.ts' --allow-net='cdn.deno.land,api.deno.land' https://deno.land/x/dmm@{{ $conf.dmm.latest_version }}/mod.ts
      | $ dmm --help
    p This will make running commands easier &mdash; allowing you to type <code>dmm</code> instead of <code>deno run --allow-read='.' --allow-write='deps.ts' --allow-net='cdn.deno.land,api.deno.land' https://deno.land/x/dmm@{{ $conf.dmm.latest_version }}/mod.ts</code>.
    hr
    h2-hash Features
    ul
      li
        p Gives information on modules
      li
        p Checks if your dependencies are out of date
      li
        p Zero dependencies
      li
        p Updates dependencies in a simple manner
      li
        p Only reads and writes to your <code>deps.ts</code> file
      li
        p Looks up modules on the following registries:
          ul
            li <code>https://deno.land/std/</code>
            li <code>https://deno.land/x/</code>
</template>
