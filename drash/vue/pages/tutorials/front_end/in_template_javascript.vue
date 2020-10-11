<script>
export const resource = {
  paths: ["/tutorials/front-end/in-template-javascript"],
  meta: {
    title: "In-Template JavaScript",
    source_code_uri: "/tutorials/front_end/in_template_javascript"
  }
}

export default {
  data() {
    return {
      example_code: this.$example_code['drash/example_code/tutorials/front_end/in_template_javascript'],
      title: resource.meta.title,
      toc: [
        "Before You Get Started",
        "for Loops",
        "if-else Conditionals",
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
  p Drash's template engine can take in HTML with in-template JavaScript. That is, you can write JavaScript in your templates directly. Below are examples of <code>for</code> loops and <code>if-else</code> conditionals in templates.
  hr
  h2-hash for Loops
  div.flex
    div(class="w-1/2 mr-5")
      h3 Input
      code-block(:header="false" language="typescript")
        | this.response.render(
        |   "template.html",
        |   {
        |     skills: [
        |       "Agility",
        |       "Strength",
        |       "Endurance",
        |     ]
        |   }
        | );
      code-block(:header="false" language="html")
        | &lt;ul&gt;
        |   <% for (let index in skills) { %>
        |   &lt;li&gt;<% skills[index] %>&lt;/li&gt;
        |   <% } %>
        | &lt;/ul&gt;
    div(class="w-1/2")
      h3 Output
      code-block(:header="false" language="html")
        | &lt;ul&gt;
        |   &lt;li&gt;Agility&lt;/li&gt;
        |   &lt;li&gt;Strength&lt;/li&gt;
        |   &lt;li&gt;Endurance&lt;/li&gt;
        | &lt;/ul&gt;
  hr
  h2-hash if-else Conditionals
  div.flex
    div(class="w-1/2 mr-5")
      h3 Input
      code-block(:header="false" language="typescript")
        | this.response.render(
        |   "template.html",
        |   {
        |     skills: [
        |       "Agility",
        |       "Strength",
        |       "Endurance",
        |     ]
        |   }
        | );
      code-block(:header="false" language="html")
        | &lt;ul&gt;
        |   <% for (let index in skills) { %>
        |     <% if (skills[index] != "Agility") { %>
        |   &lt;li&gt;<% skills[index] %>&lt;/li&gt;
        |     <% } %>
        |   <% } %>
        | &lt;/ul&gt;
    div(class="w-1/2")
      h3 Output
      code-block(:header="false" language="html")
        | &lt;ul&gt;
        |   &lt;li&gt;Strength&lt;/li&gt;
        |   &lt;li&gt;Endurance&lt;/li&gt;
        | &lt;/ul&gt;
</template>
