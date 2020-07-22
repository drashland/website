<script>
export default {
  props: {
    base_url: {
      type: String,
      required: true,
    },
    part: {
      type: Number,
      required: true,
    },
    parts: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      breadcrumbs: []
    };
  },
  mounted() {
    let breadcrumbs = [{
      class: this.part == -1
        ? "breadcrumb bg-blue-500 hover:bg-blue-400 sm:block md:inline sm:mb-1 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded mr-2"
        : "breadcrumb bg-blue-500 hover:bg-blue-400 sm:block md:inline sm:mb-1 text-white font-bold py-2 px-4 border-blue-700 hover:border-blue-500 rounded mr-2",
      href: `${this.base_url}/introduction`,
      name: "Introduction"
    }];
    for (let i = 1; i <= this.parts; i += 1) {
      breadcrumbs.push({
        class: this.part == i
          ? "breadcrumb bg-blue-500 hover:bg-blue-400 sm:block md:inline sm:mb-1 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded mr-2"
          : "breadcrumb bg-blue-500 hover:bg-blue-400 sm:block md:inline sm:mb-1 text-white font-bold py-2 px-4 border-blue-700 hover:border-blue-500 rounded mr-2",
        href: `${this.base_url}/part-${i}`,
        name: `Part ${i}`,
      });
    }
    this.breadcrumbs = breadcrumbs;
  },
}
</script>

<style lang="scss" scoped>
.breadcrumb {
  color: #ffffff !important;
}
</style>

<template lang="pug">
div
  a(
    v-for="breadcrumb in breadcrumbs"
    :class="breadcrumb.class"
    :href="breadcrumb.href"
  ) {{ breadcrumb.name }}
</template>
