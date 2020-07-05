<script>
export const resource = {
    paths: ["/advanced-tutorials/creating-a-vue-app/deno-tweets/part-4"],
    meta: {
      title: "Creating A Vue App",
      subtitle: "Part 4: Creating The Vue App",
      source_code_uri: "/advanced_tutorials/creating_a_vue_app/deno_tweets/part_4"
    }
}

export default {
  data() {
    return {
      example_code: this.$example_code['drash/example_code' + resource.meta.source_code_uri],
      part: 4,
      parts: 4,
      toc: {
        items: [
          "Before You Get Started",
          "Folder Structure End State",
          "Steps",
          "Verification",
        ]
      },
      uri: this.$conf.drash.base_url + "/#/advanced-tutorials/creating-a-vue-app/deno-tweets"
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
      p By now, you should have your server serving an HTML file; and that HTML file should be displaying Deno's tweets. In this next tutorial part, you will create the Vue app and assign the following Vue variables: <code>title</code> and <code>description</code>.
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
          p Create your Vue app file.
          p
            code-block-slotted(language="javascript")
              template(v-slot:title) /path/to/your/project/public/vue_app.js
              template(v-slot:code)
                | console.log("vue_app.js is now included!");
                |
                | const app = new Vue({
                |   el: '#vue_app',
                |   data: {
                |     title: "Deno",
                |     description: "A secure runtime for JavaScript and TypeScript"
                |   }
                | })
  div.row
    div.col
      hr
      h2-hash Verification
      p Stop your server (<code>ctrl + c</code>) if you still have it running from Part 2.
      ol
        li
          p Run your app.
          p
            code-block-slotted
              template(v-slot:title) Terminal
              template(v-slot:code)
                | deno run --allow-net --allow-read app.ts
        li
          p Go to <code>localhost:1447/</code> in your browser. You should receive a response similar to the following:
          p
            img(:src="'/drash/assets/img/example_code/advanced_tutorials/creating_a_vue_app/deno_tweets/part_4.png'")
</template>
