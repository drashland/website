<template lang="pug">
page-tutorial(
  :toc="toc"
)
  div.row
    div.col
      hr
      h2-hash Before You Get Started
      p Drash defines redirections according to the MDN: <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Redirections" target="_BLANK">https://developer.mozilla.org/en-US/docs/Web/HTTP/Redirections</a>
      p Permanently redirect:
      p
        code-block-slotted(:header="false" language="typescript")
          template(v-slot:title) Terminal
          template(v-slot:code)
            | this.response.redirect(301, "https://drash.land")
      p Temporarily redirect:
      p
        code-block-slotted(:header="false" language="typescript")
          template(v-slot:title) Terminal
          template(v-slot:code)
            | this.response.redirect(302, "/cola/1")
      p You can redirect using a fully-qualified URL or a relative URL as seen in the example code blocks above.

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
          p Create your <code>ColaResource</code> file.
          p
            code-block-slotted(language="typescript")
              template(v-slot:title) {{ example_code.cola_resource.filepath }}
              template(v-slot:code) {{ example_code.cola_resource.contents }}
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
        li
          p Run your app.
          p
            code-block-slotted
              template(v-slot:title) Terminal
              template(v-slot:code)
                | deno run --allow-net app.ts
        li
          p Using <code>curl</code> (or similar command), make a <code>GET</code> request to <code>localhost:1447/cola?id=5</code> to be redirected to <code>/cola/1</code>.
          p
            code-block-slotted
              template(v-slot:title) Terminal
              template(v-slot:code)
                | curl localhost:1447/cola?id=5
          p You should receive the following response:
          p
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
      example_code: this.$example_code['drash/example_code/tutorials/misc/redirects'],
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

