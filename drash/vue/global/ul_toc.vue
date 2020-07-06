<template lang="pug">
ul
    li(v-for="item in data.items")
        a(:href="'/drash/#' + $route.path + '#' + normalize(item)") {{ item }}
</template>

<script>
import Vue from "vue";

let component = {
  props: [
    "data",
  ],
  methods: {
    normalize(item) {
      item = item
        .replace(/ /g, '-')
        .replace(/\?/g, "")
        .replace(/\,/g, "");
      return item.toLowerCase();
    }
  }
};

Vue.component("ul-toc", component);

export default component;
</script>


