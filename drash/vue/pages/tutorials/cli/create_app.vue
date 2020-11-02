<script>
  import CodeBlock from "/common/vue/code_block.vue";


  export const resource = {
  paths: [
    "/tutorials/cli/create-app"
  ],
  meta: {
    title: "Create App",
  }
}

export default {
  data() {
    return {
      title: resource.meta.title,
      toc: [
        "Before You Get Started",
        "Usage",
      ]
    };
  },
  components: {
    CodeBlock
  }
}
</script>


<template lang="pug">
page(
  :base_url="this.$base_url"
  :title="title"
  :toc="toc"
)
  h2-hash Before You Get Started
  p The <code>create_app.ts</code> script can create a boilerplate project for you, so you can quickly get a drash application up and running, all with a simple command.
  hr
  h2-hash Usage
  p All commands will create the recommended files and directories to hold your project, and will include all the required code to start up a server in an instant.
  ul
    li Create an API boilerplate
      p This will create a boilerplate tailored to a Drash API
      code-block(title="Terminal" language="shell-session")
        | $ deno run --allow-run --allow-read --allow-write --allow-net https://deno.land/x/drash@{{ $conf.drash.latest_version }}/create_app.ts --api
    li Create a Web App boilerplate
      p This will create a boilerplate tailored to a full web application
      code-block(title="Terminal" language="shell-session")
        | $ deno run --allow-run --allow-read --allow-write --allow-net https://deno.land/x/drash@{{ $conf.drash.latest_version }}/create_app.ts --web-app
      ul
        li Include React with the frontend
          p Adding the `--with-react` flag will also setup your project with React, so you do not need to configure webpack or set it up yourself.
          code-block(title="Terminal" language="shell-session")
            | $ deno run --allow-run --allow-read --allow-write --allow-net https://deno.land/x/drash@{{ $conf.drash.latest_version }}/create_app.ts --web-app --with-react
        li Include Vue with the frontend
          p Adding the `--with-vue` flag will also setup your project with Vue, so you do not need to configure webpack or set it up yourself.
          code-block(title="Terminal" language="shell-session")
            | $ deno run --allow-run --allow-read --allow-write --allow-net https://deno.land/x/drash@{{ $conf.drash.latest_version }}/create_app.ts --web-app --with-vue

</template>
