<script>
export const resource = {
    paths: ["/advanced-tutorials/creating-a-react-app/deno-tweets/part-2"],
    meta: {
      title: "Creating A React App",
      subtitle: "Part 2: Creating The Resource",
      source_code_uri: "/advanced_tutorials/creating_a_react_app/deno_tweets/part_2"
    }
}

export default {
  data() {
    return {
      example_code: this.$app_data.example_code['/src/example_code' + resource.meta.source_code_uri],
      part: 2,
      parts: 5,
      toc: {
        items: [
          "Before You Get Started",
          "Folder Structure End State",
          "Steps",
          "Verification",
        ]
      },
      uri: "/advanced-tutorials/creating-a-react-app/deno-tweets"
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
      p Your server will not be able to serve your HTML file until you give it the resource that can do so. In Part 1, you made your server expect a home resource. You will create this file next and will verify your server runs properly with it in the Verification section.
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
          code-block(:data="example_code.home_resource" language="typescript")
          p Your home resource will serve an HTML file and that file will display your React app. You will be creating this HTML file in the next tutorial part.
  div.row
    div.col
      hr
      h2-hash Verification
      p Stop your server (<code>ctrl + c</code>) if you still have it running from Part 1. Now that you have your resource file that your server is expecting, you can start your server and make a <code>GET</code> request to it.
      ol
        li Run your app.
          p
            code-block-slotted
              template(v-slot:title) Terminal
              template(v-slot:code)
                | deno --allow-net --allow-read --allow-env app.ts
          p This time, your app requires three flags to run. You already know what the <code>--allow-net</code> and <code>--allow-env</code> flags do from Part 1.
          p <code>--allow-read</code> is required because your resource requires read access to read your <code>index.html</code> file. You can learn more about the <code>--allow-read</code> flag at <a href="https://deno.land/std/manual.md" target="_BLANK">https://deno.land/std/manual.md</a>.
        li Go to <code>localhost:1447/</code> in your browser.
          p You should receive the following response:
          p
            code-block-slotted(:header="false")
              template(v-slot:code)
                | Error reading HTML template.
          p This is the proper response since you have not written your <code>index.html</code> yet.
</template>
