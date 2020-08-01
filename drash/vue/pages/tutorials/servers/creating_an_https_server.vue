<script>
const title = "Creating A HTTPS Server";

export const resource = {
  paths: ["/tutorials/servers/creating-an-https-server"],
  meta: {
    title: title,
    source_code_uri: "/tutorials/servers/creating_an_https_server"
  }
}

export default {
  data() {
    return {
      title: title,
      example_code: this.$example_code['drash/example_code/tutorials/servers/creating_an_https_server'],
      toc: [
        "Before You Get Started",
        "Server Syntax",
      ]
    };
  },
}
</script>

<template lang="pug">
page(
  :toc="toc"
)
  h2-hash Before You Get Started
  p The only difference between running an HTTP server and an HTTPS server is the method you use to run the server.
  p HTTP servers use <code>server.run()</code> and HTTPS servers use <code>server.runTLS()</code> with two extra configs: <code>certFile</code> and <code>keyFile</code>.
  hr
  h2-hash Server Syntax
  code-block(:title="example_code.app.filepath" language="typescript")
    | {{ example_code.app.contents }}
</template>
