<script>
export const resource = {
  paths: [
    "/tutorials/middleware/morgan-style-logging-middleware"
  ],
  meta: {
    title: "Morgan-Style Logging Middleware",
    source_code_uri: "/tutorials/middleware/morgan_style_logging_middleware"
  }
}

export default {
  data() {
    return {
      example_code: this.$example_code['drash/example_code/tutorials/middleware/morgan_style_logging_middleware'],
      toc: {
        items: [
          "Before You Get Started",
          "Folder Structure End State",
          "Steps",
          "Verification",
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
      p This very basic middleware was inspired by <a href="https://github.com/expressjs/morgan" target="_BLANK">expressjs/morgan</a>.
      p-view-source-code(:source_code_uri="$route.meta.source_code_uri")
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
          p Create your resource file.
          p
            code-block-slotted(language="typescript")
              template(v-slot:title) {{ example_code.home_resource.filepath }}
              template(v-slot:code) {{ example_code.home_resource.contents }}
        li
          p Create your middleware file. Your middleware will log information about the request on all requests.
          p
            code-block-slotted(language="typescript")
              template(v-slot:title) {{ example_code.morgan_style_logging_middleware.filepath }}
              template(v-slot:code) {{ example_code.morgan_style_logging_middleware.contents }}
        li Create your app file.
          p
            code-block-slotted(language="typescript")
              template(v-slot:title) {{ example_code.app.filepath }}
              template(v-slot:code) {{ example_code.app.contents }}
  div.row
    div.col
      hr
      h2-hash Verification
      p You can verify that your app's code works by making requests like the ones below. Since this tutorial's app sets <code>application/json</code> as the <code>response_output</code>, the server responds to requests with JSON by default.
      ol
        li
          p Run your app.
          p
            code-block-slotted
              template(v-slot:title) Terminal
              template(v-slot:code)
                | deno run --allow-net app.ts
        li
          p Make a request using <code>curl</code> like below or go to <code>localhost:1447/</code> in your browser.
          p
            code-block-slotted
              template(v-slot:title) Terminal
              template(v-slot:code)
                | curl localhost:1447/
          p <code>MorganStyleLoggingMiddleware</code> is run on every request because it was specified as server-level middleware. Therefore, it logs information about all requests. If you check your console after making the above request, you should see something similar to the following:
          p
            code-block-slotted(:header="false")
              template(v-slot:code)
                | 2020-02-03 12:47:01.162Z | INFO | Request received: GET /
                | 2020-02-03 12:47:01.163Z | INFO | Response: 200 OK
        li
          p Make another request, but to <code>localhost:1447/this-path-does-not-exist</code>.
          p
            code-block-slotted
              template(v-slot:title) Terminal
              template(v-slot:code)
                | curl localhost:1447/this-path-does-not-exist
          p
            code-block-slotted(:header="false")
              template(v-slot:code)
                | 2020-02-03 12:48:57.150Z | INFO | Request received: GET /this-path-does-not-exist
                | 2020-02-03 12:48:57.152Z | INFO | Response: 404 Not Found
</template>
