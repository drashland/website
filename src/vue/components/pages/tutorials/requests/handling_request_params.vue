<script>
export const resource = {
  paths: ["/tutorials/requests/handling-request-params"],
  meta: {
    title: "Handling Request Params",
    source_code_uri: "/resources/handling_request_params"
  }
}

export default {
  data() {
    return {
      example_code: this.$app_data.example_code['/src/example_code/tutorials/requests/handling_request_params'],
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
      p
        code-block-slotted(:header="false" language="typescript" line_highlight="7")
          template(v-slot:code) {{ example_code.registering_resources.contents }}
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
        li Create your resource file.
          p
            code-block(:data="example_code.home_resource")
          p Your resource will checks for the request's path params, URL query params, and body params at the <code>/</code> and <code>/:something_cool</code> URIs. If a client makes a request to these URIs, this resource would handle that request.
        li Create your app file.
          code-block(:data="example_code.app")
          p Your app file will register your resource via the <code>resources</code> config.
          p By default, your Drash server will send <code>application/json</code> responses via the <code>resposne_output</code>. More information about using this config can be found in the Content Negotiation tutorial.
</template>
