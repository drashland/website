<script>
export const resource = {
  paths: ["/lifecycle-diagram"],
  meta: {
    title: "Lifecycle Diagram",
  }
}

export default {
  data() {
    return {
      title: resource.meta.title
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
