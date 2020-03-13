<template lang="pug">
page-tutorial(
  :toc="toc"
)
  div.row
    div.col
      hr
      h2-hash Before You Get Started
      p Drash defines redirections according to MDN: <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Redirections" target="_BLANK">https://developer.mozilla.org/en-US/docs/Web/HTTP/Redirections</a>
      p The <code>redirect</code> method is in the <code>Drash.Http.Response</code> class. To execute a redirect, call <code>this.response.direct(httpStatusCode: number, location: string)</code> in the resource.
      p Permanently direct to a fully-qualified URL
        code-block-slotted(:header="false")
          template(v-slot:title) Terminal
          template(v-slot:code)
            | this.response.redirect(301, 'https://drash.land')
      p Temporarily redirect to a relative path
        code-block-slotted(:header="false")
          template(v-slot:title) Terminal
          template(v-slot:code)
            | this.response.redirect(302, '/cola/1')

  div.row
    div.col
      hr
      div-folder-structure-end-state(:code_block_data="example_code.folder_structure")
  div.row
    div.col
      hr
      h2-hash Steps
      ol
        li Create your app's entry point.
          code-block(:data="example_code.app")
        li Create a resource.
          code-block(:data="example_code.cola_resource")
  div.row
    div.col
      hr
      h2-hash Verification
      ol
        li Run your app.
          code-block-slotted
            template(v-slot:title) Terminal
            template(v-slot:code)
              | deno app.ts
          p Make a GET request to your newly created resource.
          code-block-slotted
            template(v-slot:title) Terminal
            template(v-slot:code)
              | curl localhost:8888/cola?id=5
          p You should receive the following response:
            code-block-slotted(:header="false")
              template(v-slot:title) Terminal
              template(v-slot:code)
                | Diet Cola
</template>

<script>
export const resource = {
  paths: ["/tutorials/misc/redirects"],
  meta: {
    title: "Redirects",
  }
}

export default {
  data() {
    return {
      example_code: this.$app_data.example_code['/src/example_code/tutorials/misc/redirects'],
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

