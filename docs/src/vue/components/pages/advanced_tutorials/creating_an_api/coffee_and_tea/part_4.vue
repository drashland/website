<script>
export const resource = {
    paths: ["/advanced-tutorials/creating-an-api/coffee-and-tea/part-4"],
    meta: {
        title: "Creating An API",
        subtitle: "Part 4: Modifying The Response Schema",
        source_code_uri: "/advanced_tutorials/creating_an_api/coffee_and_tea/part_4"
    }
}

export default {
  data() {
    return {
      example_code: this.$app_data.example_code['/src/example_code' + resource.meta.source_code_uri],
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
      p Currently, when clients make requests to your records, they receive the following response schema for <code>200</code> responses ...
      p
        code-block-slotted(:header="false" language="javascript")
          template(v-slot:code)
            | {
            |   "id": 50,
            |   "name": "Earl Gray",
            |   "price": 4
            | }
      p ... and the following response schema for error responses (like the <code>404</code> response below) ...
      p
        code-block-slotted(:header="false" language="javascript")
          template(v-slot:code)
            | "Tea with ID \"2710\" not found."
      p This is perfectly fine to some clients, but to others it does not contain enough information. Some clients want a <code>200</code> response schema like ...
      p
        code-block-slotted(:header="false" language="javascript")
          template(v-slot:code)
            | {
            |   "status_code": 200,
            |   "status_text": "OK",
            |   "data": {
            |     "id": 50,
            |     "name": "Earl Gray",
            |     "price": 4
            |   },
            |   "request": {
            |     "method": "GET",
            |     "uri": "/tea/50"
            |   }
            | }
      p ... and an error response schema like ...
      p
        code-block-slotted(:header="false" language="javascript")
          template(v-slot:code)
            | {
            |   "status_code": 404,
            |   "status_text": "Not Found",
            |   "data": null,
            |   "request": {
            |     "method": "GET",
            |     "uri": "/tea/2710"
            |   }
            | }
      p In this tutorial part, you will override and replace <code>Drash.Http.Response</code> so it can send a more informative response schema.
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
          p Create your <code>response.ts</code> file that will be used to override <code>Drash.Http.Response</code>.
          p
            code-block(:data="example_code.response" language="typescript")
          p The only method you need to override is <code>generateResponse()</code>. The following methods and objects are accessible from the <code>Drash.Http.Response</code>.
          ul
            li
              code this.status_code
            li
              code this.getStatusMessage()
            li
              code this.body
            li
              code this.request
          p See <a href="/#/api-reference/http/response" target="_BLANK"><code>Drash.Http.Response</code></a> in the API Reference for more information on its members.
        li
          p Import your <code>response.ts</code> file and replace <code>Drash.Http.Response</code> in your <code>app.ts</code>.
          p
            code-block(:data="example_code.app" language="typescript" line_highlight="3-4")
          p Now, when your Drash server runs, it will use your response class instead of its original <code>Drash.Http.Response</code>.
  div.row
    div.col
      hr
      h2-hash Verification
      p Now that you have your new response object that can generate a more informative response schema, you can restart your server and test it out.
      ol
        li Run your app.
          p
            code-block-slotted
              template(v-slot:title) /path/to/your/project/app.ts
              template(v-slot:code)
                | deno run --allow-net --allow-read app.ts
        li Make a coffee request using <code>curl</code> like below or go to <code>localhost:1447/coffee/17</code> in your browser.
          p
            code-block-slotted
              template(v-slot:title) Terminal
              template(v-slot:code)
                | curl localhost:1447/coffee/17
          p You should receive the following response (we pretty-printed the response for you):
            code-block-slotted(:header="false" language="javascript")
              template(v-slot:code)
                | {
                |   "status_code": 200,
                |   "status_message": "OK",
                |   "data": {
                |     "id": 17,
                |     "name": "Light Roast: Breakfast Blend",
                |     "price": 2.25
                |   },
                |   "request": {
                |     "method": "GET",
                |     "uri": "/coffee/17"
                |   }
                | }
        li Make a bad coffee request to <code>localhost:1447/coffee/9000</code>. You should receive the following response (we pretty-printed the response for you):
          p
            code-block-slotted(:header="false" language="javascript")
              template(v-slot:code)
                | {
                |   "status_code": 404,
                |   "status_message": "Not Found",
                |   "data": "Coffee with ID \"9000\" not found.",
                |   "request": {
                |     "method": "GET",
                |     "uri": "/coffee/9000"
                |   }
                | }
        li Make a tea request to <code>localhost:1447/tea/50</code>. You should receive the following response (we pretty-printed the response for you):
          p
            code-block-slotted(:header="false" language="javascript")
              template(v-slot:code)
                | {
                |   "status_code": 200,
                |   "status_message": "OK",
                |   "data": {
                |     "id": 50,
                |     "name": "Earl Gray",
                |     "price": 4
                |   },
                |   "request": {
                |     "method": "GET",
                |     "uri": "/tea/50"
                |   }
                | }
        li Make a bad tea request to <code>localhost:1447/tea/1337</code>. You should receive the following response (we pretty-printed the response for you):
          p
            code-block-slotted(:header="false" language="javascript")
              template(v-slot:code)
                | {
                |   "status_code": 404,
                |   "status_message": "Not Found",
                |   "data": "Tea with ID \"1337\" not found.",
                |   "request": {
                |     "method": "GET",
                |     "uri": "/tea/1337"
                |   }
                | }
</template>
