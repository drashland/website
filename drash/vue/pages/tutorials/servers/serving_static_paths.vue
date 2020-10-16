<script>
export const resource = {
  paths: ["/tutorials/servers/serving-static-paths"],
  meta: {
    title: "Serving Static Paths",
    source_code_uri: "/tutorials/servers/serving_static_paths"
  }
}

export default {
  data() {
    return {
      title: resource.meta.title,
      example_code: this.$example_code['drash/example_code/tutorials/servers/serving_static_paths'],
      example_code_public: this.$example_code['drash/example_code/tutorials/servers/serving_static_paths/public'],
      toc: [
        "Before You Get Started",
        "Folder Structure End State",
        "Steps",
        "Verification"
      ]
    };
  },
}
</script>

<template lang="pug">
page(
  :base_url="this.$base_url"
  :title="title"
  :toc="toc"
)
  h2-hash Before You Get Started
  p In this tutorial, you will build a very simple HTML page that can serve a CSS file.
  hr
  folder-structure-end-state
    | ▾ /path/to/your/project/
    |   ▾ public/
    |     style.css
    |   app.ts
    |   home_resource.ts
  hr
  h2-hash Steps
  ol
    li
      p Create your app file. The <code>static_paths</code> config tells your Drash server what paths on your filesystem contain static files that can be served to clients. Ultimately, your Drash server will prefix the <code>directory</code> config with your paths in your <code>static_paths</code> config. For example, your Drash server will take a request to <code>/public/assets/css/style.css</code> and resolve it to <code>{directory_config}/public/assets/css/style.css</code>.
      code-block(:title="example_code.app.filepath" language="typescript" line_highlight="6,9")
        | {{ example_code.app.contents }}
    li
      p Create your <code>style.css</code> file in your static directory.
      code-block(:title="example_code_public.style.filepath" language="css")
        | {{ example_code_public.style.contents }}
    li
      p Create your resource file. Your resource file will serve HTML; and your HTML will reference <code>/public/style.css</code>.
      code-block(:title="example_code.home_resource.filepath" language="typescript")
        | {{ example_code.home_resource.contents }}
  hr
  h2-hash Verification
  ol
    li
      p Run your app.
      code-block(title="Terminal")
        | deno run --allow-net --allow-read app.ts
    li
      p Go to <code>localhost:1447</code> in your browser. You should receive the following response:
      p
        strong(style="color: #ff0000; font-family: 'Times New Roman', 'Times'") This is my title and it is red.
</template>
