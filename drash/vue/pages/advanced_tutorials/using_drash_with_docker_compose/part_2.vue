<script>
const title = "Using Drash With Docker Compose";
const subtitle = "Part 2: Creating The Services";
const baseUri = "/advanced-tutorials/using-drash-with-docker-compose";

export const resource = {
    paths: ["/advanced-tutorials/using-drash-with-docker-compose/part-2"],
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
      example_code: this.$example_code['drash/example_code/advanced_tutorials/using_drash_with_docker_compose/part_2'],
      example_code_src: this.$example_code['drash/example_code/advanced_tutorials/using_drash_with_docker_compose/part_2/src'],
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
  breadcrumbs(:base_url="base_url + base_uri" :part="2" :parts="6")
  hr
  h2-hash Before You Get Started
  p Now that you have a working Drash server, you can add it to the docker orchestration. In this tutorial part, you will be creating new services for Docker to build and start, such as a Drash container and an Nginx or Apache container.
  hr
  h2-hash Folder Structure End State
  code-block(:header="false" language="text" :line_numbers="false")
    | ▾ /path/to/your/project/
    |     ▾ src/
    |         app.ts
    |     docker-compose.yml
  hr
  h2-hash Steps
  ol
    li
      p Create the Compose file and create the service blocks.
      p You will notice that there are <code>.dockerfile</code> files mentioned, you will be creating this in the next tutorial part.
      p You can choose to ignore either the Nginx or Apache service block, depending on which one you wish to use for a reverse proxy
      code-block(title="/path/to/your/project/docker-compose.yml" language="yml")
        | {{ example_code.docker_compose.contents }}
      p You are mapping the <code>/path/to/your/project/src</code> directory to directories inside the containers (<code>/var/www/src</code>).
      p You have also specified a command for the Drash container to run when the container is up. In this case, that command will start the Drash server.
      p You should also note that the port for the Drash container is the same as the port the Drash server is running on in <code>/path/to/your/project/src/app.ts</code>.
  hr
  h2-hash Verification
  p If you run your Docker application in its current state, you will get an error because the <code>.dockerfile</code> files have not yet been created. Instead, verify your <code>docker-compose.yml</code> file is configured properly.
  ol
    li Check the file.
      code-block(title="Terminal" language="shell-session")
        | $ docker-compose config
      p You should not see any errors when running the above command. Instead, you should see the contents of your <code>docker-compose.yml</code> file. That is how you know it is properly configured.
  div-alert-next-tutorial-part
  hr
  breadcrumbs(:base_url="base_url + base_uri" :part="2" :parts="6")
</template>
