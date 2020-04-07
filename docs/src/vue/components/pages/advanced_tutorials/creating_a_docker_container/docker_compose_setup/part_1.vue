<script>
export const resource = {
    paths: ["/advanced-tutorials/creating-a-docker-container/docker-compose-setup/part-1"],
    meta: {
      title: "Creating A Container in Docker Compose",
      subtitle: "Part 1: Creating The Source Code",
      source_code_uri: "/advanced_tutorials/creating_a_docker_container/docker_compose_setup/part_1"
    }
}

export default {
  data() {
    return {
      example_code: this.$app_data.example_code['/src/example_code' + resource.meta.source_code_uri],
      part: 1,
      parts: 4,
      toc: {
        items: [
          "Before You Get Started",
          "Folder Structure End State",
          "Steps",
          "Verification",
        ]
      },
      uri: "/advanced-tutorials/creating-a-docker-container/docker-compose-setup"
    };
  },
}
// TODO :: Adjust the header (path to file) for first step, to say: /path/to/your/project/src/app.ts
</script>

<template lang="pug">
page-tutorial-part(
  :part="part"
  :parts="parts"
  :toc="toc"
  :uri="uri"
)
  div.row
    div.col
      hr
      h2-hash Before You Get Started
      p You will be creating a basic Drash server. If you are unsure on how to create a Drash server then first read the
        a(href="/tutorials/servers/creating-a-server")  Creating a Server Section
      p-view-source-code
  div.row
    div.col
      hr
      div-folder-structure-end-state(:code_block_data="example_code.folder_structure")
  div.row
    div.col
      hr
      h2-hash Steps
      ol
        li Create the <code>app.ts</code> file.
          code-block(:data="example_code.app" language="javascript")
  div.row
    div.col
      hr
      h2-hash Verification (optional)
      p We should verify that the server is working by running it.
      ol
        li Start the server.
          code-block-slotted
            template(v-slot:title) Terminal
            template(v-slot:code)
              | deno --allow-net --allow-env app.ts
          p When you start your server, you should see the following:
          code-block-slotted
            template(v-slot:title) Terminal
            template(v-slot:code)
              | Deno server started at localhost:1447
</template>
