<script>
export default {
  props: {
    environment: {
      type: String,
      required: true
    },
    build_date: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.environment-badge {
  background: #000000;
  color: #ffffff;
  padding: .5rem;
  text-transform: uppercase;
}
</style>

<template lang="pug">
div.environment-badge(v-if="environment != 'production'" style="position:fixed; right: 0; text-align: right")
  p.mb-0 ENVIRONMENT: {{ environment }}
  p.mb-0(style="font-size: .65rem") Build Date: {{ build_date }}
</template>
