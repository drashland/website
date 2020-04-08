<script>
export const resource = {
    paths: ["/advanced-tutorials/creating-a-docker-container/docker-compose-setup/part-3"],
    meta: {
        title: "Creating A Container in Docker Compose",
        subtitle: "Part 3: Creating The Dockerfiles",
        source_code_uri: "/advanced_tutorials/creating_a_docker_container/docker_compose_setup/part_3"
    }
}

export default {
  data() {
    return {
      example_code: this.$app_data.example_code['/src/example_code' + resource.meta.source_code_uri],
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
      p Now that you have your <code>docker-compose.yml</code> file set up, you now need Dockerfiles for the containers to build from. The Dockerfiles you will create in this tutorial part will be used by each conntainer to build from.
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
          p Create the Drash Dockerfile.
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
        li
          p Create the Nginx Dockerfile
          p If you are instead using Apache, go to the next step below.
          p This file will be used by the Nginx container.
          code-block-slotted(language="shell")
            template(v-slot:title) /path/to/your/project/.docker/nginx.dockerfile
            template(v-slot:code)
              | FROM nginx:latest
              |
              | RUN apt update
              |
              | COPY ./.docker/conf/nginx.conf /etc/nginx/conf.d/default.conf
              |
              | ENTRYPOINT ["nginx"]
              | CMD ["-g", "daemon off;"]
          p You will create the configuration file in the next part that Nginx will use to pass connections to the Drash server
        li
          p Create the Apache Dockerfile
          p If you are using Nginx instead, you can skip this step.
          p This file will be used by the Apache container
          code-block-slotted(language="shell")
            template(v-slot:title) /path/to/your/project/.docker/apache.dockerfile
            template(v-slot:code)
              | FROM httpd:2.4
              |
              | RUN apt update -y
              | COPY .docker/conf/apache.conf /usr/local/apache2/conf/demoapache.conf
              | RUN echo "\nInclude /usr/local/apache2/conf/demoapache.conf" >> /usr/local/apache2/conf/httpd.conf
  div.row
    div.col
      hr
      h2-hash Verification
      p There are no verifications for this stage
</template>
