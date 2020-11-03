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
  h2-hash About The Diagram
  p The diagram below shows Drash's complete request-resource-response lifecycle. The diagram starts at the top left (at <code>server.run()</code>) and works it way down towards the bottom right (at <code>End request</code>). Middleware execution points are in orange.
  p You can click the diagram to enlarge it.
  p
    em Note: Runtime middleware only executes if compile time middleware is defined at server creation.
  hr
  p
    a(:href="'/drash/assets/img/drash_lifecycle_diagram_v1.3.0.svg'" target="_BLANK")
      img(:src="'/drash/assets/img/drash_lifecycle_diagram_v1.3.0.svg'")
</template>
