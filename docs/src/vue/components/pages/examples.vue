<script>
export const resource = {
  paths: ["/examples"],
  meta: {
    title: "Examples",
    source_code_uri: "/examples",
  }
}

export default {
  data() {
    return {
      show: 1,
    };
  }
}
</script>

<template lang="pug">
page
  div.row
    div.col
      hr
      div.row
        div.col
          h2 Examples
          ul
            li
              p
                a.cursor-pointer(@click="show = 1") Example 1: GET /
            li
              p
                a.cursor-pointer(@click="show = 2") Example 2: GET /?response_content_type=text/html
            li
              p
                a.cursor-pointer(@click="show = 3") Example 3: GET /?response_content_type=text/xml
            li
              p
                a.cursor-pointer(@click="show = 4") Example 4: GET /my-html-resource
            li
              p
                a.cursor-pointer(@click="show = 5") Example 5: GET /my-html-resource?response_content_type=application/json
      div.row(v-show="show == 1")
        div.col-6
          h2 Code
          p
            code-block-slotted(:header="false" language="typescript")
              template(v-slot:code)
                | import { Drash } from "https://deno.land/x/drash/mod.ts";
                |
                | class HomeResource extends Drash.Http.Resource {
                |
                |   static paths = ["/"];
                |
                |   public GET() {
                |     this.response.body = "GET request received!";
                |     if (this.response.headers.get("Content-Type") == "text/xml") {
                |       this.response.body = "&lt;body&gt;GET request received!&lt/body&gt";
                |     }
                |     return this.response;
                |   }
                | }
                |
                | const server = new Drash.Http.Server({
                |   address: "localhost:1447",
                |   response_output: "application/json"
                |   resources: [HomeResource],
                | });
                |
                | server.run();
        div.col-6
          h2 Output
          p.output
            img(:src="$conf.base_url + '/public/assets/img/examples/1.png'")
      div.row(v-show="show == 2")
        div.col-6
          h2 Code
          p
            code-block-slotted(:header="false" language="typescript")
              template(v-slot:code)
                | import { Drash } from "https://deno.land/x/drash/mod.ts";
                |
                | class HomeResource extends Drash.Http.Resource {
                |
                |   static paths = ["/"];
                |
                |   public GET() {
                |     this.response.body = "GET request received!";
                |     if (this.response.headers.get("Content-Type") == "text/xml") {
                |       this.response.body = "&lt;body&gt;GET request received!&lt/body&gt";
                |     }
                |     return this.response;
                |   }
                | }
                |
                | const server = new Drash.Http.Server({
                |   address: "localhost:1447",
                |   response_output: "application/json"
                |   resources: [HomeResource],
                | });
                |
                | server.run();
        div.col-6
          h2 Output
          p.output
            img(:src="$conf.base_url + '/public/assets/img/examples/2.png'")
      div.row(v-show="show == 3")
        div.col-6
          h2 Code
          p
            code-block-slotted(:header="false" language="typescript")
              template(v-slot:code)
                | import { Drash } from "https://deno.land/x/drash/mod.ts";
                |
                | class HomeResource extends Drash.Http.Resource {
                |
                |   static paths = ["/"];
                |
                |   public GET() {
                |     this.response.body = "GET request received!";
                |     if (this.response.headers.get("Content-Type") == "text/xml") {
                |       this.response.body = "&lt;body&gt;GET request received!&lt/body&gt";
                |     }
                |     return this.response;
                |   }
                | }
                |
                | const server = new Drash.Http.Server({
                |   address: "localhost:1447",
                |   response_output: "application/json"
                |   resources: [HomeResource],
                | });
                |
                | server.run();
        div.col-6
          h2 Output
          p.output
            img(:src="$conf.base_url + '/public/assets/img/examples/3.png'")
      div.row(v-show="show == 4")
        div.col-6
          h2 Code
          p
            code-block-slotted(:header="false" language="typescript")
              template(v-slot:code)
                | import { Drash } from "https://deno.land/x/drash/mod.ts";
                |
                | class MyHtmlResource extends Drash.Http.Resource {
                |
                |   static paths = ["/my-html-resource"];
                |
                |   public GET() {
                |     this.response.body = `
                | &lt;!DOCTYPE html&gt;
                | &lt;html class="h-full w-full"&gt;
                |   &lt;head&gt;
                |     &lt;meta charset="utf-8"/&gt;
                |     &lt;meta name="viewport" content="width=device-width, minimum-scale=1.0, user-scalable=no"/&gt;
                |     &lt;link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/tailwindcss/dist/tailwind.min.css"&gt;
                |     &lt;title&gt;HTML&lt;/title&gt;
                |   &lt;/head&gt;
                |   &lt;body&gt;
                |     &lt;div style="max-width: 640px; margin: 50px auto;"&gt;
                |       &lt;h1 class="text-5xl"&gt;HTML&lt;/h1&gt;
                |       &lt;p&gt;This resource shows HTML.&lt;/p&gt;
                |     &lt;/div&gt;
                |   &lt;/body&gt;
                | &lt;/html&gt;
                | `;
                |     return this.response;
                |   }
                | }
                |
                | const server = new Drash.Http.Server({
                |   address: "localhost:1447",
                |   response_output: "text/html"
                |   resources: [MyHtmlResource],
                | });
                |
                | server.run();
        div.col-6
          h2 Output
          p.output
            img(:src="$conf.base_url + '/public/assets/img/examples/4.png'")
      div.row(v-show="show == 5")
        div.col-6
          h2 Code
          p
            code-block-slotted(:header="false" language="typescript")
              template(v-slot:code)
                | import { Drash } from "https://deno.land/x/drash/mod.ts";
                |
                | class MyHtmlResource extends Drash.Http.Resource {
                |
                |   static paths = ["/my-html-resource"];
                |
                |   public GET() {
                |     this.response.body = `
                | &lt;!DOCTYPE html&gt;
                | &lt;html class="h-full w-full"&gt;
                |   &lt;head&gt;
                |     &lt;meta charset="utf-8"/&gt;
                |     &lt;meta name="viewport" content="width=device-width, minimum-scale=1.0, user-scalable=no"/&gt;
                |     &lt;link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/tailwindcss/dist/tailwind.min.css"&gt;
                |     &lt;title&gt;HTML&lt;/title&gt;
                |   &lt;/head&gt;
                |   &lt;body&gt;
                |     &lt;div style="max-width: 640px; margin: 50px auto;"&gt;
                |       &lt;h1 class="text-5xl"&gt;HTML&lt;/h1&gt;
                |       &lt;p&gt;This resource shows HTML.&lt;/p&gt;
                |     &lt;/div&gt;
                |   &lt;/body&gt;
                | &lt;/html&gt;
                | `;
                |     return this.response;
                |   }
                |
                | const server = new Drash.Http.Server({
                |   address: "localhost:1447",
                |   response_output: "text/html"
                |   resources: [MyHtmlResource],
                | });
                |
                | server.run();
        div.col-6
          h2 Output
          p.output
            img(:src="$conf.base_url + '/public/assets/img/examples/5.png'")
</template>

<style lang="scss" scoped>
  a {
    color: #ff7700 !important;
    &:hover {
      color: #0056b3 !important;
      text-decoration: underline !important;
    }
  }
  code {
    background: transparent !important;
    color: #333 !important;
  }
  .cursor-pointer {
    cursor: pointer;
  }
  .output {
    border: 1px solid #cdcdcd;
  }
</style>
