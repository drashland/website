<script>
const title = "Using Drash With Docker Compose";
const subtitle = "Part 6: (Optional) Linking JavaScripts and Stylesheets";
const baseUri = "/advanced-tutorials/using-drash-with-docker-compose";

export const resource = {
    paths: ["/advanced-tutorials/using-drash-with-docker-compose/part-6"],
    meta: {
      title: title,
      subtitle: subtitle,
    }
}

export default {
  data() {
    return {
      base_url: this.$conf.drash.base_url + "/#",
      base_uri: baseUri,
      example_code: this.$example_code['drash/example_code/advanced_tutorials/using_drash_with_docker_compose/part_6'],
      example_code_src: this.$example_code['drash/example_code/advanced_tutorials/using_drash_with_docker_compose/part_6/src'],
      example_code_html: this.$example_code['drash/example_code/advanced_tutorials/using_drash_with_docker_compose/part_6/html'],
      example_code_css: this.$example_code['drash/example_code/advanced_tutorials/using_drash_with_docker_compose/part_6/css'],
      example_code_js: this.$example_code['drash/example_code/advanced_tutorials/using_drash_with_docker_compose/part_6/js'],
      title: title,
      subtitle: subtitle,
      toc: [
        "Before You Get Started",
        "Folder Structure End State",
        "Steps",
        "Verification",
      ],
    };
  },
}
</script>

<template lang="pug">
page(
  :toc="toc"
  :base_url="base_url"
  :base_uri="base_uri"
  :subtitle="subtitle"
  :title="title"
)
  breadcrumbs(:base_url="base_url + base_uri" :part="6" :parts="6")
  hr
  h2-hash Before You Get Started
  p Now that you have a working Docker environment, you can try linking client-side assets.
  hr
  h2-hash Folder Structure End State
  code-block(:header="false" language="text" :line_numbers="false")
    | ▾ /path/to/your/project/
    |     ▾ .docker/
    |         ▾ conf/
    |             apache.conf
    |             nginx.conf
    |         apache.dockerfile
    |         drash.dockerfile
    |         nginx.dockerfile
    |     ▾ src/
    |         app.ts
    |         index.html
    |         index.js
    |         index.css
    |     docker-compose.yml
  hr
  h2-hash Steps
  ol
    li
      p Modify the content response type in your Drash server configs and update the <code>GET</code> request method.
      p
        code-block(title="/path/to/your/project/src/app.ts" language="typescript" line_highlight="10-14,19")
          | {{ example_code_src.app.contents }}
    li
      p Add the <code>--allow-read</code> flag in your <code>docker-compose.yml</code> file.
      p
        code-block(title="/path/to/your/project/docker-compose.yml" language="yml" line_highlight="9")
          | {{ example_code.docker_compose.contents }}
    li
      p Create your HTML file.
      p
        code-block(title="/path/to/your/project/src/index.html" language="html")
          | {{ example_code_html.index.contents }}
    li
      p Create your CSS file.
      p
        code-block(title="/path/to/your/project/src/index.css" language="css")
          | {{ example_code_css.index.contents }}
    li
      p Create your JS file.
      p
        code-block(title="/path/to/your/project/src/index.js" language="javascript")
          | {{ example_code_js.index.contents }}
    li
      p Update your Nginx configuration.
      p You only need to do this if you are using Nginx as your reverse proxy server.
      p Any request for a <code>.js</code> or <code>.css</code> file (e.g., <code>index.js</code>) will pass through this location block. This will make Nginx look for the requested file in the specified directory.
      p
        code-block(title="/path/to/your/project/.docker/conf/nginx.conf" language="nginx" line_highlight="3-5")
          | {{ example_code.nginx.contents }}
    li
      p Update your Apache configuration.
      p You only need to do this if you are using Apache as your reverse proxy server.
      p These new configuration lines will make sure any requests for a <code>.js</code> or a <code>.css</code> file will not be passed to your Drash server and will instead be handled by your Apache server.
      p You should note that the below does allow Apache to access the files as it is required for when a request for the JavaScripts or StyleSheets come in, but is very insecure as it is allowing full access to your source code. Ideally, you would place your assets in a <code>/public</code> directory and modify the below to match this. That way you would only allow your public files to be accessible and you would link your files in your HTML like so: <code>/public/index.css</code>.
      p
        code-block(title="/path/to/your/project/.docker/conf/apache.conf" language="apacheconf")
          | {{ example_code.apache.contents }}
  hr
  h2-hash Verification
  ol
    li
      p Build docker again. This will update the containers <code>Nginx</code> or <code>Apache</code> configuration file and also restart your server to register the new response type.
      p
        code-block(title="Terminal" language="shell-session")
          | $ docker-compose build
    li
      p Start docker.
      p
        code-block(title="Terminal" language="shell-session")
          | $ docker-compose up -d
    li
      p Go to <code>localhost:8080</code> in your browser and you should see the following:
      p
        img(:src="'/drash/assets/img/example_code/advanced_tutorials/creating_a_docker_container/docker_compose_setup/2.png'")
  div-alert-finished-tutorial-series
  hr
  breadcrumbs(:base_url="base_url + base_uri" :part="6" :parts="6")
</template>
