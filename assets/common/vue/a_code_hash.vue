<script>
export default {
  props: {
    base_url: {
      type: String,
      default: "",
    }
  },
  computed: {
    href() {
      return this.base_url + "#" + this.hash;
    },
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

<style lang="scss" scoped>
a code {
  color: #ff7700;
  &:hover {
    color: #333333;
  }
}
</style>

<template lang="pug">
a(:href="href")
  code
    slot
</template>
