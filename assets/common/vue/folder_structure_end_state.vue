<script>
  import CodeBlock from "/assets/common/vue/code_block.vue";
  import H2Hash from "/assets/common/vue/h2_hash.vue"
  export default {
    components: {
      CodeBlock,
      H2Hash
    },
  }
</script>
<template lang="pug">
div
  h2-hash Folder Structure End State
  p Upon completing the Steps section below, your project's folder structure should look similar to the following:
  code-block(:header="false")
    slot
</template>
