<script>
export const resource = {
    paths: ["/advanced-tutorials/content-negotiation/user-profiles/part-4"],
    meta: {
        title: "Content Negotation",
        subtitle: "Part 4: Handling Representations",
        source_code_uri: "/advanced_tutorials/content_negotiation/user_profiles/part_4"
    }
}

export default {
  data() {
    return {
      example_code: this.$example_code['drash/example_code' + resource.meta.source_code_uri],
      part: 4,
      parts: 4,
      toc: {
        items: [
          "Before You Get Started",
          "Folder Structure End State",
          "Steps",
          "Verification",
        ]
      },
      uri: this.$conf.drash.base_url + "/#/advanced-tutorials/content-negotiation/user-profiles"
    };
  },
}
</script>
<template lang="pug">

page-tutorial-part(
  :part="part"
  :parts="parts"
  :toc="toc"
  :uri="uri"
)
  div.row
    div.col
      hr
      h2-hash Before You Get Started
      p
        strong
          em Before diving into having your resource handle HTML representations of itself, you need to understand how the <code>Accept</code> header, <code>Content-Type</code> header, MIME types, and the <code>response_output</code> server config play their roles in Drash's request-resource-response lifecycle. So, please read the entire block below.
      div.jumbotron
        p Drash uses the <code>Accept</code> header to determine what representation of a resource a request wants. Clients can specify one or many content types in this header. It is up to you &mdash; the developer &mdash; to handle this header properly so that you can serve the correct content type to the client based on the request.
        p There are many ways to handle the <code>Accept</code> header in Drash. We will go over one way in this tutorial part. Other ways to handle the <code>Accept</code> header can be found in Tutorials > Misc > Content Negotiation.
        p(style="margin-bottom: 0") To ensure that your server always serves a response with the <code>Content-Type</code> header, Drash will set the response object's <code>Content-Type</code> header as the value of the <code>response_output</code> server config. If you do not set this config, then Drash will default it to <code>application/json</code>.
      p Now that your server can use your users resource to serve user data, you can have your resource change the representation (the content type) of its user data before it is sent back to the client. Drash defines content types according to the MDN: <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Type" target="_BLANK">https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Type</a>.
      p In this tutorial part, you will create a profile card in HTML using Tailwind CSS. When clients make requests to your users resource, they will be able to specify how they want to your data using the <code>Accept</code> header.
      p-view-source-code
  div.row
    div.col
      hr
      div-folder-structure-end-state(:code_block_data="example_code.folder_structure")
  div.row
    div.col
      hr
      h2-hash Steps
      ol
        li
          p Add your <code>profile_card.html</code> file.
          p
            code-block-slotted(language="html" line_highlight="14,21")
              template(v-slot:title) {{ example_code.user.filepath }}
              template(v-slot:code) {{ example_code.user.contents }}
          p When a request is made to your resource for the <code>text/html</code> representation of its data, this is the HTML file that will be sent as the response. After your resource reads this HTML file, it will replace the highlighted variables (<code>alias</code> and <code>name</code>) with the requested user's data. This replacement process is basically the process a template engine would perform, but in a much simpler way.
        li
          p Modify your resource by adding the highlighted code so it can generate a <code>text/html</code> representation of its data. Also, organize your code with specific response-generating methods (e.g., <code>generateHtml()</code> and <code>generateJson()</code>) for readability.
          p
            code-block-slotted(language="typescript" line_highlight="13-19,40-60")
              template(v-slot:title) {{ example_code.users_resource.filepath }}
              template(v-slot:code) {{ example_code.users_resource.contents }}
          p The highlighted code will check what content type the request accepts and will make sure that the user data is sent in an acceptable format. If the request does not specify the <code>Accept</code> header, then the resource will default to serving <code>application/json</code>. You should also note that the resource &mdash; when handling content negotiation &mdash; is in charge of setting the response's <code>Content-Type</code> header properly as seen in the <code>generateHtml()</code> and <code>generateJson()</code> methods.
  div.row
    div.col
      hr
      h2-hash Verification
      p You now have the option to specify which content type you want to receive: <code>application/json</code> or <code>text/html</code>. Verify that your resource can serve both content types of itself.
      ol
        li
          p Run your app.
          p
            code-block-slotted
              template(v-slot:title) /path/to/your/project/app.ts
              template(v-slot:code)
                | deno run --allow-net --allow-read app.ts
        li
          p Make a request to <code>localhost:1447/users/1</code> in your browser.
          p You should receive the following response:
          p
            img(:src="'/drash/assets/img/example_code/advanced_tutorials/content_negotiation/user_profiles/part_4/verification_3.png'")
        li
          p Make a request to <code>localhost:1447/users/1</code> in Postman (or similar).
          p You should receive the following response:
          p
            img(:src="'/drash/assets/img/example_code/advanced_tutorials/content_negotiation/user_profiles/part_4/verification_3_json.png'")
        li
          p Make a request to <code>localhost:1447/users/1</code> in Postman (or similar) with the following header:
          p
            code-block-slotted(:header="false" language="javascript")
              template(v-slot:code)
                | Accept: text/html
          p You should receive the following response:
          p
            img(:src="'/drash/assets/img/example_code/advanced_tutorials/content_negotiation/user_profiles/part_4/verification_3_html.png'")
        li
          p Make a request to <code>localhost:1447/users/1</code> in Postman (or similar) with the following header:
          p
            code-block-slotted(:header="false" language="javascript")
              template(v-slot:code)
                | Accept: text/xml
          p You should receive the following response because the resource defaults to JSON responses.
          p
            img(:src="'/drash/assets/img/example_code/advanced_tutorials/content_negotiation/user_profiles/part_4/verification_3_json.png'")
</template>
