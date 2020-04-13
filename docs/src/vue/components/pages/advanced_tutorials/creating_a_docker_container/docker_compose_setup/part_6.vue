<script>
export const resource = {
    paths: ["/advanced-tutorials/creating-a-docker-container/docker-compose-setup/part-6"],
    meta: {
        title: "Creating A Docker Container",
        subtitle: "Part 6: (Optional) Linking JavaScripts and Stylesheets",
        source_code_uri: "/advanced_tutorials/creating_a_docker_container/docker_compose_setup/part_6"
    }
}

export default {
  data() {
    return {
      example_code: this.$app_data.example_code['/src/example_code' + resource.meta.source_code_uri],
      example_code_src: this.$app_data.example_code['/src/example_code' + resource.meta.source_code_uri + '/src'],
      example_code_html: this.$app_data.example_code['/src/example_code' + resource.meta.source_code_uri + '/html'],
      example_code_css: this.$app_data.example_code['/src/example_code' + resource.meta.source_code_uri + '/css'],
      example_code_js: this.$app_data.example_code['/src/example_code' + resource.meta.source_code_uri + '/js'],
      part: 6,
      parts: 6,
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
      p Now that you have a working Docker environment, you can try linking client-side assets.
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
          p Modify the content response type in server
          p
            code-block-slotted(language="typescript" line_highlight="17")
              template(v-slot:title) /path/to/your/project/src/app.ts
              template(v-slot:code)
                | {{ example_code_src.app.contents }}
        li
          p Create your HTML file
          p
            code-block-slotted(language="html")
              template(v-slot:title) /path/to/your/project/src/index.html
              template(v-slot:code)
                | {{ example_code_html.index.contents }}
        li
          p Create your CSS file
          p
            code-block-slotted(language="css")
              template(v-slot:title) /path/to/your/project/src/index.css
              template(v-slot:code)
                | {{ example_code_css.index.contents }}
        li
          p Create your JS file
          p
            code-block-slotted(language="javascript")
              template(v-slot:title) /path/to/your/project/src/index.js
              template(v-slot:code)
                | {{ example_code_js.index.contents }}
        li
          p Update your Nginx configuration
          p You only need to do this if your are using Nginx as your reverse proxy server.
          p On any request for a <code>.js</code> or <code>.css</code>, for example <code>index.js</code>, will be passed through this location block which will tell the browser where to look, resulting in the path: <code>/var/www/src/index.js</code>. If you remember, the <code>src</code> directory inside the container holds your source code files.
          p
            code-block-slotted(language="shell" line_highlight="3-5")
              template(v-slot:title) /path/to/your/project/.docker/conf/nginx.conf
              template(v-slot:code)
                | {{ example_code.nginx.contents }}
        li
          p Update your Apache configuration
          p You only need to do this if you are using Apache as your reverse proxy server
  div.row
    div.col
      hr
      h2-hash Verification
      ol
        li
          p Build docker again. This will update the containers <code>Nginx</code> or <code>Apache</code> configuration file and also restart your server to register the new response type.
        li
          p Start docker
        li
          p Make a request using <code>curl</code> like below or go to <code>localhost:8080</code> in your browser.
          p
            code-block-slotted
              template(v-slot:title) Terminal
              template(v-slot:code)
                | ADD REAL COMMAND HERE
          p You should receive the following response:
          p
            code-block-slotted(:header="false")
              template(v-slot:code)
                | ADD REAL RESPONSE HERE
</template>
