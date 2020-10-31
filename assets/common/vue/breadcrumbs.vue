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
    const classList =
      "breadcrumb bg-blue-500 block md:inline mb-1 text-white font-bold px-4 border-blue-600 rounded mr-2"
    let breadcrumbs = [{
      class: classList + (this.part === -1 ? " border-b-4" : ""),
      href: `${this.base_url}/introduction`,
      name: "Introduction"
    }];
    for (let i = 1; i <= this.parts; i += 1) {
      breadcrumbs.push({
        class: classList + (this.part === i ? " border-b-4" : ""),
        href: `${this.base_url}/part-${i}`,
        name: `Part ${i}`,
      });
    }
    this.breadcrumbs = breadcrumbs;
  },
}
</script>

<style lang="scss" scoped>
.breadcrumb-holder {
    flex-flow: row wrap;
    display: flex;
}
.breadcrumb {
    background-color: rgb(40, 38, 51); // same as bg for items in sidebar
    color: white;
}
.breadcrumb:hover {
    background-color: #1a4ae2;
}
</style>

<template lang="pug">
div(class="breadcrumb-holder")
  a(
    v-for="breadcrumb in breadcrumbs"
    :class="breadcrumb.class"
    :href="breadcrumb.href"
  ) {{ breadcrumb.name }}
</template>
