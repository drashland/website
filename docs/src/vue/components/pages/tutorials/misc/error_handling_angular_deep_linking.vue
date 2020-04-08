<script>
export const resource = {
  paths: ["/tutorials/misc/error-handling-angular-deep-linking"],
  meta: {
    title: "Error Handling: Angular Deep Linking",
  }
}

export default {
  data() {
    return {
      example_code: this.$app_data.example_code['/src/example_code/tutorials/misc/error_handling_angular_deep_linking'],
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
      p This tutorial assumes you have a working Angular app stacked with Deno and Drash.
      p This tutorial solves the issue commonly surfaced from <a href="https://angular.io/guide/deployment#server-configuration" target="_BLANK">https://angular.io/guide/deployment#server-configuration</a>.
      p In order to solve the issue, you have to override <code>Drash.Http.Server</code> and override its <code>handleHttpRequestError()</code> method.

  div.row
    div.col
      hr
      h2-hash Steps
      ol
        li 
          p Create your <code>app.ts</code> file.
          p
            code-block(:data="example_code.app" line_highlight="24-27")
          p Take note of the highlighted code. This code will help your Angular app by serving your default <code>index.html</code> file. Your default <code>index.html</code> file is the one you define for your Angular app. If a deep link is used, Drash will throw a <code>404</code> error in your Angular app. By adding the highlighted code, you tell Drash to reroute back to your Angular app's <code>index.html</code> on <code>404</code> errors.
</template>
