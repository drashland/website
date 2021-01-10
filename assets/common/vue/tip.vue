<script>
export default {
  props: {
    type: {
      type: String,
      required: false
    }
  },
  computed: {

  }
};
</script>

<style lang="scss" scoped>
div#tip {
    p.prefix {
        color: #1c4c36;
        margin-top: auto;
        margin-bottom: auto;
    }
    i {
        margin: auto 0 auto .2em;
        color:  #eccb07;
        font-size: 1.5em;
    }
    p.message {

    }
}
</style>

<template lang="pug">
div.shadow-md.rounded-b.border-l-4.border-teal-500.bg-teal-100.px-4.py-3#tip
  div.flex
    p.prefix.font-bold TIP
    i 💡
  p.message.text-sm
    slot
</template>
