<template lang="pug">
h2.text-2xl.mb-5(:id="heading_hash")
  strong
    slot
</template>

<script>
import Vue from "vue";

let component = {
  computed: {
    heading_hash() {
      return this.$slots.default[0].text.toLowerCase()
        .replace(/ /g, '-')
        .replace(/\?/g, "")
        .replace(/\,/g, "");
      ;
    }
  }
};

Vue.component("h2-hash", component);

export default component;
</script>

