<script>
export const resource = {
  paths: ["/tutorials/cookies/response-cookies"],
  meta: {
    title: "Response Cookies",
    tutorial_title: "Response Cookies",
    source_code_uri: "/tutorials/cookies/response_cookies"
  }
}

export default {
  data() {
    return {
      example_code: this.$example_code['drash/example_code/tutorials/cookies/response_cookies'],
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
      p In this tutorial, you will learn how to set cookies on a response object and delete them.
      p Drash uses <a href="https://deno.land/std/http/cookie.ts" target="_BLANK">cookie.ts</a> from Deno Standard Modules' HTTP module for its cookie schema.
      p Setting a cookie on a response object can be done using the following call:
      p
        code-block-slotted(:header="false" language="typescript")
          template(v-slot:title)
          template(v-slot:code)
            | this.response.setCookie({
            |   name: "MINI",
            |   value: "Cooper",
            |   expiry: 'some date'
            |   ...
            | });
      p Deleting a cookie from a response object can be done using the following call:
      p
        code-block-slotted(:header="false" language="typescript")
          template(v-slot:title)
          template(v-slot:code)
            | this.response.delCookie("cookie_name");
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
          p Create your resource file. This file will set the <code>my_cookie</code> cookie on the response object.
          code-block(:data="example_code.home_resource")
        li
          p Create your app file.
          code-block(:data="example_code.app")
  div.row
    div.col
      hr
      h2-hash Verification
      ol
        li
          p Run your app.
          p
            code-block-slotted
              template(v-slot:title) Terminal
              template(v-slot:code)
                | deno run --allow-net app.ts
        li
          p Using <code>curl</code> (or similar command), make a <code>GET</code> request to <code>localhost:1447/</code>.
          p
            code-block-slotted
              template(v-slot:title) Terminal
              template(v-slot:code)
                | curl --verbose localhost:1447
          p You should receive the following response:
            code-block-slotted(:header="false" line_highlight="11")
              template(v-slot:code)
                | *   Trying 127.0.0.1...
                | * TCP_NODELAY set
                | * Connected to localhost (127.0.0.1) port 1447 (#0)
                | > GET / HTTP/1.1
                | > Host: localhost:1447
                | > User-Agent: curl/7.64.1
                | > Accept: */*
                | >
                | < HTTP/1.1 200 OK
                | < content-type: application/json
                | < set-cookie: my_cookie=chocolate
                | < content-length: 24
                | <
                | * Connection #0 to host localhost left intact
                | "my_cookie cookie sent!"* Closing connection 0
        li
          p Using <code>curl</code> (or similar command), make a <code>DELETE</code> request to <code>localhost:1447/</code>.
          p
            code-block-slotted
              template(v-slot:title) Terminal
              template(v-slot:code)
                | curl --request DELETE --verbose localhost:1447
          p You should receive the following response:
            code-block-slotted(:header="false" line_highlight="11")
              template(v-slot:code)
                | *   Trying 127.0.0.1...
                | * TCP_NODELAY set
                | * Connected to localhost (127.0.0.1) port 1447 (#0)
                | > DELETE / HTTP/1.1
                | > Host: localhost:1447
                | > User-Agent: curl/7.64.1
                | > Accept: */*
                | >
                | < HTTP/1.1 200 OK
                | < content-type: application/json
                | < set-cookie: my_cookie=; Expires=Thu, 01 Jan 1970 00:00:00 GMT
                | < content-length: 39
                | <
                | * Connection #0 to host localhost left intact
                | "my_cookie cookie was set and deleted!"* Closing connection 0
</template>
