<script>
export const resource = {
    paths: ["/advanced-tutorials/creating-an-api/coffee-and-tea/part-3"],
    meta: {
        title: "Creating An API",
        subtitle: "Part 3: Creating The Resources",
        source_code_uri: "/advanced_tutorials/creating_an_api/coffee_and_tea/part_3"
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
      p Your server will not be able to handle requests for coffee and tea records until you give it resources that can send your records back to clients. In Part 2, you made your server expect a coffee and tea resource. You will create these files next and will verify your server runs properly with them in the Verification section.
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
          p Create your coffee resource file.
          code-block(:data="example_code.coffee_resource" language="typescript")
          p Your coffee resource will try to match the specified coffee <code>id</code> path param to a coffee ID in your "database". If the <code>id</code> is matched, then the record will be sent as the response. If not, then an error response will be sent.
        li
          p Create your tea resource file.
          code-block(:data="example_code.tea_resource" language="typescript")
          p Your tea resource will try to match the specified tea <code>id</code> path param to a tea ID in your "database". If the <code>id</code> is matched, then the record will be sent as the response. If not, then an error response will be sent.
  div.row
    div.col
      hr
      h2-hash Verification
      p Stop your server (<code>ctrl + c</code>) if you still have it running from Part 2. Now that you have your resource files that your server is expecting, you can start your server and make <code>GET</code> requests to them.
      ol
        li Run your app.
          p
            code-block-slotted
              template(v-slot:title) Terminal
              template(v-slot:code)
                | deno run --allow-net --allow-read app.ts
          p This time, your app requires two flags to run. You already know what the <code>--allow-net</code> flag does from Part 2. <code>--allow-read</code> is required because your resource requires read access to read your <code>coffee.json</code> and <code>tea.json</code> files. You can learn more about the <code>--allow-read</code> flag at <a href="https://deno.land/std/manual.md" target="_BLANK">https://deno.land/std/manual.md</a>.
        li Make a coffee request using <code>curl</code> like below or go to <code>localhost:1447/coffee/17</code> in your browser.
          p
            code-block-slotted
              template(v-slot:title) Terminal
              template(v-slot:code)
                | curl localhost:1447/coffee/17
          p You should receive the following response (we pretty-printed the response for you):
          p
            code-block-slotted(:header="false" language="javascript")
              template(v-slot:code)
                | {
                |   "id": 17,
                |   "name": "Light Roast: Breakfast Blend",
                |   "price": 2.25
                | }
        li Make a coffee request to <code>localhost:1447/coffee/32</code>. You should receive the following response (we pretty-printed the response for you):
          p
            code-block-slotted(:header="false" language="javascript")
              template(v-slot:code)
                | {
                |   "id": 32,
                |   "name": "Medium Roast: Premium Single Origin (Sumatra)",
                |   "price": 3.5
                | }
        li Make a bad coffee request to <code>localhost:1447/coffee/9000</code>. You should receive the following response (we pretty-printed the response for you):
          p
            code-block-slotted(:header="false" language="javascript")
              template(v-slot:code)
                | "Coffee with ID \"9000\" not found."
        li Make a tea request to <code>localhost:1447/tea/50</code>. You should receive the following response (we pretty-printed the response for you):
          p
            code-block-slotted(:header="false" language="javascript")
              template(v-slot:code)
                | {
                |   "id": 50,
                |   "name": "Earl Gray",
                |   "price": 4
                | }
        li Make a tea request to <code>localhost:1447/tea/68</code>. You should receive the following response (we pretty-printed the response for you):
          p
            code-block-slotted(:header="false" language="javascript")
              template(v-slot:code)
                | {
                |   "id": 68,
                |   "name": "Citrus Chamomile",
                |   "price": 3.5
                | }
        li Make a bad tea request to <code>localhost:1447/tea/2710</code>.
          p You should receive the following response (we pretty-printed the response for you):
          p
            code-block-slotted(:header="false" language="javascript")
              template(v-slot:code)
                | "Tea with ID \"2710\" not found."
</template>
