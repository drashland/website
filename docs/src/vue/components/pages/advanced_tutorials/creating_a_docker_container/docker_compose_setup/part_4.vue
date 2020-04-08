<script>
export const resource = {
    paths: ["/advanced-tutorials/creating-a-docker-container/docker-compose-setup/part-4"],
    meta: {
        title: "Creating A Docker Container",
        subtitle: "Part 4: Creating The Proxy Server Configuration",
        source_code_uri: "/advanced_tutorials/creating_a_docker_container/docker_compose_setup/part_4"
    }
}

export default {
  data() {
    return {
      example_code: this.$app_data.example_code['/src/example_code' + resource.meta.source_code_uri],
      example_code_conf: this.$app_data.example_code['/src/example_code' + resource.meta.source_code_uri + '/.docker/conf' ],
      part: 4,
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
      p Now that you have your <code>Dockerfile</code> files set up for the containers, you now need to create the configuration file for your selected proxy server. If you are using Nginx, then you will create an Nginx configuration file. If you are using Apache, then you will create an Apache configuration file.
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
          p Create your Nginx configuration file.
          p
            em If you are using Apache as your proxy server, then skip this step and follow the next step below.
          p This file is to configure Nginx to make it act as the proxy server.
          code-block-slotted(language="shell")
            template(v-slot:title) /path/to/your/project/.docker/conf/nginx.conf
            template(v-slot:code)
              | {{ example_code_conf.nginx.contents }}
          p Any HTTP request will be routed to the Drash server.
        li
          p Create your Apache configuration file.
          p This file will make Apache act as a reverse proxy server, passing requests to the Drash server
          code-block-slotted(language="shell")
            template(v-slot:title) /path/to/your/project/.docker/conf/apache.conf
            template(v-slot:code)
              | {{ example_code_conf.apache.contents }}
  div.row
    div.col
      hr
      h2-hash Verification
      p There are no verification steps for this tutorial part.
</template>
