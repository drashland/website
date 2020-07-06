<script>
export const resource = {
    paths: ["/advanced-tutorials/creating-a-docker-container/docker-compose-setup/part-2"],
    meta: {
        title: "Creating A Docker Container",
        subtitle: "Part 2: Creating The Services",
        source_code_uri: "/advanced_tutorials/creating_a_docker_container/docker_compose_setup/part_2"
    }
}

export default {
  data() {
    return {
      example_code: this.$example_code['drash/example_code' + resource.meta.source_code_uri],
      part: 2,
      parts: 6,
      toc: {
        items: [
          "Before You Get Started",
          "Folder Structure End State",
          "Steps",
          "Verification",
        ]
      },
      uri: this.$conf.drash.base_url + "/#/advanced-tutorials/creating-a-docker-container/docker-compose-setup"
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
      p Now that you have a working Drash server, you can add it to the docker orchestration. In this tutorial part, you will be creating new services for Docker to build and start, such as a Drash container and an Nginx or Apache container.
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
          p Create the Compose file and create the service blocks.
          p You will notice that there are <code>.dockerfile</code> files mentioned, you will be creating this in the next tutorial part.
          p You can choose to ignore either the Nginx or Apache service block, depending on which one you wish to use for a reverse proxy
          code-block-slotted(language="shell")
            template(v-slot:title) /path/to/your/project/docker-compose.yml
            template(v-slot:code)
              | {{ example_code.docker_compose.contents }}
          p You are mapping the <code>/path/to/your/project/src</code> directory to directories inside the containers (<code>/var/www/src</code>).
          p You have also specified a command for the Drash container to run when the container is up. In this case, that command will start the Drash server.
          p You should also note that the port for the Drash container is the same as the port the Drash server is running on in <code>/path/to/your/project/src/app.ts</code>.
  div.row
    div.col
      hr
      h2-hash Verification
      p If you run your Docker application in its current state, you will get an error because the <code>.dockerfile</code> files have not yet been created. Instead, verify your <code>docker-compose.yml</code> file is configured properly.
      ol
        li Check the file.
          code-block-slotted
            template(v-slot:title) Terminal
            template(v-slot:code)
              | docker-compose config
          p You should not see any errors when running the above command. Instead, you should see the contents of your <code>docker-compose.yml</code> file. That is how you know it is properly configured.
</template>
