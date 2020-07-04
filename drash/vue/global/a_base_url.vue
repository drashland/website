<template lang="pug">
a(:href="'/drash/#' + href")
  slot
</template>

<script>
export default {
  props: {
    href: {
      required: true,
      type: String,
    },
  }
};
</script>
