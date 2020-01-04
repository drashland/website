<script>
export const resource = {
    paths: ["/advanced-tutorials/creating-an-api/coffee-and-tea/part-1"],
    meta: {
      title: "Creating An API",
      subtitle: "Part 1: Simulate Database Records",
      source_code_uri: "/advanced_tutorials/creating_an_api/coffee_and_tea/part_1"
    }
}

export default {
  data() {
    return {
      example_code: this.$app_data.example_code['/src/example_code' + resource.meta.source_code_uri],
      part: 1,
      parts: 4,
      toc: {
        items: [
          "Before You Get Started",
          "Folder Structure End State",
          "Steps",
          "Verification",
        ]
      },
      uri: "/advanced-tutorials/creating-an-api/coffee-and-tea"
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
      p Before you start building your application, you need the data that will drive this tutorial. For simplicity, you will simulate retrieving records from a database. You will pretend that you have queried a database for coffee and tea records. This data will be parsable as JSON.
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
        li Create the <code>coffee.json</code> file.
          code-block(:data="example_code.coffee" language="javascript")
        li Create the <code>tea.json</code> file.
          code-block(:data="example_code.tea" language="javascript")
  div.row
    div.col
      hr
      h2-hash Verification (optional)
      p Since you just made JSON files and will be parsing these files as JSON in a later part, you should test that deno can parse it as JSON.
      ol
        li Open up the deno REPL by typing in <code>deno</code> in your terminal.
          code-block-slotted
            template(v-slot:title) Terminal
            template(v-slot:code)
              | deno
              | >
        li Parse your files.
          code-block-slotted
            template(v-slot:title) Terminal
            template(v-slot:code)
              | > let coffee = Deno.readFileSync("./coffee.json");
              | undefined
              |
              | > let tea = Deno.readFileSync("./tea.json");
              | undefined
              |
              | > const decoder = new TextDecoder();
              | undefined
              |
              | > JSON.parse(decoder.decode(coffee));
              | { 17: { id: 17, name: "Light Roast: Breakfast Blend", price: 2.25 }, 28: { id: 28, name: "Medium Roast: Classico", price: 2.5 }, 32: { id: 32, name: "Medium Roast: Premium Single Origin (Sumatra)", price: 3.5 } }
              |
              | > JSON.parse(decoder.decode(tea));
              | { 50: { id: 50, name: "Earl Gray", price: 4 }, 68: { id: 68, name: "Citrus Chamomile", price: 3.5 }, 83: { id: 83, name: "Imperial Blend", price: 4.5 } }
              |
              | >
</template>
