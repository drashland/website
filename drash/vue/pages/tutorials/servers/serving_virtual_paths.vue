<script>
export const resource = {
  paths: ["/tutorials/servers/serving-virtual-paths"],
  meta: {
    title: "Serving Virtual Paths",
    source_code_uri: "/tutorials/servers/serving_virtual_paths"
  }
}

export default {
  data() {
    return {
      title: resource.meta.title,
      example_code_front_end: this.$example_code['drash/example_code/tutorials/servers/serving_virtual_paths/front_end'],
      example_code_back_end: this.$example_code['drash/example_code/tutorials/servers/serving_virtual_paths/back_end'],
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
  p In this tutorial, you will build a very simple HTML page that can serve a CSS file that is defined at a virtual path. A virtual path is a path that maps to a physical path on your server and has its own set of permissions. With virtual paths, you can keep your project's folder structure flexible and secure.
  p Virtual paths are enabled by defining them in the <code>static_paths</code> server config.
  p Using virtual paths requires the <code>directory</code> server config. This config helps the server map virtual paths to physical paths on your server.
  hr
  folder-structure-end-state
    | ▾ /path/to/your/project/
    |   ▾ back_end/
    |     app.ts
    |     home_resource.ts
    |   ▾ front_end/
    |     style.css
  hr
  h2-hash Steps
  ol
    li
      p Create your app file. You will be using the <code>static_paths</code> config to define your virtual paths. Also, you will define the <code>directory</code> config to help your server map virtual paths to physical paths. In the example code block below, you are defining a virtual path of <code>/assets</code> to the physical path of <code>/front_end</code>. The physical path must be <em>relative</em> to the directory you specify in the <code>directory</code> config.
      code-block(:title="example_code_back_end.app.filepath" language="typescript" line_highlight="6,9")
        | {{ example_code_back_end.app.contents }}
    li
      p Create your <code>style.css</code> file in the physical path's location.
      code-block(:title="example_code_front_end.style.filepath" language="css")
        | {{ example_code_front_end.style.contents }}
    li
      p Create your resource file. Your resource file will serve HTML; and your HTML will reference <code>/assets/style.css</code> &mdash; the virtual path.
      code-block(:title="example_code_back_end.home_resource.filepath" language="typescript")
        | {{ example_code_back_end.home_resource.contents }}
  hr
  h2-hash Verification
  ol
    li
      p Run your app.
      code-block(title="Terminal" language="shell-session")
        | $ deno run --allow-net --allow-read app.ts
    li
      p Go to <code>localhost:1447</code> in your browser. You should receive the following response:
      p
        strong(style="color: #ff0000; font-family: 'Times New Roman', 'Times'") This is my title and it is red.
</template>
