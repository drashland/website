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
            template(v-slot:title) /path/to/your/project/.docker/conf/nginx.conf
            template(v-slot:code)
              | server {
              |     listen 80;
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
        li
          p Create your Apache configuration file.
          p If you are using Nginx instead, you can skip this step.
          p This file will make Apache act as a reverse proxy server, passing requests to the Drash server
          code-block-slotted(language="shell")
             template(v-slot:title) /path/to/your/project/.docker/conf/apache.conf
             template(v-slot:code)
               | LoadModule proxy_module /usr/local/apache2/modules/mod_proxy.so
               | LoadModule proxy_http_module modules/mod_proxy_http.so
               |
               | &lt;VirtualHost *:80&gt;
               |     ProxyPass / http://drash_app_drash:1447/
               | &lt;/VirtualHost&gt;
  div.row
    div.col
      hr
      h2-hash Verification
      p There is no verification available for this part
</template>
