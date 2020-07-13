<script>
export default {
  name: "CodeBlockSlotted",
  props: [
    'header',
    'line_highlight',
    'language',
  ],
  mounted() {
    Prism.highlightAll();
  }
}
</script>

<style lang="scss" scoped>
    pre {
        margin-bottom: 0;
    }
    .no-header {
        border-radius: 1.0875rem;
    }
</style>

<template lang="pug">
div.b-code-example.code-block-default
    pre.header(v-if="header !== false")
        code.header
            slot(name="title")
    pre.body(:data-line="line_highlight" :class="{'no-header': header === false}")
        code(:class="'language-' + language")
            slot(name="code")
</template>
