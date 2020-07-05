<script>
export const resource = {
  paths: ["/tutorials/servers/creating-a-server"],
  meta: {
    title: "Creating A Server",
    source_code_uri: "/tutorials/servers/creating_a_server"
  }
}

export default {
  data() {
    return {
      example_code: this.$example_code['drash/example_code/tutorials/servers/creating_a_server'],
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
      p In this tutorial, you will create a very basic server that handles some common requests: <code>GET</code>, <code>POST</code>, <code>PUT</code>, and <code>DELETE</code>.
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
          p Create your resource file. Your resource file will be able to handle <code>GET</code>, <code>POST</code>, <code>PUT</code>, and <code>DELETE</code> requests to the <code>/</code> URI.
          p
            code-block(:data="example_code.home_resource")
        li
          p Create your app file. Your app file will register your resource via the <code>resources</code> config. By default, your Drash server will send <code>application/json</code> responses via the <code>response_output</code>. More information about using this config can be found in the <a :href=" '/#/advanced-tutorials/content-negotiation/user-profiles/introduction'">Advanced Tutorials: Content Negotiation</a> tutorial.
          p Optionally, you can <code>await</code> on the <code>server.run()</code> call in case you want to run subsequent code after the call. <code>await</code>ing for the <code>server.run()</code> call ensures that your server is running before any subsequent code runs.
          p
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
          p Using Postman (or similar app), make a <code>GET</code> request to <code>localhost:1447</code>. You should receive the following response:
          p
            img(:src="'/drash/assets/img/example_code/tutorials/creating_a_server/verification_1.png'")
        li
          p Make a <code>PUT</code> request. You should receive the following response:
          p
            img(:src="'/drash/assets/img/example_code/tutorials/creating_a_server/verification_2.png'")
        li
          p Make a <code>POST</code> request. You should receive the following response:
          p 
            img(:src="'/drash/assets/img/example_code/tutorials/creating_a_server/verification_3.png'")
        li
          p Make a <code>DELETE</code> request. You should receive the following response:
          p
            img(:src="'/drash/assets/img/example_code/tutorials/creating_a_server/verification_4.png'")
        li
          p Make a <code>PATCH</code> request. Since <code>PATCH</code> is not defined in your resource, it is not allowed; therefore, you should receive the following response:
          p
            img(:src="'/drash/assets/img/example_code/tutorials/creating_a_server/verification_5.png'")
