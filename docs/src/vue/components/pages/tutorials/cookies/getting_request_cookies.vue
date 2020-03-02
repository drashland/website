<script>
export const resource = {
  paths: ["/tutorials/cookies/getting-request-cookies"],
  meta: {
    title: "Getting Request Cookies",
    tutorial_title: "Getting Request Cookies",
    source_code_uri: "/tutorials/cookies/getting_request_cookies"
  }
}

export default {
  data() {
    return {
      example_code: this.$app_data.example_code['/src/example_code/tutorials/cookies/getting_request_cookies'],
      toc: {
        items: [
          "Before You Get Started",
          "Folder Structure End State",
          "Steps",
          "Verification",
        ]
      }
    };
  },
}
</script>

<template lang="pug">
page-tutorial(
  :toc="toc"
)
  div.row
    div.col
      hr
      h2-hash Before You Get Started
      p In this tutorial, you will learn how to get cookies from a request and parse them into a usable object.
      p Drash uses <a href="https://deno.land/std/http/cookie.ts" target="_BLANK">cookie.ts</a> from Deno Standard Modules' HTTP module for its cookie schema.
      p-view-source-code(:source_code_uri="$route.meta.source_code_uri")
  div.row
    div.col
      hr
      div-folder-structure-end-state(:code_block_data="example_code.folder_structure")
  div.row
    div.col
      hr
      h2-hash Steps
      ol
        li
          p Create your resource file.
          code-block(:data="example_code.home_resource")
</template>
