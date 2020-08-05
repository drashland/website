<script>
import CodeBlock from "/common/vue/code_block.vue";

export default {
  components: {
    CodeBlock,
  },
  props: {
    name: {
      type: String,
      required: true
    },
    repo: {
      type: String,
      required: true
    },
    version: {
      type: String,
      required: true
    },
  },
}
</script>

<template lang="pug">
div
  code-block(language="typescript" :header="false")
    | // Import a specific version of {{ name }}
    | import { {{ name }} } from "https://deno.land/x/{{ repo }}@{{ version }}/mod.ts";
  p {{ name }} versions can be found <a :href="'https://github.com/drashland/' + repo + '/releases'" target="_BLANK">here</a>.
</template>
