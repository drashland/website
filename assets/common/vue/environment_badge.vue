<script>
export default {
  props: {
    build_date: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      environment: window.server_configs.environment,
    };
  },
  computed: {
    is_production() {
      return window.server_configs.environment == 'production';
    }
  },
}
</script>

<style lang="scss" scoped>
.environment-badge {
  background: #000000;
  color: #ffffff;
  padding: .5rem;
  text-transform: uppercase;
}
p {
  line-height: 1rem;
}
</style>

<template lang="pug">
div.environment-badge(v-if="!is_production" style="position:fixed; right: 0; top: 0; text-align: right; z-index: 1000")
  p.mb-0 ENVIRONMENT: {{ environment }}
  p.mb-0(style="font-size: .65rem") Build Date: {{ build_date }}
</template>
