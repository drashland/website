<script>
export const resource = {
  paths: [
    "/tutorials/cli/introduction"
  ],
  meta: {
    title: "Introduction To The CLI",
  }
}

export default {
  data() {
    return {
      title: resource.meta.title,
      toc: [
        "Basics",
        "Commands",
      ]
    };
  },
}
</script>

<template lang="pug">
page(
  :base_url="this.$base_url"
  :title="title"
  :toc="toc"
)
  h2-hash Basics
  p Drash provides a CLI to provide many utilities to aid in the developer experience, when developing Drash applications:
  ul
    li Create a boilerplate project
      ul
        li With React support
        li With Vue support
        li With an API in mind
        li With a web application in mind
  p Using the CLI is useful for when you want to take a shortcut to certain tasks you may want to do, and it is very easy and simple to use.
  hr
  h2-hash Commands
  ul
    li
      a(:href="$route.path + '/hel'") Create App (create a boilerplate)
</template>
