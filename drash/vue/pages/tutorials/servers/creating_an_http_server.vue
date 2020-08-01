<script>
const title = "Creating An HTTP Server";

export const resource = {
  paths: ["/tutorials/servers/creating-an-http-server"],
  meta: {
    title: title,
  }
}

export default {
  data() {
    return {
      title: title,
      example_code: this.$example_code['drash/example_code/tutorials/servers/creating_a_server'],
      toc: [
        "Before You Get Started",
        "Folder Structure End State",
        "Steps",
        "Verification",
      ]
    };
  },
}
</script>

<template lang="pug">
page(
  :title="title"
  :toc="toc"
)
  h2-hash Before You Get Started
  p In this tutorial, you will create a very basic server that handles some common requests: <code>GET</code>, <code>POST</code>, <code>PUT</code>, and <code>DELETE</code>.
  p-view-source-code(:source_code_uri="$route.meta.source_code_uri")
  hr
  folder-structure-end-state
    | ▾ /path/to/your/project/
    |   app.ts
    |   home_resource.ts
  hr
  h2-hash Steps
  ol
    li
      p Create your resource file. Your resource file will be able to handle <code>GET</code>, <code>POST</code>, <code>PUT</code>, and <code>DELETE</code> requests to the <code>/</code> URI.
      code-block(:title="example_code.home_resource.filepath" language="typescript")
        | {{ example_code.home_resource.contents }}
    li
      p Create your app file. Your app file will register your resource via the <code>resources</code> config. By default, your Drash server will send <code>application/json</code> responses via the <code>response_output</code>.
      p Optionally, you can <code>await</code> on the <code>server.run()</code> call in case you want to run subsequent code after the call. <code>await</code>ing for the <code>server.run()</code> call ensures that your server is running before any subsequent code runs.
      code-block(:title="example_code.app.filepath" language="typescript")
        | {{ example_code.app.contents }}
  hr
  h2-hash Verification
  ol
    li
      p Run your app.
      code-block(title="Terminal")
        | deno run --allow-net app.ts
    li
      p Using <code>curl</code> (or similar command), make a <code>GET</code> request to <code>localhost:1447/</code>. You should receive the following response:
      code-block(title="Terminal")
        | curl --request GET localhost:1447
      p You should receive the following response:
      code-block(:header="false")
          | GET request received!
    li
      p Make a <code>PUT</code> request.
      code-block(title="Terminal")
        | curl --request PUT localhost:1447
      p You should receive the following response:
      code-block(:header="false")
          | PUT request received!
    li
      p Make a <code>POST</code> request.
      code-block(title="Terminal")
        | curl --request POST localhost:1447
      p You should receive the following response:
      code-block(:header="false")
          | POST request received!
    li
      p Make a <code>DELETE</code> request.
      code-block(title="Terminal")
        | curl --request DELETE localhost:1447
      p You should receive the following response:
      code-block(:header="false")
          | DELETE request received!
    li
      p Make a <code>PATCH</code> request.
      code-block(title="Terminal")
        | curl --request PATCH localhost:1447
      p Since <code>PATCH</code> is not defined in your resource, it is not allowed; therefore, you should receive the following response:
      code-block(:header="false")
        | Method Not Allowed
