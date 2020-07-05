<script>
export const resource = {
    paths: ["/advanced-tutorials/creating-an-api/coffee-and-tea/part-2"],
    meta: {
        title: "Creating An API",
        subtitle: "Part 2: Creating The Server",
        source_code_uri: "/advanced_tutorials/creating_an_api/coffee_and_tea/part_2"
    }
}

export default {
  data() {
    return {
      example_code: this.$example_code['drash/example_code' + resource.meta.source_code_uri],
      part: 2,
      parts: 4,
      toc: {
        items: [
          "Before You Get Started",
          "Folder Structure End State",
          "Steps",
          "Verification",
        ]
      },
      uri: "/drash/#/advanced-tutorials/creating-an-api/coffee-and-tea"
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
      p Now that you have your "database" records in place from Part 1, you need a server to handle requests for that data. The server you will create in this tutorial part will handle requests via the following resources:
      ul
        li
          code CoffeeResource
        li
          code TeaResource
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
          p Create your app file.
          p When this file is run, it will load in Drash, set up your server, and start your server.
          p You will notice that there are <code>import</code> statements for your resource files (highlighted). You will be creating these files in the next tutorial part. For now, you just need to make sure your server expects and registers them.
          p
            code-block-slotted(language="javascript" line_highlight="3-4,9-10")
              template(v-slot:title) {{ example_code.app.filepath }}
              template(v-slot:code) {{ example_code.app.contents }}
  div.row
    div.col
      hr
      h2-hash Verification
      p If you run your app in its current state, you will get an error. The TypeScript compiler will throw an error stating it cannot resolve your resource files. So, before you verify that your server is working, you need to comment out the lines relevant to your resource files.
      ol
        li Comment out the code relevant to your resource files.
          code-block-slotted(language="typescript" line_highlight="3-4,9-10")
            template(v-slot:title) /path/to/your/project/app.ts
            template(v-slot:code)
              | import { Drash } from "https://deno.land/x/drash/mod.ts";
              |
              | // import CoffeeResource from "./coffee_resource.ts";
              | // import TeaResource from "./tea_resource.ts";
              |
              | const server = new Drash.Http.Server({
              |   response_output: "application/json",
              |   resources: [
              |     // CoffeeResource,
              |     // TeaResource
              |   ],
              | });
              |
              | server.run({
              |   hostname: "localhost",
              |   port: 1447
              | });
        li Run your app.
          code-block-slotted
            template(v-slot:title) Terminal
            template(v-slot:code)
              | deno run --allow-net app.ts
        li Make a request using <code>curl</code> like below or go to <code>localhost:1447</code> in your browser.
          code-block-slotted
            template(v-slot:title) Terminal
            template(v-slot:code)
              | curl localhost:1447
          p You should receive the following response:
          code-block-slotted(:header="false")
            template(v-slot:code)
              | "Not Found"
          p You will receive a <code>404 Not Found</code> error because your server does not have any resources. This is expected. You will be creating your resources next.
        li Before moving on, uncomment the code you commented out.
          code-block-slotted(language="typescript" line_highlight="3-4,9-10")
            template(v-slot:title) /path/to/your/project/app.ts
            template(v-slot:code)
              | import { Drash } from "https://deno.land/x/drash/mod.ts";
              |
              | import CoffeeResource from "./coffee_resource.ts";
              | import TeaResource from "./tea_resource.ts";
              |
              | const server = new Drash.Http.Server({
              |   response_output: "application/json",
              |   resources: [
              |     CoffeeResource,
              |     TeaResource
              |   ],
              | });
              |
              | server.run({
              |   hostname: "localhost",
              |   port: 1447
              | });
</template>
