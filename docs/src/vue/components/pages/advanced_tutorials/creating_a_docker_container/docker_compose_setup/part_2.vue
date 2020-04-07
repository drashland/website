<script>
export const resource = {
    paths: ["/advanced-tutorials/creating-a-docker-container/docker-compose-setup/part-2"],
    meta: {
        title: "Creating A Container in Docket Compose",
        subtitle: "Part 2: Creating The Services",
        source_code_uri: "/advanced_tutorials/creating_a_docker_container/docker_compose_setup/part_2"
    }
}

export default {
  data() {
    return {
      example_code: this.$app_data.example_code['/src/example_code' + resource.meta.source_code_uri],
      part: 2,
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
// TODO :: Add apache service block
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
      p Now that you have a working Drash server, you can start adding this to the docker orchestration. You will be creating new services for Docker to build and start, such as a Drash container, and an Nginx or Apache container.
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
          p Create the file and create the service blocks.
          p You will notice that there are Dockerfiles mentioned, you will be creating this in the next tutorial part.
          p You can choose to ignore either the Nginx or Apache service block, depending on which one you wish to use for a reverse proxy
          code-block-slotted(language="shell")
            template(v-slot:title) /path/to/your/project/docker-compose.yml
            template(v-slot:code)
              | version: '3'
              |
              | services:
              |
              |   nginx:
              |     container_name: drash_app_nginx
              |     build:
              |       context: .
              |       dockerfile: .docker/nginx.dockerfile
              |     volumes:
              |       - ./src:/var/www/src
              |     working_dir: /var/www/src
              |     depends_on:
              |       - drash
              |     ports:
              |       - "9002:9002"
              |     networks:
              |       - drash-app-network
              |
              |   drash:
              |     container_name: drash_app_drash
              |     build:
              |       context: .
              |       dockerfile: .docker/drash.dockerfile
              |     volumes:
              |       - ./src:/var/www/src
              |     working_dir: /var/www/src
              |     ports:
              |       - "1447:1447"
              |     command: bash -c "deno --allow-net --allow-env app.ts"
              |     networks:
              |       - drash-app-network
              |
              | networks:
              |   drash-app-network:
              |     driver: bridge
          p You are mapping the <code>src</code> directory to a directory inside the containers (<code>/var/www/src</code>).
          p You have also specified a command for the Drash container to run when the container is up. In this case, that command will start the Drash server.
          p You should also note that the port for the Drash container is the same as the port the drash server is running on in <code>src/app.ts</code>
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
          p You should see no errors when running the above command and instead see the contents of the file itself.
</template>
