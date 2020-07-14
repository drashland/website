<script>
export default {
  computed: {
    hash() {
      return this.$slots.default[0].text.toLowerCase()
        .replace(/ /g, '-')
        .replace(/\?/g, "")
        .replace(/\./g, "-")
        .replace(/\,/g, "");
      ;
    }
  }
};
</script>

<template lang="pug">
code.mb-5(:id="hash")
  slot
</template>
