<script>
export const resource = {
    paths: ["/advanced-tutorials/creating-a-docker-container/docker-compose-setup/part-4"],
    meta: {
        title: "Creating A Container in Docker Compose",
        subtitle: "Part 4: Creating The Proxy Server Configuration",
        source_code_uri: "/advanced_tutorials/creating_a_docker_container/docker_compose_setup/part_4"
    }
}

export default {
  data() {
    return {
      example_code: this.$app_data.example_code['/src/example_code' + resource.meta.source_code_uri],
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
// TODO :: Add step for apache configuration
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
      p Now that you have your Dockerfiles setup for the containers, you now need to create configuration file for your proxy server.
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
          p If you are instead using Apache as your proxy server, go the the step below.
          p This file is to configure Nginx to make it act as the proxy server.
          code-block-slotted(language="shell")
            template(v-slot:title) /path/to/your/project/.docker/conf/drash-app.conf
            template(v-slot:code)
              | server {
              |     listen 9002;
              |     location / {
              |       proxy_http_version 1.1;
              |       proxy_set_header Upgrade $http_upgrade;
              |       proxy_set_header Connection 'upgrade';
              |       proxy_set_header Host $host;
              |       proxy_set_header Origin "";
              |       proxy_pass http://drash_app_drash:1447;
              |     }
              | }
          p Any HTTP request will be routed to the Drash server.
  div.row
    div.col
      hr
      h2-hash Verification
      p There is no verification available for this part
</template>
