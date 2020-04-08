<script>
export const resource = {
    paths: ["/advanced-tutorials/creating-a-docker-container/docker-compose-setup/part-3"],
    meta: {
        title: "Creating A Docker Container",
        subtitle: "Part 3: Creating The Dockerfiles",
        source_code_uri: "/advanced_tutorials/creating_a_docker_container/docker_compose_setup/part_3"
    }
}

export default {
  data() {
    return {
      example_code: this.$app_data.example_code['/src/example_code' + resource.meta.source_code_uri],
      example_code_docker: this.$app_data.example_code['/src/example_code' + resource.meta.source_code_uri + '/.docker'],
      part: 3,
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
      p Now that you have your <code>docker-compose.yml</code> file set up, you now need your <code>.dockerfile</code> files (also known as <code>Dockerfile</code> files). These files will tell Docker how it should build. The <code>Dockerfile</code> files you will create in this tutorial part will be used by each container.
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
          p Create the Drash <code>Dockerfile</code>.
          p This file will be used by the Drash service block you added in the last tutorial part &mdash; inside of your <code>docker-compose.yml</code> file.
          p
            em
              strong Note that you can change the version of Deno to install to suit your requirements.
          code-block-slotted(language="shell")
            template(v-slot:title) /path/to/your/project/.docker/drash.dockerfile
            template(v-slot:code)
              | {{ example_code_docker.drash.contents }}
        li
          p Create the Nginx <code>Dockerfile</code>.
          p
            em If you prefer to use Apache, then skip this step and follow the next step below.
          p This file will be used by the Nginx container.
          code-block-slotted(language="shell")
            template(v-slot:title) /path/to/your/project/.docker/nginx.dockerfile
            template(v-slot:code)
              | {{ example_code_docker.nginx.contents }}
          p You will create the configuration file for Nginx in the next tutorial part. Nginx will use the configuration file pass connections to the Drash server.
        li
          p Create the Apache <code>Dockerfile</code>.
          p This file will be used by the Apache container.
          code-block-slotted(language="shell")
            template(v-slot:title) /path/to/your/project/.docker/apache.dockerfile
            template(v-slot:code)
              | {{ example_code_docker.apache.contents }}
          p You will create the configuration file for Apache in the next tutorial part. Apache will use the configuration file pass connections to the Drash server.
  div.row
    div.col
      hr
      h2-hash Verification
      p There are no verification steps for this tutorial part.
</template>
