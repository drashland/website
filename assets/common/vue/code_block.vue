<script>
export default {
  props: {
    header: {
      type: Boolean,
      default: true,
    },
    line_highlight: {
      type: String,
      required: false,
    },
    language: {
      type: String,
      required: true,
    },
    title: {
      type: String,
    }
  },
  mounted() {
    Prism.highlightAll();
  }
}
</script>

<style lang="scss" scoped>
.header {
  border-radius: 1rem 1rem 0 0;
  background-color: #454545;
  color: #ffffff;
}
.body {
  border-radius: 0 0 1rem 1rem;
  margin: 0;
}
.body.no-header {
  border-radius: 1rem;
}
</style>

<template lang="pug">
div.mb-5
    pre.header.mb-0.p-4(v-if="header !== false")
      code.header {{ title }}
    pre.body(:data-line="line_highlight" :class="{'no-header': header === false}")
      code(:class="'language-' + language")
        slot
</template>
