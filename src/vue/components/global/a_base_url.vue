<template lang="pug">
a(:href="$conf.base_url + '/#' + href")
  slot
</template>

<script>
import Vue from "vue";

let component = {
  props: {
    href: {
      required: true,
      type: String,
    },
  }
};

export default component;
</script>
