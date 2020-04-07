<script>
export const resource = {
    paths: ["/advanced-tutorials/creating-a-docker-container/docker-compose-setup/part-2"],
    meta: {
        title: "Creating A Container in Docket Compose",
        subtitle: "Part 2: Creating The Service",
        source_code_uri: "/advanced_tutorials/creating_a_docker_container/docker_compose_setup/part_2"
    }
}

export default {
  data() {
    return {
      example_code: this.$app_data.example_code['/src/example_code' + resource.meta.source_code_uri],
      part: 2,
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
      p Now that we have a working Drash server, we can start adding this to the docker orchestration. You will be creating a new service for Docker to build and start.
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
          p Create the service block.
          p If you have an existing <code>docker-compose.yml</code> file, then append the below block into the list of services.
          p This file defines what services the docker environment will build and use.
          p You will notice that there is a Dockerfile mentioned. You will be creating this in the next tutorial part.
          code-block(:data="example_code.docker_compose" language="javascript")
          p We are mapping the <code>src</code> directory to a directory inside the container (<code>/var/www/drash</code>).
          p We have also specified a command for the container to run when the container is up. In this case, that command still start the Drash server.
          p You should also note that the ports should be the same as the port your Drash server is listening on.
  div.row
    div.col
      hr
      h2-hash Verification
      p If you run your docker application in its current state, you will get an error because the Dockerfile for the container hasn't been created yet. What you can do instead is verify the <code>docker-compose.yml</code> file is correct.
      ol
        li Check the file.
          code-block-slotted
            template(v-slot:title) Terminal
            template(v-slot:code)
              | docker-compose config
          p You should see no errors when running the above command and instead the contents of the file itself.
</template>
