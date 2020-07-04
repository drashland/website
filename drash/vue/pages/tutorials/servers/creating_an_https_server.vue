<script>
export const resource = {
  paths: ["/tutorials/servers/creating-an-https-server"],
  meta: {
    title: "Creating A HTTPS Server",
    source_code_uri: "/tutorials/servers/creating_an_https_server"
  }
}

export default {
  data() {
    return {
      example_code: this.$example_code['drash/example_code/tutorials/servers/creating_an_https_server'],
      toc: {
        items: [
          "Before You Get Started",
          "Server Syntax",
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
      p The only difference between running an HTTP server and an HTTPS server is the method you use to run the server.
      p HTTP servers use <code>server.run()</code> and HTTPS servers use <code>server.runTLS()</code> with two extra configs: <code>certFile</code> and <code>keyFile</code>.
  div.row
    div.col
      hr
      h2-hash Server Syntax
      p
        code-block(:data="example_code.app")
</template>
