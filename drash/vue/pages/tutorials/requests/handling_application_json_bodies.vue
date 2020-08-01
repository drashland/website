<script>
export const resource = {
  paths: ["/tutorials/requests/handling-json-bodies"],
  meta: {
    title: "Handling JSON Bodies",
    source_code_uri: "/tutorials/requests/handling_application_json_bodies"
  }
}

export default {
  data() {
    return {
      title: resource.meta.title,
      example_code: this.$example_code['drash/example_code/tutorials/requests/handling_application_json_bodies'],
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
  p Getting a value from an <code>application/json</code> request's body can be done using the following call:
  code-block-slotted(:header="false" language="typescript")
    | const param = this.request.getBodyParam("param_name");
  hr
  folder-structure-end-state
    | ▾ /path/to/your/project/
    |   app.ts
    |   home_resource.ts
  hr
  h2-hash Steps
  ol
    li
      p Create your resource file. You resource file will check for the <code>name</code> param in the request's body. If it exists, then it will return what was passed in. If it does not exist, then it will throw a <code>400 Bad Request</code> response.
      code-block(:title="example_code.home_resource.filepath" language="typescript")
        | {{ example_code.home_resource.contents }}
    li
      p Create your app file.
      code-block(:title="example_code.app.filepath" language="typescript")
        | {{ example_code.app.contents }}
  hr
  h2-hash Verification
  ol
    li Run your app.
      code-block(title="Terminal")
        | deno run --allow-net app.ts
    li
      p Using <code>curl</code> (or similar command), make a <code>POST</code> request to <code>localhost:1447/</code> and pass in <code>{"name":"denosaurus"}</code> in the request body.
      code-block(title="Terminal")
        | curl --header "Content-Type: application/json" \
        | --request POST \
        | --data '{"name":"denosaurus"}' \
        | localhost:1447
      p You should receive the following response:
      code-block(:header="false")
        | You passed in the following body param: denosaurus
    li
      p Make the same request, but change the data to use <code>username</code> instead of <code>name</code>.
      code-block(title="Terminal" line_highlight="3")
        | curl --header "Content-Type: application/json" \
        | --request POST \
        | --data '{"username":"denosaurus"}' \
        | localhost:1447
      p You should receive the following response:
      code-block(:header="false")
        | This resource requires the `name` body param.
</template>
