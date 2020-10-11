<script>
const title = "Using Drash With Docker Compose";
const subtitle = "Part 1: Creating The Source Code";
const baseUri = "/advanced-tutorials/using-drash-with-docker-compose";

export const resource = {
    paths: ["/advanced-tutorials/using-drash-with-docker-compose/part-1"],
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
      example_code: this.$example_code['drash/example_code/advanced_tutorials/using_drash_with_docker_compose/part_1'],
      example_code_src: this.$example_code['drash/example_code/advanced_tutorials/using_drash_with_docker_compose/part_1/src'],
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
  breadcrumbs(:base_url="base_url + base_uri" :part="1" :parts="6")
  hr
  h2-hash Before You Get Started
  p You will be creating a basic Drash server. If you haven't read the #[a( href="/#/tutorials/servers/creating-a-server") Creating A Server] section then do so before reading this tutorial.
  hr
  h2-hash Folder Structure End State
  code-block(:header="false" language="text" :line_numbers="false")
    | ▾ /path/to/your/project/
    |     ▾ src/
    |         app.ts
  hr
  h2-hash Steps
  ol
    li
      p Create your <code>src</code> directory.
      p
        code-block(title="Terminal")
          | mkdir src
    li
      p Create your app file.
      p Your app file will contain a single resource: <code>HomeResource</code>.
      p
        code-block(title="/path/to/your/project/src/app.ts" language="typescript")
          | {{ example_code_src.app.contents }}
  hr
  h2-hash Verification
  p Verify that your app is working by running it.
  ol
    li Run your app.
      code-block(title="Terminal")
        | deno run --allow-net src/app.ts
  div-alert-next-tutorial-part
  hr
  breadcrumbs(:base_url="base_url + base_uri" :part="1" :parts="6")
</template>
