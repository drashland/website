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
        li
          p Create your dejs template. Your resource will render this template using dejs.
          code-block(:data="example_code.index" language="html")
        li 
          p Create your resource file.
          code-block(:data="example_code.home_resource")
        li
          p Create your app file. Your server will need to default to <code>text/html</code> responses (see highlighted server config).
          code-block(:data="example_code.app" line_highlight="7")
  div.row
    div.col
      hr
      h2-hash Verification
      ol
        li Run your app.
          code-block-slotted
            template(v-slot:title) Terminal
            template(v-slot:code)
              | deno run --allow-net --allow-read app.ts
        li
          p Make a request to <code>localhost:1447</code> in your browser. You should receive the following response:
          img(:src="$conf.base_url + '/public/assets/img/example_code/third_party_tutorials/template_engines/dejs/verification_1.png'")
        li
          p Make the same request, but specify <code>?name=syumai</code> in the URL: <code>localhost:1447?name=syumai</code>. You should receive the following response:
          img(:src="$conf.base_url + '/public/assets/img/example_code/third_party_tutorials/template_engines/dejs/verification_2.png'")
