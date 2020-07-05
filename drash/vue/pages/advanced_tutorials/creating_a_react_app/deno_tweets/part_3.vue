<script>
export const resource = {
    paths: ["/advanced-tutorials/creating-a-react-app/deno-tweets/part-3"],
    meta: {
      title: "Creating A React App",
      subtitle: "Part 3: Creating The Template",
      source_code_uri: "/advanced_tutorials/creating_a_react_app/deno_tweets/part_3"
    }
}

export default {
  data() {
    return {
      example_code: this.$example_code['drash/example_code' + resource.meta.source_code_uri],
      part: 3,
      parts: 5,
      toc: {
        items: [
          "Before You Get Started",
          "Folder Structure End State",
          "Steps",
          "Verification",
        ]
      },
      uri: "/drash/#/advanced-tutorials/creating-a-react-app/deno-tweets"
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
            code-block-slotted(language="html")
              template(v-slot:title) {{ example_code.index.filepath }}
              template(v-slot:code) {{ example_code.index.contents }}
          p To make things easier, your HTML file comes with the embedded Twitter Timeline widget. This widget will show Deno's tweets.
          p You will notice there is a <code>&lt;script&gt;</code> tag. This points to your compiled React component that you will create in the later steps.
  div.row
    div.col
      hr
      h2-hash Verification
      p Stop your server (<code>ctrl + c</code>) if you still have it running from Part 2.
      p Unfortunately, if you try the run the app now and go to <code>localhost:1447/</code> in your browser, the page will error.
      p This is because all the content of the page is going to come from your React component which hasn't been created yet.
</template>
