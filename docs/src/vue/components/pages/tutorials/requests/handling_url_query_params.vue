<script>
export const resource = {
  paths: ["/tutorials/requests/handling-url-query-params"],
  meta: {
    title: "Handling URL Query Params",
    source_code_uri: "/tutorials/requests/handling_url_query_params"
  }
}

export default {
  data() {
    return {
      example_code: this.$app_data.example_code['/src/example_code/tutorials/requests/handling_url_query_params'],
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
      p Getting a value from a request's URL query params can be done using the following call:
      p
        code-block-slotted(:header="false" language="typescript")
          template(v-slot:title)
          template(v-slot:code)
            | const param = this.request.getUrlQueryParam("param_name");
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
          p Create your resource file. You resource file will check for the <code>id</code> URL query param in the request's URL. If it exists and is a <code>number</code>, then it will return what was passed in. If it is <code>NaN</code> or does not exist, then it will throw a <code>400 Bad Request</code> response.
          p
            code-block(:data="example_code.home_resource")
        li
          p Create your app file.
          p
            code-block(:data="example_code.app")
  div.row
    div.col
      hr
      h2-hash Verification
      ol
        li Run your app.
          p
            code-block-slotted
              template(v-slot:title) Terminal
              template(v-slot:code)
                | deno --allow-net app.ts
        li
          p Using <code>curl</code> (or similar command), make a <code>GET</code> request to <code>localhost:1447/users?id=1</code>.
          p
            code-block-slotted
              template(v-slot:title) Terminal
              template(v-slot:code)
                | curl localhost:1447/users?id=1
          p You should receive the following response:
            code-block-slotted(:header="false")
              template(v-slot:code)
                | You passed in the following user ID as the URL query param: 1
        li
          p Make the same request, but change the <code>id</code> URL query param to <code>one</code>.
          p
            code-block-slotted
              template(v-slot:title) Terminal
              template(v-slot:code)
                | curl localhost:1447/users?id=one
          p You should receive the following response:
            code-block-slotted(:header="false")
              template(v-slot:title) Terminal
              template(v-slot:code)
                | This resource requires the `id` URL query param to be a number.
        li
          p Make the same request, but do not add the <code>id</code> URL query param.
          p
            code-block-slotted
              template(v-slot:title) Terminal
              template(v-slot:code)
                | curl localhost:1447
          p You should receive the following response:
            code-block-slotted(:header="false")
              template(v-slot:title) Terminal
              template(v-slot:code)
                | This resource requires the `id` URL query param.
</template>
