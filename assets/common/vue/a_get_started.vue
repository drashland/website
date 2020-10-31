<script>
export default {
  props: {
    href: {
      type: String,
      required: true,
    }
  }
}
</script>

<style lang="scss" scoped>
    a {
        background-color: rgb(40, 38, 51); // same as bg for items in sidebar
        color: white;
    }
    a:hover {
        background-color: #1a4ae2;
    }
</style>

<template lang="pug">
a(
  style="color: #ffffff"
  class="text-white bg-blue-500 block md:inline hover:bg-blue-400 text-white font-bold py-2 px-4 border-blue-700 hover:border-blue-500 rounded"
  :href="href"
) Get Started
</template>
