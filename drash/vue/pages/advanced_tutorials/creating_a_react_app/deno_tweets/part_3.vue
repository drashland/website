<script>
const title = "Creating A Client Side Rendered App (React)";
const subtitle = "Part 3: Creating The HTML Template";
const baseUri = "/advanced-tutorials/creating-a-client-side-rendered-app-react";

export const resource = {
    paths: ["/advanced-tutorials/creating-a-client-side-rendered-app-react/part-3"],
    meta: {
      title,
      subtitle,
    }
}

export default {
  data() {
    return {
      base_url: this.$conf.drash.base_url + "/#",
      base_uri: baseUri,
      example_code: this.$example_code['drash/example_code/advanced_tutorials/creating_a_react_app/deno_tweets/part_3'],
      toc: [
        "Folder Structure End State",
        "Steps",
        "Verification",
      ],
      title,
      subtitle,
    };
  },
}
</script>

<template lang="pug">
page(
  :base_url="base_url",
  :base_uri="base_uri",
  :subtitle="subtitle"
  :title="title"
  :toc="toc"
)
  breadcrumbs(:base_url="base_url + base_uri" :part="3" :parts="5")
  hr
  h2-hash Folder Structure End State
  code-block(:header="false" language="text" :line_numbers="false")
    | ▾ /path/to/your/project/
    |     app.ts
    |     home_resource.ts
    |     index.html
  hr
  h2-hash Steps
  ol
    li
      p Create your HTML file.
      p
        code-block(:title="example_code.index.filepath" language="html")
          | {{ example_code.index.contents }}
      p To make things easier, your HTML file comes with the embedded Twitter Timeline widget. This widget will show Deno's tweets.
      p You will notice there is a <code>&lt;script&gt;</code> tag. This points to your compiled React component that you will create in the later steps.
  hr
  h2-hash Verification
  p Stop your server (<code>ctrl + c</code>) if you still have it running from Part 2.
  p Unfortunately, if you try the run the app now and go to <code>localhost:1447/</code> in your browser, the page will error.
  p This is because all the content of the page is going to come from your React component which has not been created yet.
  div-alert-next-tutorial-part
  hr
  breadcrumbs(:base_url="base_url + base_uri" :part="3" :parts="5")
</template>
