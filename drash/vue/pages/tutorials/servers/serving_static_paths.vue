<script>
export const resource = {
  paths: ["/tutorials/servers/serving-static-paths"],
  meta: {
    title: "Serving Static Paths",
    source_code_uri: "/tutorials/servers/serving_static_paths"
  }
}

export default {
  data() {
    return {
      example_code: this.$example_code['drash/example_code/tutorials/servers/serving_static_paths'],
      example_code_public: this.$example_code['drash/example_code/tutorials/servers/serving_static_paths/public'],
      toc: {
        items: [
          "Before You Get Started",
          "Folder Structure End State",
          "Steps",
          "Verification"
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
      p In this tutorial, you will build a very simple HTML page that can serve a CSS file.
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
          p Create your app file. The <code>static_paths</code> config tells your Drash server what paths on your filesystem contain static files that can be served to clients. Ultimately, your Drash server will prefix the <code>directory</code> config with your paths in your <code>static_paths</code> config. For example, your Drash server will take a request to <code>/public/assets/css/style.css</code> and resolve it to <code>{directory_config}/public/assets/css/style.css</code>.
          p
            code-block-slotted(language="typescript" line_highlight="6,9")
              template(v-slot:title) {{ example_code.app.filepath }}
              template(v-slot:code) {{ example_code.app.contents }}
        li
          p Create your <code>style.css</code> file in your static directory.
          p
            code-block-slotted(language="css")
              template(v-slot:title) {{ example_code_public.style.filepath }}
              template(v-slot:code) {{ example_code_public.style.contents }}
        li
          p Create your resource file. Your resource file will serve HTML; and your HTML will reference <code>/public/style.css</code>.
          p
            code-block-slotted(language="typescript")
              template(v-slot:title) {{ example_code.home_resource.filepath }}
              template(v-slot:code) {{ example_code.home_resource.contents }}
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
                | deno run --allow-net --allow-read app.ts
        li
          p Make a request in your browser.
          p
            code-block-slotted
              template(v-slot:title) Terminal
              template(v-slot:code)
                | curl localhost:1447
          p You should receive the following response:
          p
            strong(style="color: #ff0000; font-family: 'Times New Roman', 'Times'") This is my title and it is red.
</template>
