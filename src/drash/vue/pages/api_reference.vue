<script>
const title = "API Reference";
const baseUri = "/api-reference";

export const resource = {
  paths: [baseUri],
  meta: {
    title,
  }
}

export default {
  data() {
    return {
      base_url: this.$conf.drash.base_url,
      base_uri: baseUri,
      title,
      json: this.$api_reference,
    };
  },
}
</script>

<template lang="pug">
page(
  :base_url="base_url"
  :base_uri="base_uri"
  :title="title"
)
  h2-hash Members List
  ul(v-for="(member1, name1) in json")
    li
      a(:href="'#' + name1.toLowerCase()") {{ name1 }}
  div(v-for="(member1, name1) in json")
    h2-hash.font-bold.bg-black.px-5.text-white {{ name1 }}
    div(v-for="(member2) in member1")
      code-block(language="typescript")
        | {{ member2 }}
</template>

<style lang="scss" scoped>
li p a {
  color: #ff7700 !important;
  cursor: pointer !important;
  &:hover {
    text-decoration: underline !important;
  }
}
</style>
