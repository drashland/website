<script>
import Page from "/common/vue/page.vue";

const title = "Lifecycle Diagram";

export const resource = {
  paths: ["/lifecycle-diagram"],
  meta: {
    title: title,
  }
}

export default {
  components: {
    Page
  },
  data() {
    return {
      title: title
    };
  },
}
</script>

<template lang="pug">
page(
  :title="title"
)
  p Below is a digram of Drash's complete request-resource-response lifecycle with error handling flows.
  p
    img(:src="'/drash/assets/img/drash_lifecycle_diagram.svg'")
</template>
