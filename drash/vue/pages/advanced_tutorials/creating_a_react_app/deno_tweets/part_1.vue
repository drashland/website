<script>
export const resource = {
    paths: ["/advanced-tutorials/creating-a-react-app/deno-tweets/part-1"],
    meta: {
      title: "Creating A React App",
      subtitle: "Part 1: Creating The Server",
      source_code_uri: "/advanced_tutorials/creating_a_react_app/deno_tweets/part_1"
    }
}

export default {
  data() {
    return {
      example_code: this.$example_code['drash/example_code' + resource.meta.source_code_uri],
      part: 1,
      parts: 5,
      toc: {
        items: [
          "Before You Get Started",
          "Folder Structure End State",
          "Steps",
          "Verification",
        ]
      },
      uri: this.$conf.drash.base_url + "/#/advanced-tutorials/creating-a-react-app/deno-tweets"
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
      p The server you will create in this tutorial part will handle requests to a single resource. That resource will serve an HTML template and that HTML template will serve your React app.
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
          p
            code-block-slotted(language="javascript" line_highlight="3")
              template(v-slot:title) {{ example_code.app.filepath }}
              template(v-slot:code) {{ example_code.app.contents }}
          p When this file is run, it will load in Drash, set up your server, and start your server.
          p You will notice that there is an <code>import</code> statement for your resource file (highlighted). You will be creating this file in the next tutorial part. For now, you just need to make sure your server expects and registers it.
  div.row
    div.col
      hr
      h2-hash Verification
      p If you run your app in its current state, you will get an error. The TypeScript compiler will throw an error stating it cannot resolve your resource file. So, before you verify that your server is working, you need to comment out the lines relevant to your resource file.
      ol
        li
          p Comment out the code relevant to your resource file.
          p
            code-block-slotted(language="typescript" line_highlight="3,7")
              template(v-slot:title) /path/to/your/project/app.ts
              template(v-slot:code)
                | import { Drash } from "https://deno.land/x/drash/mod.ts";
                |
                | // import HomeResource from "./home_resource.ts";
                |
                | const server = new Drash.Http.Server({
                |   response_output: "text/html",
                |   // resources: [HomeResource],
                |   directory: ".",
                |   static_paths: ["/public"]
                | });
                |
                | server.run({
                |   hostname: "localhost",
                |   port: 1447
                | });
        li
          p Run your app.
          p
            code-block-slotted
              template(v-slot:title) Terminal
              template(v-slot:code)
                | deno run --allow-net app.ts
        li
          p Make a request using <code>curl</code> like below or go to <code>localhost:1447</code> in your browser.
          p
            code-block-slotted
              template(v-slot:title) Terminal
              template(v-slot:code)
                | curl localhost:1447
          p You should receive the following response:
            code-block-slotted(:header="false")
              template(v-slot:code)
                | Not Found
          p You will receive a <code>404 Not Found</code> error because your server does not have any resources. This is expected. You will be creating your resource next.
        li
          p Before moving on, uncomment the code you commented out.
          p
            code-block-slotted(language="typescript" line_highlight="3,7")
              template(v-slot:title) /path/to/your/project/app.ts
              template(v-slot:code)
                | import { Drash } from "https://deno.land/x/drash/mod.ts";
                |
                | import HomeResource from "./home_resource.ts";
                |
                | const server = new Drash.Http.Server({
                |   response_output: "text/html",
                |   resources: [HomeResource],
                |   directory: ".",
                |   static_paths: ["/public"]
                | });
                |
                | server.run({
                |   hostname: "localhost",
                |   port: 1447
                | });
</template>
