<script>
export const resource = {
  paths: ["/tutorials/misc/content-negotiation"],
  meta: {
    title: "Content Negotiation",
  }
}

export default {
  data() {
    return {
      example_code: this.$app_data.example_code['/src/example_code/tutorials/misc/content_negotiation'],
      toc: {
        items: [
          "Before You Get Started",
          "By First",
          "By Order Of Preferred",
          "By Random Selection",
          "Verification",
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
      p There are multiple ways to handle content negotation in Drash. Drash will go over three different ways in this tutorial:
      ul
        li By First
        li By Order Of Precedence
        li By Random Selection
      p-view-source-code(:source_code_uri="$route.meta.source_code_uri")
  div.row
    div.col
      hr
      h2-hash By First
      p You can check the first acceptable content type of the request via its <code>Accept</code> header by following the example below:
      p
        code-block-slotted(:header="false" language="typescript")
          template(v-slot:code)
            | public GET() {
            |   let contentType: string|undefined = this.request.headers.get("Accept").split(";").shift();
            |   if (contentType) {
            |     this.response.headers.set("Content-Type", contentType);
            |     this.response.body = "some response";
            |     return this.response;
            |   }
            |   ...
            |   // Handle if undefined code
            |   ...
            | }
  div.row
    div.col
      hr
      h2-hash By Order Of Preferred
      p You can check the acceptable content types of the request via its <code>Accept</code> header in the preferred order by following the example below:
      p
        code-block-slotted(:header="false" language="typescript")
          template(v-slot:code)
            | public GET() {
            |   let contentTypes: string[] = this.request.headers.get("Accept").split(";");
            |   for (let content of contentTypes) {
            |     content = content.trim();
            |     if (content.indexOf("application/json") != -1) {
            |       this.response.headers.set("Content-Type", "application/json");
            |       this.response.body = {response: "something"};
            |       return this.response;
            |     }
            |     if (content.indexOf("text/html") != -1) {
            |       this.response.headers.set("Content-Type", "text/html");
            |       this.response.body = "&lt;div&gt;response: something&lt;/div&gt;";
            |       return this.response;
            |     }
            |     if (content.indexOf("text/xml") != -1) {
            |       this.response.headers.set("Content-Type", "text/xml");
            |       this.response.body = "&lt;response&gt;something&lt;/response&gt;";
            |       return this.response;
            |     }
            |   }
            | }
      p The above code will return the first matched content type in the request's <code>Accept</code> header.
  div.row
    div.col
      hr
      h2-hash By Random Selection
      p You can check the acceptable content types of the request in random order via its <code>Accept</code> header by following the example below:
      p
        code-block-slotted(:header="false" language="typescript")
          template(v-slot:code)
            | public GET() {
            |   if (this.request.accepts("application/json")) {
            |     this.response.headers.set("Content-Type", "application/json");
            |     this.response.body = {response: "something"};
            |     return this.response;
            |   }
            |   if (this.request.accepts("text/html")) {
            |     this.response.headers.set("Content-Type", "text/html");
            |     this.response.body = "&lt;div&gt;response: something&lt;/div&gt;";
            |     return this.response;
            |   }
            |   if (this.request.accepts(["text/xml", "application/xml"])) {
            |     this.response.headers.set("Content-Type", "text/xml");
            |     this.response.body = "&lt;response&gt;something&lt;/response&gt;";
            |     return this.response;
            |   }
            | }
</template>
