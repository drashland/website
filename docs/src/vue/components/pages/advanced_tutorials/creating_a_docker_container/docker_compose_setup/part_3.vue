<script>
export const resource = {
    paths: ["/advanced-tutorials/creating-a-docker-container/docker-compose-setup/part-3"],
    meta: {
        title: "Creating A Container in Docker Compose",
        subtitle: "Part 3: Creating The Dockerfile",
        source_code_uri: "/advanced_tutorials/creating_a_docker_container/docker_compose_setup/part_3"
    }
}

export default {
  data() {
    return {
      example_code: this.$app_data.example_code['/src/example_code' + resource.meta.source_code_uri],
      part: 3,
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
      p Now that you have your configuration setup for the container, you now need a Dockerfile for the container to build from. The Dockerfile you will create in this tutorial part will create a shell that has Deno installed.
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
          p Create your Dockerfile.
          p This file is being used by the Drash service block you added in the last part, inside of <code>docker-compose.yml</code>.
          p You may change the version of Deno to install to suit your requirements.
          code-block-slotted(language="shell")
            template(v-slot:title) /path/to/your/project/.docker/drash.dockerfile
            template(v-slot:code)
              | FROM debian:stable-slim
              |
              | RUN apt update -y
              | RUN apt install bash curl unzip -y
              |
              | RUN curl -fsSL https://deno.land/x/install/install.sh | DENO_INSTALL=/usr/local sh -s v0.39.0
              | RUN export DENO_INSTALL="/root/.local"
              | RUN export PATH="$DENO_INSTALL/bin:$PATH"
  div.row
    div.col
      hr
      h2-hash Verification
      p Now that you have created your Dockerfile, you can start the Docker process and test it out.
      ol
        li Build the container(s).
          code-block-slotted
            template(v-slot:title) Terminal
            template(v-slot:code)
              | docker-compose build
        li Start Docker. Running without the <code>-d</code> option will allow you to see all output of the container and Drash server.
          code-block-slotted
            template(v-slot:title) Terminal
            template(v-slot:code)
              | docker-compose up
        li You should eventually see once the Drash server has started, that the server is listening.
          code-block-slotted
            template(v-slot:title) Terminal
            template(v-slot:code)
              | ADD DATA HERE
        li Make a request using <code>curl</code> like below or go to <code>localhost:1447</code> in your browser.
          code-block-slotted
            template(v-slot:title) Terminal
            template(v-slot:code)
              | curl localhost:1447
          p You should receive the following response:
          code-block-slotted
            template(v-slot:title) Terminal
            template(v-slot:code)
              | docker-compose build
</template>
