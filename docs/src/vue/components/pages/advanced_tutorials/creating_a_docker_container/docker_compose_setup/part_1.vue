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
      parts: 5,
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
      p You will be creating a basic Drash server. If you haven't read the #[a( href="/#/tutorials/servers/creating-a-server") Creating A Server] section then do so before reading this tutorial.
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
        li
          p Create a <code>src</code> directory.
          p
            code-block-slotted
              template(v-slot:title) Terminal
              template(v-slot:code)
                | mkdir src
        li
          p Create the <code>app.ts</code> file.
          p
            code-block-slotted(language="typescript")
              template(v-slot:title) /path/to/your/project/src/app.ts
              template(v-slot:code)
                | {{ example_code.app.contents }}
  div.row
    div.col
      hr
      h2-hash Verification
      p You should verify that the server is working by running it.
      ol
        li Start the server.
          code-block-slotted
            template(v-slot:title) Terminal
            template(v-slot:code)
              | deno --allow-net --allow-env src/app.ts
          p When you start your server, you should see the following:
          code-block-slotted
            template(v-slot:title) Terminal
            template(v-slot:code)
              | Deno server started at localhost:1447
</template>
