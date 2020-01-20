<script>
export const resource = {
  paths: ["/third-party-tutorials/template-engines/dejs"],
  meta: {
    title: "dejs",
    source_code_uri: "/third_party_tutorials/template_engines/dejs"
  }
}

export default {
  data() {
    return {
      example_code: this.$app_data.example_code['/src/example_code/third_party_tutorials/template_engines/dejs'],
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
      p In this tutorial, you will create a very basic server that uses <a href="https://github.com/syumai/dejs" target="_BLANK">dejs</a> to render HTML templates.
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
        li Create your dejs template.
          code-block(:data="example_code.index" language="html")
          p Your resource will render this template using dejs.
        li Create your resource file.
          code-block(:data="example_code.home_resource")
          p Your resource will use dejs to render the <code>index.ejs</code> template.
        li Create your app file.
          code-block(:data="example_code.app" line_highlight="7")
          p Your server will need to default to <code>text/html</code> responses (see highlighted server config).
  div.row
    div.col
      hr
      h2-hash Verification
      ol
        li Run your app.
          code-block-slotted
            template(v-slot:title) Terminal
            template(v-slot:code)
              | deno --allow-net --allow-write app.ts
          p-deno-flag-allow-net
        li Make a request using <code>curl</code> like below or go to <code>localhost:1447/</code> in your browser.
          code-block-slotted
            template(v-slot:title) Terminal
            template(v-slot:code)
              | curl localhost:1447/
          p You should receive the following response (we pretty-printed the response for you):
