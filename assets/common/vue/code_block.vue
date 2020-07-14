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
    this.$root.$on("is-mobile", () => {
      this.is_mobile = true;
    });
    this.$root.$on("is-not-mobile", () => {
      this.is_mobile = false;
    });
  },
  data() {
    return {
      is_mobile: false,
    };
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
  overflow: auto;
}
code.header {
  border-radius: 0;
  line-height: 1rem;
}
.body {
  border-radius: 0 0 1rem 1rem;
  margin: 0;
}
.body.no-header {
  border-radius: 1rem;
}
.is-mobile {
  margin-left: -2rem;
  margin-right: -2rem;
}
</style>

<template lang="pug">
div.mb-5(
  :class="{'is-mobile': is_mobile}"
)
  pre.header.mb-0.p-4(v-if="header !== false")
    code.header {{ title }}
  pre.body(:data-line="line_highlight" :class="{'no-header': header === false}")
    code(:class="'language-' + language")
      slot
</template>
