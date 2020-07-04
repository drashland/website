<script>
export const resource = {
  paths: ["/tutorials/requests/handling-application-x-www-form-urlencoded-bodies"],
  meta: {
    title: "Handling URL Encoded Bodies",
    source_code_uri: "/tutorials/requests/handling_application_x_www_form_urlencoded_bodies"
  }
}

export default {
  data() {
    return {
      example_code: this.$example_code['drash/example_code/tutorials/requests/handling_application_x_www_form_urlencoded_bodies'],
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
      p Getting a value from an <code>application/x-www-form-urlencoded</code> request's body can be done using the following call:
      p
        code-block-slotted(:header="false" language="typescript")
          template(v-slot:title)
          template(v-slot:code)
            | const param = this.request.getBodyParam("param_name");
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
          p Create your resource file. You resource file will check for the <code>snack</code> param in the request's body. If it exists, then it will return what was passed in. If it does not exist, then it will throw a <code>400 Bad Request</code> response.
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
                | deno run --allow-net app.ts
        li
          p Using <code>curl</code> (or similar command), make a <code>POST</code> request to <code>localhost:1447/</code> and pass in <code>{"snack":"denosaurus"}</code> in the request body.
          p
            code-block-slotted
              template(v-slot:title) Terminal
              template(v-slot:code)
                | curl --header "Content-Type: application/x-www-form-urlencoded" \
                | --request POST \
                | --data 'snack=denosaurus' \
                | localhost:1447
          p You should receive the following response:
            code-block-slotted(:header="false")
              template(v-slot:code)
                | You passed in the following body param: denosaurus
        li
          p Make the same request, but change the data to use <code>meal</code> instead of <code>snack</code>.
          p
            code-block-slotted(line_highlight="3")
              template(v-slot:title) Terminal
              template(v-slot:code)
                | curl --header "Content-Type: application/x-www-form-urlencoded" \
                | --request POST \
                | --data 'snack=denosaurus' \
                | localhost:1447
          p You should receive the following response:
            code-block-slotted(:header="false")
              template(v-slot:title) Terminal
              template(v-slot:code)
                | This resource requires the `snack` body param.
</template>
