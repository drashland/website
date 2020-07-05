<script>
export const resource = {
    paths: ["/advanced-tutorials/creating-a-static-html-app/about-me/part-2"],
    meta: {
      title: "Creating A Static HTML App",
      subtitle: "Part 2: Creating The Resources",
      source_code_uri: "/advanced_tutorials/creating_a_static_html_app/about_me/part_2"
    }
}

export default {
  data() {
    return {
      example_code: this.$example_code['drash/example_code' + resource.meta.source_code_uri],
      part: 2,
      parts: 3,
      toc: {
        items: [
          "Before You Get Started",
          "Folder Structure End State",
          "Steps",
          "Verification",
        ]
      },
      uri: this.$conf.drash.base_url + "/#/advanced-tutorials/creating-a-static-html-app/about-me"
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
      p Your server will not be able to serve HTML until you give it the resources that can do so. In Part 1, you made your server expect three resources. You will create these files next and will verify your server runs properly with them in the Verification section.
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
          p Create your home resource file.
          p
            code-block-slotted(language="typescript")
              template(v-slot:title) {{ example_code.home_resource.filepath }}
              template(v-slot:code) {{ example_code.home_resource.contents }}
          p Your home resource will serve an HTML file with the following text: This is the home page!
        li
          p Create your contact resource file.
          p
            code-block-slotted(language="typescript")
              template(v-slot:title) {{ example_code.contact_resource.filepath }}
              template(v-slot:code) {{ example_code.contact_resource.contents }}
          p Your contact resource will serve an HTML file with the following text: This is the contact page!
        li
          p Create your about resource file.
          p
            code-block-slotted(language="typescript")
              template(v-slot:title) {{ example_code.about_resource.filepath }}
              template(v-slot:code) {{ example_code.about_resource.contents }}
          p Your about resource will serve an HTML file with the following text: This is the about page!
  div.row
    div.col
      hr
      h2-hash Verification
      p Stop your server (<code>ctrl + c</code>) if you still have it running from Part 1. Now that you have your resource files that your server is expecting, you can start your server and make a <code>GET</code> requests to them.
      ol
        li Run your app.
          p
            code-block-slotted
              template(v-slot:title) Terminal
              template(v-slot:code)
                | deno run --allow-net --allow-read app.ts
          p This time, your app requires three flags to run. You already know what the <code>--allow-net</code> and <code>--allow-env</code> flags do from Part 1.
          p <code>--allow-read</code> is required because your resources require read access to read your HTML files that you will be creating in the next tutorial part. You can learn more about the <code>--allow-read</code> flag at <a href="https://deno.land/std/manual.md" target="_BLANK">https://deno.land/std/manual.md</a>.
        li Go to <code>localhost:1447/</code> in your browser.
          p You should receive the following response for all of your resources:
          p
            code-block-slotted(:header="false")
              template(v-slot:code)
                | Error reading HTML template.
          p This is the proper response since you have not written your HTML files yet.
</template>
