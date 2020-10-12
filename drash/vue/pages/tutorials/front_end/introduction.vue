<script>
export const resource = {
  paths: ["/tutorials/front-end"],
  paths: ["/tutorials/front-end/introduction"],
  meta: {
    title: "Front-end: Introduction",
  }
}

export default {
  data() {
    return {
      title: resource.meta.title,
      toc: [
        "About The Template Engine",
        "How It Works",
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
  h2-hash About The Template Engine
  p Drash's template engine might not be as powerful as template engines you might be familiar with (e.g., Blade, mustache, etc.). Although it is a basic template engine, it still allows you to:
  ul
    li
      p Create templates with template variables
    li
      p Extend templates
    li
      p Add template partials
    li
      p Add in-template JavaScript
  p The idea behind Drash having a template engine is to help you create applications stacked with a front-end framework such as Vue, React, and Angular. Essentially, the idea is to help you create a single page application (SPA) without dependencies outside of Drash.
  p Drash uses the <code>.html</code> extension for its templates.
  p Enabling the template engine can be done by adding the following configs (highlighted) to your server:
  code-block(:header="false" language="typescript" line_highlight="3-4")
    | const server = new Drash.Http.Server({
    |   ...
    |     template_engine: true,
    |     views_path: "./views",
    |   ...
    | });
  p Rendering a template can be done using the following call in your resource(s):
  code-block(:header="false" language="typescript")
    | const html = this.response.render("your-template.html", { some: "data" });
  hr
  h2-hash How It Works
  p The <code>template_engine</code> config tells Drash to enable the template engine. This flag is passed through the <code>request-resource-response</code> lifecycle to the <code>response</code> object's <code>render()</code> method. Basically, it tells the <code>render()</code> method to render templates using the template engine.
  p The <code>views_path</code> config tells Drash where to find your template files. This path is used to help Drash concatenate <code>views_path</code> with the <code>template</code> argument in the <code>render()</code> method &mdash; allowing Drash to find where the template is stored on your filesystem. For example, if you have the following ...
  code-block(:header="false" language="typescript" line_highlight="4")
    | const server = new Drash.Http.Server({
    |   ...
    |     template_engine: true,
    |     views_path: "./views",
    |   ...
    | });
  p ... and you call the <code>render()</code> like the following ...
  code-block(:header="false" language="typescript" line_highlight="2")
    | const html = this.response.render(
    |   "/user.html",
    |   {
    |     user: {
    |       name: "Edward"
    |     }
    |   }
    | );
  p ... then Drash will concatenate <code>views_path</code> and <code>template</code>, which would be: <code>./views/user.html</code>.
</template>
