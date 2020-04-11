<script>
export const resource = {
  paths: ["/tutorials/misc/pretty-links"],
  meta: {
    title: "Pretty Links",
  }
}

export default {
  data() {
    return {
      example_code: this.$app_data.example_code['/src/example_code/tutorials/misc/pretty_links'],
      toc: {
        items: [
          "Before You Get Started",
          "Steps",
        ]
      }
    };
  },
}
</script>

<template lang="pug">
page-tutorial(
  :toc="toc"
)
  div.row
    div.col
      hr
      h2-hash Before You Get Started
      p This tutorial assumes you have read the 
        a-base-url(href="/tutorials/servers/serving-static-paths") Servers: Serving Static Paths tutorial.
      p This tutorial solves the issue of always having to specify <code>index.html</code> at the end of a static path URI.

  div.row
    div.col
      hr
      h2-hash Steps
      ol
        li 
          p Create your <code>app.ts</code> file.
          p
            code-block-slotted(language="typescript" line_highlight="10")
              template(v-slot:title) /path/to/your/project/app.ts
              template(v-slot:code)
                | import Drash from "https://deno.land/x/drash/mod.ts";
                |
                | import HomeResource from "./home_resource.ts";
                |
                | const server = new Drash.Http.Server({
                |   address: "localhost:1447",
                |   directory: "/path/to/your/project",
                |   resources: [HomeResource],
                |   response_output: "text/html",
                |   pretty_links: true,
                |   static_paths: ["/public"]
                | });
                |
                | server.run();
          p Take note of the highlighted code. Using this config will allow you to NOT have to specify <code>index.html</code> for any static path.
</template>
