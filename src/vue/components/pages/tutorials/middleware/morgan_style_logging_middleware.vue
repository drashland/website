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
      example_code: this.$app_data.example_code['/src/example_code/tutorials/middleware/morgan_style_logging_middleware'],
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
      p This middleware is inspired by expressjs/morgan.
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
            code-block(:data="example_code.home_resource")
        li
          p Create your middleware file. Your middleware will log information about the request on all requests.
          p
            code-block(:data="example_code.morgan_style_logging_middleware")
        li Create your app file. Your app file will load in Drash, your resource, your middleware, set up your server, and start your server.
          p
            code-block(:data="example_code.app")
  div.row
    div.col
      hr
      h2-hash Verification
      p You can verify that your app's code works by making requests like the ones below. Since this tutorial's app sets <code>application/json</code> as the <code>response_output</code>, the server responds to requests with JSON by default.
      ol
        li Run your app.
          p
            code-block-slotted
              template(v-slot:title) Terminal
              template(v-slot:code)
                | deno --allow-net --allow-env app.ts
          p-deno-flag-allow-net
          p-deno-flag-allow-env-drash-test
        li Make a request using <code>curl</code> like below or go to <code>localhost:1447/</code> in your browser.
          p
            code-block-slotted
              template(v-slot:title) Terminal
              template(v-slot:code)
                | curl localhost:1447/
          p <code>MorganStyleLoggingMiddleware</code> is run on every request because it was specified as server-level middleware. Therefore, it logs information about all requests. If you check your console after making the above request, you should see something similar to the following:
          p
            code-block-slotted
              template(v-slot:title) Terminal
              template(v-slot:code)
                | 2020-02-03 05:13:55.563Z | INFO | GET /

</template>
