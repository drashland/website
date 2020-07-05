<template lang="pug">
div
  h2-hash Folder Structure End State
  p Upon completing the Steps section below, your project's folder structure should look similar to the following:
  code-block-slotted(:header="false")
    template(v-slot:code) {{ code_block_data.contents }}
</template>

<script>
import Vue from "vue";

let component = {
  props: {
    code_block_data: {
      required: true,
      type: Object,
    }
  }
};

Vue.component("div-folder-structure-end-state", component);

export default component;
</script>

