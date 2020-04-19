<script>
export const resource = {
  paths: ["/tutorials/front-end/creating-a-template"],
  meta: {
    title: "Creating A Template",
    source_code_uri: "/tutorials/front_end/creating_a_template"
  }
}

export default {
  data() {
    return {
      example_code: this.$app_data.example_code['/src/example_code/tutorials/front_end/creating_a_template'],
      example_code_views: this.$app_data.example_code['/src/example_code/tutorials/front_end/creating_a_template/views'],
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
      p In this tutorial, you will create an HTML template with a <code>&lt;% user.name %&gt;</code> variable.
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
          p Create your template file.
          p
            code-block-slotted(language="html")
              template(v-slot:title) /path/to/your/project/views/user.html
              template(v-slot:code) {{ example_code_views.user.contents }}
        li
          p Create your resource file.
          p
            code-block-slotted(language="typescript")
              template(v-slot:title) /path/to/your/project/user_resource.ts
              template(v-slot:code) {{ example_code.user_resource.contents }}
        li Create your app file.
          p
            code-block-slotted(language="typescript")
              template(v-slot:title) /path/to/your/project/app.ts
              template(v-slot:code) {{ example_code.app.contents }}
  div.row
    div.col
      hr
      h2-hash Verification
      p You can verify that your app's code works by making requests like the ones below. Since this tutorial's app sets <code>text/html</code> as the <code>response_output</code>, the server responds to requests with HTML by default.
      ol
        li
          p Run your app.
          p
            code-block-slotted
              template(v-slot:title) Terminal
              template(v-slot:code)
                | deno --allow-net --allow-read app.ts
        li
          p Go to <code>localhost:1447/user</code> in your browser.
          p You should receive the following response:
          img(:src="$conf.base_url + '/public/assets/img/example_code/tutorials/front_end/extending_a_template.png'")
</template>
