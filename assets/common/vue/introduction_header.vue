<script>
export default {
  props: {
    heading: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
  },
  methods: {
    /**
     * Show the title with the version if the URL has /vx.x.x where x.x.x is a
     * version number. For example, if someone goes to /drash/v1.3.0, then the
     * title should show up as Drash v1.3.0.
     */
    versioned() {
      const version = window.location.href.match(/v.+[0-9]/g);
      if (version) {
        return " " + version[0];
      }
      return false;
    }
  }
}
</script>

<template lang="pug">
div
  h1.text-5xl
    strong {{ heading }}
      span(v-show="versioned()") {{ versioned() }}
  p {{ description }}
</template>
