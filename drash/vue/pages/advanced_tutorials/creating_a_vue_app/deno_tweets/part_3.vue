<script>
export const resource = {
    paths: ["/advanced-tutorials/creating-a-vue-app/deno-tweets/part-3"],
    meta: {
      title: "Creating A Vue App",
      subtitle: "Part 3: Creating The Template",
      source_code_uri: "/advanced_tutorials/creating_a_vue_app/deno_tweets/part_3"
    }
}

export default {
  data() {
    return {
      example_code: this.$app_data.example_code['/src/example_code' + resource.meta.source_code_uri],
      part: 3,
      parts: 4,
      toc: {
        items: [
          "Before You Get Started",
          "Folder Structure End State",
          "Steps",
          "Verification",
        ]
      },
      uri: "/advanced-tutorials/creating-a-vue-app/deno-tweets"
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
          p Create your HTML file.
          p
            code-block(:data="example_code.index" language="html")
          p To make things easier, your HTML file comes with the embedded Twitter Timeline widget. This widget will show Deno's tweets.
          p You will notice there are two Vue template variables: <code>title</code> and <code>description</code>. You will be assigning these variables in the next tutorial part.
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
                | deno run --allow-net --allow-read app.ts
        li Go to <code>localhost:1447/</code> in your browser.
          p You should receive a response similar to the following:
          p
            img(:src="$conf.base_url + '/drash/assets/img/example_code/advanced_tutorials/creating_a_vue_app/deno_tweets/part_3.png'")
</template>
