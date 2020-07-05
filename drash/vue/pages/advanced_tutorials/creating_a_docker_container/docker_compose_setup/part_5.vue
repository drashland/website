<script>
export const resource = {
    paths: ["/advanced-tutorials/creating-a-docker-container/docker-compose-setup/part-5"],
    meta: {
        title: "Creating A Docker Container",
        subtitle: "Part 5: Starting The Environment",
        source_code_uri: "/advanced_tutorials/creating_a_docker_container/docker_compose_setup/part_5"
    }
}

export default {
  data() {
    return {
      example_code: this.$example_code['drash/example_code' + resource.meta.source_code_uri],
      part: 5,
      parts: 6,
      toc: {
        items: [
          "Before You Get Started",
          "Folder Structure End State",
          "Steps",
          "Verification",
        ]
      },
      uri: "/drash/#/advanced-tutorials/creating-a-docker-container/docker-compose-setup"
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
      p Now that you have your configuration set up for the containers, you can now build and start your Docker environment.
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
          p Build the containers. This could take up to a few minutes.
          code-block-slotted(language="shell")
            template(v-slot:title) Terminal
            template(v-slot:code)
              | docker-compose build
  div.row
    div.col
      hr
      h2-hash Verification
      ol
        li
          p Start Docker. Running without the <code>-d</code> option will allow you to see all output of the container and Drash server.
          p
            code-block-slotted
              template(v-slot:title) Terminal
              template(v-slot:code)
                | docker-compose up
        li
          p Make a request using <code>curl</code> like below or go to <code>localhost:8080</code> in your browser.
          p
            code-block-slotted
              template(v-slot:title) Terminal
              template(v-slot:code)
                | curl localhost:8080
          p You should receive the following response:
          p
            code-block-slotted(:header="false")
              template(v-slot:code)
                | "Hello World!"
</template>
