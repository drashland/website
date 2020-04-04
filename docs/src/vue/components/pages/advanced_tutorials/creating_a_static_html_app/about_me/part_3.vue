<script>
export const resource = {
    paths: ["/advanced-tutorials/creating-a-static-html-app/about-me/part-3"],
    meta: {
      title: "Creating A Static HTML App",
      subtitle: "Part 3: Creating The HTML Files",
      source_code_uri: "/advanced_tutorials/creating_a_static_html_app/about_me/part_3"
    }
}

export default {
  data() {
    return {
      example_code: this.$app_data.example_code['/src/example_code' + resource.meta.source_code_uri],
      example_code_html: this.$app_data.example_code['/src/example_code' + resource.meta.source_code_uri + '/html'],
      part: 3,
      parts: 3,
      toc: {
        items: [
          "Before You Get Started",
          "Folder Structure End State",
          "Steps",
          "Verification",
        ]
      },
      uri: "/advanced-tutorials/creating-a-static-html-app/about-me"
    };
  },
}
</script>

<template lang="pug">
page-tutorial-part(
  :part="part"
  :parts="parts"
  :toc="toc"
  :uri="uri"
)
  div.row
    div.col
      hr
      h2-hash Before You Get Started
      p-view-source-code
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
          p Create your home HTML file.
          p
            code-block(:data="example_code_html.home" language="html")
        li
          p Create your contact HTML file.
          p
            code-block(:data="example_code_html.contact" language="html")
        li
          p Create your about HTML file.
          p
            code-block(:data="example_code_html.about" language="html")
  div.row
    div.col
      hr
      h2-hash Verification
      p Stop your server (<code>ctrl + c</code>) if you still have it running from Part 2.
      ol
        li Run your app.
          p
            code-block-slotted
              template(v-slot:title) Terminal
              template(v-slot:code)
                | deno --allow-net --allow-read --allow-env app.ts
        li Go to <code>localhost:1447/</code> in your browser.
          p You should receive a response similar to the following:
          p
            img(:src="$conf.base_url + '/public/assets/img/example_code/advanced_tutorials/creating_a_static_html_app/about_me/1.png'")
        li Go to <code>localhost:1447/contact</code> in your browser.
          p You should receive a response similar to the following:
          p
            img(:src="$conf.base_url + '/public/assets/img/example_code/advanced_tutorials/creating_a_static_html_app/about_me/2.png'")
        li Go to <code>localhost:1447/about</code> in your browser.
          p You should receive a response similar to the following:
          p
            img(:src="$conf.base_url + '/public/assets/img/example_code/advanced_tutorials/creating_a_static_html_app/about_me/3.png'")
</template>
