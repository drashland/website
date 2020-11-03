<script>
export const resource = {
  paths: [
    "/tutorials/middleware/using-drash-middleware-modules"
  ],
  meta: {
    title: "Use Drash Middleware Modules",
  }
}

export default {
  data() {
    return {
      title: resource.meta.title,
    };
  },
}
</script>

<template lang="pug">
page(
  :title="title"
)
  p Drash has a middleware repository that contains a list of middleware modules that you can plug into your Drash application. The repository contains only Drash-approved middleware modules that are extensively documented and tested.
  p Be aware that some modules may use third-party dependencies whilst some will not. You are still able to create your own middleware within Drash, but the middleware repository supplies already developed middleware that can be plugged straight into your application.
  p You can view the repository <a href="https://github.com/drashland/deno-drash-middleware" target="_BLANK">here</a>.
</template>
