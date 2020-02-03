<script>
export const resource = {
  paths: ["/tutorials/requests/handling-request-params"],
  meta: {
    title: "Handling Request Params",
    source_code_uri: "/tutorials/requests/handling_request_params"
  }
}

export default {
  data() {
    return {
      example_code: this.$app_data.example_code['/src/example_code/tutorials/requests/handling_request_params'],
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
      p
        p There are multiple ways in which you can parse params in/on a request in Drash:
        ul
          li
            p Path Params (e.g., <code>/users/:id/profile</code>, <code>/users/{id}/profile</code>)
            p
              code-block-slotted(:header="false" language="typescript")
                template(v-slot:code)
                  | request.getPathParam("id") == "value of :id or {id}"
          li
            p URL Query Params (e.g., /products?name=beignet&action=purchase)
            p
              code-block-slotted(:header="false" language="typescript")
                template(v-slot:code)
                  | request.getQueryParam("name") == "beignet"
                  | request.getQueryParam("action") == "purchase"
          li
            p Body Params Using application/x-www-form-urlencoded (e.g., username=root&password=alpine)
            p
              code-block-slotted(:header="false" language="typescript")
                template(v-slot:code)
                  | request.getBodyParam("username") == "root"
                  | request.getBodyParam("password") == "alpine"
          li
            p Body Params Using application/json (e.g., {"username":"root","password":"alpine"})
            p 
              code-block-slotted(:header="false" language="typescript")
                template(v-slot:code)
                  | request.getBodyParam("username") == "root"
                  | request.getBodyParam("password") == "alpine"
          li
            p Body Files Using multipart/form-data (e.g., <code>curl -F 'my_file=@/path/to/my_file.txt' localhost:1447</code>)
            p
              code-block-slotted(:header="false" language="typescript")
                template(v-slot:code)
                  | request.getBodyFile("my_file") == {
                  |   filename: "test.txt",
                  |   type: "text/plain",
                  |   content: Uint8Array [ 104, 101, 108, 108, 111, 10 ]
                  | }
          li
            p Header Params (e.g., <code>{"Some-Header":"Some Value"}</code>)
            p
              code-block-slotted(:header="false" language="typescript")
                template(v-slot:code)
                  | request.getHeaderParam("Some-Header") == "Some Value"
                  | request.headers.get("Some-Header") == "Some Value") // <- default TypeScript way
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
        li Create your resource file.
          p
            code-block(:data="example_code.home_resource")
          p Your resource will check for the <code>something</code> param in the following locations:
          ul
            li Path
            li URL
            li Body
            li Header
        li Create your app file.
          code-block(:data="example_code.app")
  div.row
    div.col
      hr
      h2-hash Verification
      ol
        li Run your app.
          p
            code-block-slotted
              template(v-slot:title) Terminal
              template(v-slot:code)
                | deno --allow-net app.ts
          p-deno-flag-allow-net
        li Using Postman (or similar app), make a <code>GET</code> request to <code>localhost:1447/</code>.
          p You should receive the following response:
          a(:href="$conf.base_url + '/public/assets/img/example_code/tutorials/handling_request_params/verification_1.png'")
            img(:src="$conf.base_url + '/public/assets/img/example_code/tutorials/handling_request_params/verification_1.png'")
        li Make a <code>GET</code> request to <code>localhost:1447/hello</code>.
          p You should receive the following response:
          a(:href="$conf.base_url + '/public/assets/img/example_code/tutorials/handling_request_params/verification_2.png'")
            img(:src="$conf.base_url + '/public/assets/img/example_code/tutorials/handling_request_params/verification_2.png'")
        li Make a <code>GET</code> request to <code>localhost:1447/</code> with the following URL query param:
          code-block-slotted(:header="false")
            template(v-slot:code)
              | ?something=hello
          p You should receive the following response:
          a(:href="$conf.base_url + '/public/assets/img/example_code/tutorials/handling_request_params/verification_3.png'")
            img(:src="$conf.base_url + '/public/assets/img/example_code/tutorials/handling_request_params/verification_3.png'")
        li Make a <code>GET</code> request to <code>localhost:1447</code> with the following <code>x-www-form-urlencoded</code> body:
          code-block-slotted(:header="false")
            template(v-slot:code)
              | something=hello
          p You should receive the following response:
          a(:href="$conf.base_url + '/public/assets/img/example_code/tutorials/handling_request_params/verification_4.png'")
            img(:src="$conf.base_url + '/public/assets/img/example_code/tutorials/handling_request_params/verification_4.png'")
        li Make a <code>GET</code> request to <code>localhost:1447</code> with the following header:
          code-block-slotted(:header="false")
            template(v-slot:code)
              | {"Something":"Hello"}
          p You should receive the following response:
          a(:href="$conf.base_url + '/public/assets/img/example_code/tutorials/handling_request_params/verification_5.png'")
            img(:src="$conf.base_url + '/public/assets/img/example_code/tutorials/handling_request_params/verification_5.png'")
</template>
