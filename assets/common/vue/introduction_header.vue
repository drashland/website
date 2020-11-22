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
}
</script>

<template lang="pug">
div
  h1.text-5xl
    strong {{ heading }}
  p {{ description }}
</template>
