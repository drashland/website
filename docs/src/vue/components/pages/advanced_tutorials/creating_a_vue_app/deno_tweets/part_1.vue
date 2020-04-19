<script>
export const resource = {
    paths: ["/advanced-tutorials/creating-a-vue-app/deno-tweets/part-1"],
    meta: {
      title: "Creating A Vue App",
      subtitle: "Part 1: Creating The Server",
      source_code_uri: "/advanced_tutorials/creating_a_vue_app/deno_tweets/part_1"
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
      p The server you will create in this tutorial part will handle requests to a single resource. That resource will serve an HTML template and that HTML template will serve your Vue app.
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
          code-block(:data="example_code.app" language="javascript" line_highlight="3")
          p When this file is run, it will load in Drash, set up your server, and start your server.
          p You will notice that there is an <code>import</code> statement for your resource file (highlighted). You will be creating this file in the next tutorial part. For now, you just need to make sure your server expects and registers it.
  div.row
    div.col
      hr
      h2-hash Verification
      p If you run your app in its current state, you will get an error. The TypeScript compiler will throw an error stating it cannot resolve your resource file. So, before you verify that your server is working, you need to comment out the lines relevant to your resource file.
      ol
        li Comment out the code relevant to your resource file.
          code-block-slotted(language="typescript" line_highlight="3,8")
            template(v-slot:title) /path/to/your/project/app.ts
            template(v-slot:code)
              | import { Drash } from "https://deno.land/x/drash/mod.ts";
              |
              | // import HomeResource from "./home_resource.ts";
              |
              | const server = new Drash.Http.Server({
              |   response_output: "text/html",
              | //  resources: [HomeResource],
              |   directory: "/path/to/your/project",
              |   static_paths: ["/public"]
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
              | deno --allow-net --allow-env app.ts
          p When you run your app, you should see the following:
          code-block-slotted
            template(v-slot:title) Terminal
            template(v-slot:code)
              | Deno server started at localhost:1447.
        li Make a request using <code>curl</code> like below or go to <code>localhost:1447</code> in your browser.
          code-block-slotted
            template(v-slot:title) Terminal
            template(v-slot:code)
              | curl localhost:1447
          p You should receive the following response:
          code-block-slotted(:header="false")
            template(v-slot:code)
              | Not Found
          p You will receive a <code>404 Not Found</code> error because your server does not have any resources. This is expected. You will be creating your resource next.
        li Before moving on, uncomment the code you commented out.
          code-block-slotted(language="typescript" line_highlight="3,8")
            template(v-slot:title) /path/to/your/project/app.ts
            template(v-slot:code)
              | import { Drash } from "https://deno.land/x/drash/mod.ts";
              |
              | import HomeResource from "./home_resource.ts";
              |
              | const server = new Drash.Http.Server({
              |   response_output: "text/html",
              |   resources: [HomeResource],
              |   directory: "/path/to/your/project",
              |   static_paths: ["/public"]
              | });
              |
              | server.run({
              |   hostname: "localhost",
              |   port: 1447
              | });
</template>
