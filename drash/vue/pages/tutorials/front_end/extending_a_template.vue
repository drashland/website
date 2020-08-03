<script>
export const resource = {
  paths: ["/tutorials/front-end/extending-a-template"],
  meta: {
    title: "Extending A Template",
    source_code_uri: "/tutorials/front_end/extending_a_template"
  }
}

export default {
  data() {
    return {
      example_code: this.$example_code['drash/example_code/tutorials/front_end/extending_a_template'],
      example_code_views: this.$example_code['drash/example_code/tutorials/front_end/extending_a_template/views'],
      title: resource.meta.title,
      toc: [
        "Before You Get Started",
        "Folder Structure End State",
        "Steps",
        "Verification",
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
  p In this tutorial, you will create an HTML template that extends another template using <code>&lt;% extends("index.html") %&gt;</code> and <code>&lt;% yield %&gt;</code>.
  hr
  folder-structure-end-state(:code_block_data="example_code.folder_structure")
    | ▾ /path/to/your/project/
    |   ▾ /views
    |     index.html
    |     user.html
    |   app.ts
    |   user_resource.ts
  hr
  h2-hash Steps
  ol
    li
      p Create your top-level template file. <code>&lt;% yield %&gt;</code> will yield the contents of the template that extends this one. In this case, it is the contents of the template in the next step.
      code-block(title="/path/to/your/project/views/user.html" language="html")
        | {{ example_code_views.index.contents }}
    li
      p Create your extended template. The contents of this file will replace the <code>&lt;% yield %&gt;</code> variable. The <code>index.html</code> file must be relative to the <code>views_path</code> server config.
      code-block(title="/path/to/your/project/views/user.html" language="html")
        | {{ example_code_views.user.contents }}
    li
      p Create your resource file.
      code-block(title="/path/to/your/project/user_resource.ts" language="typescript")
        | {{ example_code.user_resource.contents }}
    li
      p Create your app file.
      code-block(title="/path/to/your/project/app.ts" language="typescript")
        | {{ example_code.app.contents }}
  hr
  h2-hash Verification
  p You can verify that your app's code works by making requests like the ones below. Since this tutorial's app sets <code>text/html</code> as the <code>response_output</code>, the server responds to requests with HTML by default.
  ol
    li
      p Run your app.
      code-block(title="Terminal")
        | deno run --allow-net --allow-read app.ts
    li
      p Go to <code>localhost:1447/user</code> in your browser.
      p You should receive the following response:
      p
        img(src="/drash/assets/img/example_code/tutorials/front_end/creating_a_template.png")
</template>
