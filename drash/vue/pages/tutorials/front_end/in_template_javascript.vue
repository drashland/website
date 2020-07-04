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
      toc: {
        items: [
          "Before You Get Started",
          "for Loops",
          "if-else Conditionals",
        ]
      }
    };
  },
}
</script>

<template lang="pug">
page-tutorial(
  :toc="toc"
)
  div.row
    div.col
      hr
      h2-hash Before You Get Started
      p Drash's template engine can take in HTML with in-template JavaScript. That is, you can write JavaScript in your templates directly. Below are examples of <code>for</code> loops and <code>if-else</code> conditionals in templates.
      p-view-source-code(:source_code_uri="$route.meta.source_code_uri")
  div.row
    div.col
      hr
      h2-hash for Loops
      div.row
        div.col-6
          h3 Input
          p
            code-block-slotted(:header="false" language="typescript")
              template(v-slot:code)
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
          p
            code-block-slotted(:header="false" language="html")
              template(v-slot:code)
                | &lt;ul&gt;
                |   <% for (let index in skills) { %>
                |   &lt;li&gt;<% skills[index] %>&lt;/li&gt;
                |   <% } %>
                | &lt;/ul&gt;
        div.col-6
          h3 Output
          p
            code-block-slotted(:header="false" language="html")
              template(v-slot:code)
                | &lt;ul&gt;
                |   &lt;li&gt;Agility&lt;/li&gt;
                |   &lt;li&gt;Strength&lt;/li&gt;
                |   &lt;li&gt;Endurance&lt;/li&gt;
                | &lt;/ul&gt;
  div.row
    div.col
      hr
      h2-hash if-else Conditionals
      div.row
        div.col-6
          h3 Input
          p
            code-block-slotted(:header="false" language="typescript")
              template(v-slot:code)
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
          p
            code-block-slotted(:header="false" language="html")
              template(v-slot:code)
                | &lt;ul&gt;
                |   <% for (let index in skills) { %>
                |     <% if (skills[index] != "Agility") { %>
                |   &lt;li&gt;<% skills[index] %>&lt;/li&gt;
                |     <% } %>
                |   <% } %>
                | &lt;/ul&gt;
        div.col-6
          h3 Output
          p
            code-block-slotted(:header="false" language="html")
              template(v-slot:code)
                | &lt;ul&gt;
                |   &lt;li&gt;Strength&lt;/li&gt;
                |   &lt;li&gt;Endurance&lt;/li&gt;
                | &lt;/ul&gt;
</template>
