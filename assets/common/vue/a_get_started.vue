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

<template lang="pug">
a(
  style="color: #ffffff"
  class="text-white bg-blue-500 block md:inline hover:bg-blue-400 text-white font-bold py-2 px-4 border-blue-700 hover:border-blue-500 rounded"
  :href="href"
) Get Started
</template>
