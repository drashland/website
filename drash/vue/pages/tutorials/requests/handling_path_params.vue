<script>
export const resource = {
  paths: ["/tutorials/requests/handling-path-params"],
  meta: {
    title: "Handling Path Params",
    source_code_uri: "/tutorials/requests/handling_path_params"
  }
}

export default {
  data() {
    return {
      example_code: this.$example_code['drash/example_code/tutorials/requests/handling_path_params'],
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
      p Getting a value from a request's path params can be done using the following call:
      p
        code-block-slotted(:header="false" language="typescript")
          template(v-slot:title)
          template(v-slot:code)
            | const param = this.request.getPathParam("param_name");
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
          p Create your resource file. You resource file will check for the <code>:id</code> path param in the request's URL. If it exists and is a <code>number</code>, then it will return what was passed in. If it is <code>NaN</code>, then it will throw a <code>400 Bad Request</code> response.
          p
            code-block-slotted(language="typescript")
              template(v-slot:title) {{ example_code.users_resource.filepath }}
              template(v-slot:code) {{ example_code.users_resource.contents }}
          p You can also specify optional parameters by adding <code>?</code>. The resource would still match even if the optional parameters are not passed in. For example:
          p
            code-block-slotted(language="typescript")
              template(v-slot:title) {{ example_code.users_resource.filepath }}
              template(v-slot:code)
                | static paths = ["/users/:id/:name?"];
                | // or
                | static paths = ["/users/:name?"];
                | // or
                | static paths = ["/users/:id/:name/:age?/:city?"];
          p You can specify as many optional parameters as you want, but required parameters must precede optional parameters. Using the path <code>/users/:id/:name/:age?/:city?</code> from the example above, the resource will match for the following URI's:
          ul
            li <code>/users/1/John</code>
            li <code>/users/1/John/</code>
            li <code>/users/1/John/54</code>
            li <code>/users/1/John/54/</code>
            li <code>/users/1/John/54/UK</code>
            li <code>/users/1/John/54/UK/</code>
        li
          p Create your app file.
          p
            code-block-slotted(language="typescript")
              template(v-slot:title) {{ example_code.app.filepath }}
              template(v-slot:code) {{ example_code.app.contents }}
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
                | deno run --allow-net app.ts
        li
          p Using <code>curl</code> (or similar command), make a <code>GET</code> request to <code>localhost:1447/users/1</code>.
          p
            code-block-slotted
              template(v-slot:title) Terminal
              template(v-slot:code)
                | curl localhost:1447/users/1
          p You should receive the following response:
            code-block-slotted(:header="false")
              template(v-slot:code)
                | You passed in the following user ID as the path param: 1
        li
          p Make the same request, but change the <code>:id</code> path param to <code>one</code>.
          p
            code-block-slotted
              template(v-slot:title) Terminal
              template(v-slot:code)
                | curl localhost:1447/users/one
          p You should receive the following response:
            code-block-slotted(:header="false")
              template(v-slot:title) Terminal
              template(v-slot:code)
                | This resource requires the `:id` path param to be a number.
</template>
