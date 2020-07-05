<template lang="pug">
a(:href="$conf.drash.base_url + '/#' + href")
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
