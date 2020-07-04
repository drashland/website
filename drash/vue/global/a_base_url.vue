<template lang="pug">
a(:href="$conf.base_url + '/#' + href")
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
