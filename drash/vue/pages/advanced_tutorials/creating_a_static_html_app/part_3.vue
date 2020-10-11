<script>
const title = "Creating A Static HTML App";
const subtitle = "Part 3: Creating The HTML Files";

export const resource = {
    paths: ["/advanced-tutorials/creating-a-static-html-app/part-3"],
    meta: {
      title,
      subtitle,
    }
}

export default {
  data() {
    return {
      base_url: this.$conf.drash.base_url + "/#",
      base_uri: "/advanced-tutorials/creating-a-static-html-app",
      example_code: this.$example_code['drash/example_code/advanced_tutorials/creating_a_static_html_app/about_me/part_3'],
      example_code_html: this.$example_code['drash/example_code/advanced_tutorials/creating_a_static_html_app/about_me/part_3/html'],
      toc: [
        "Folder Structure End State",
        "Steps",
        "Verification",
      ],
      title,
      subtitle
    };
  },
}
</script>

<template lang="pug">
page(
  :toc="toc"
  :base_url="base_url"
  :subtitle="subtitle"
  :title="title"
)
  breadcrumbs(:base_url="base_url + base_uri" :part="3" :parts="3")
  hr
  h2-hash Folder Structure End State
  code-block(:header="false" language="text" :line_numbers="false")
   | ▾ /path/to/your/project/
   |     ▾ html/
   |         about.html
   |         contact.html
   |         home.html
   |     about_resource.ts
   |     app.ts
   |     contact_resource.ts
   |     home_resource.ts
  hr
  h2-hash Steps
  ol
    li
      p Create your home HTML file.
      p
        code-block(:title="example_code_html.home.filepath" language="html")
          | {{ example_code_html.home.contents }}
    li
      p Create your contact HTML file.
      p
        code-block(:title="example_code_html.contact.filepath" language="html")
          | {{ example_code_html.contact.contents }}
    li
      p Create your about HTML file.
      p
        code-block(:title="example_code_html.about.filepath" language="html")
          | {{ example_code_html.about.contents }}
  hr
  h2-hash Verification
  p Stop your server (<code>ctrl + c</code>) if you still have it running from Part 2.
  ol
    li Run your app.
      p
        code-block(title="Terminal")
          | deno run --allow-net --allow-read app.ts
    li
      p Go to <code>localhost:1447/</code> in your browser.
      p You should receive a response similar to the following:
      p
        img(:src="'/drash/assets/img/example_code/advanced_tutorials/creating_a_static_html_app/about_me/1.png'")
    li
      p Go to <code>localhost:1447/contact</code> in your browser.
      p You should receive a response similar to the following:
      p
        img(:src="'/drash/assets/img/example_code/advanced_tutorials/creating_a_static_html_app/about_me/2.png'")
    li
      p Go to <code>localhost:1447/about</code> in your browser.
      p You should receive a response similar to the following:
      p
        img(:src="'/drash/assets/img/example_code/advanced_tutorials/creating_a_static_html_app/about_me/3.png'")
  div-alert-finished-tutorial-series
  hr
  breadcrumbs(:base_url="base_url + base_uri" :part="3" :parts="3")
</template>
