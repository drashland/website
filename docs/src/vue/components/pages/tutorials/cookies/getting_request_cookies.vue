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
          p Create your resource file. This file will get the <code>my_cookie</code> cookie value and use it in the response body.
          code-block(:data="example_code.home_resource")
          p Create your app file.
          code-block(:data="example_code.app")
  div.row
    div.col
      hr
      h2-hash Verification
      ol
        li
          p Run your app.
          p
            code-block-slotted
              template(v-slot:title) Terminal
              template(v-slot:code)
                | deno --allow-net --allow-env app.ts
          p-deno-flag-allow-net
          p-deno-flag-allow-env-drash-test
        li
          p Using <code>curl</code> (or similar command), make a <code>GET</code> request to <code>localhost:1447/</code> and pass in the following cookie key-value pair: <code>my_cookie=chocolate</code>.
          p
            code-block-slotted
              template(v-slot:title) Terminal
              template(v-slot:code)
                | curl 
                | --request GET \
                | -cookie my_cookie=chocolate \
                | localhost:1447
          p You should receive the following response:
            code-block-slotted(:header="false")
              template(v-slot:code)
                | You passed in the following cookie value: chocolate
</template>
