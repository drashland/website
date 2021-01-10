<script>
export default {
  props: {
    type: {
      type: String,
      required: true
    }
  },
  computed: {
    title() {
      if (this.type === "tip") {
        return "TIP"
      }
      if (this.type === "page_issue") {
        return "Having issues with this page"
      }
    },
    icon() {
      if (this.type === "tip") {
        return "💡"
      }
      if (this.type === "page_issue") {
        return "❓"
      }
    }
  }
};
</script>

<style lang="scss" scoped>
div#notify {
    div {
        margin-bottom: 1rem;
        p.prefix {
            margin-top: auto;
            margin-bottom: auto;
        }
        span {
            margin: auto 0 auto .2em;
            font-size: 1.5em;
        }
    }
}
</style>

<template lang="pug">
div.shadow-md.rounded-b.border-l-4.border-teal-500.bg-teal-100.px-4.py-3#notify
  div.flex
    p.prefix.font-bold {{ title }}
    span {{ icon }}
  p.message.text-sm.text-teal-900
    slot
</template>
