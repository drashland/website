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
  methods: {
    getHashName(name) {
      return name.toLowerCase().replace(/\./g, "-");
    },
    getMemberLink(filepath) {
      return "https://github.com/drashland/deno-drash/blob/"  + this.$conf.drash.latest_version + filepath.replace(".", "");
    },
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
  ul(v-for="(member, member_name) in json")
    li
      a(:href="'#/api-reference#' + getHashName(member_name)") {{ member_name }}
  div(v-for="(member, member_name) in json")
    h2-hash.font-bold.bg-black.px-5.text-white {{ member_name }}
    p #[a(:href="getMemberLink(member.file)" target="_BLANK") View {{ member_name }} source code]
    div(v-for="(info) in member.members")
      code-block(language="typescript")
        | {{ info }}
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
