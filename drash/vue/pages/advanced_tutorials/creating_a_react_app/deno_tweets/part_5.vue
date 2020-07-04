<script>
export const resource = {
    paths: ["/advanced-tutorials/creating-a-react-app/deno-tweets/part-5"],
    meta: {
      title: "Creating A React App",
      subtitle: "Part 5: Creating the React Components",
      source_code_uri: "/advanced_tutorials/creating_a_react_app/deno_tweets/part_5"
    }
}

export default {
  data() {
    return {
      example_code: this.$example_code['drash/example_code/' + resource.meta.source_code_uri],
      example_code_components: this.$example_code['drash/example_code/' + resource.meta.source_code_uri + '/components'],
      part: 5,
      parts: 5,
      toc: {
        items: [
          "Before You Get Started",
          "Folder Structure End State",
          "Steps",
          "Verification",
        ]
      },
      uri: "/advanced-tutorials/creating-a-react-app/deno-tweets"
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
      p Now that you have everything set up, you can start writing your React components in TSX.
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
          p Create your React component for the Deno Tweets.
          p
            code-block-slotted(language="typescript")
              template(v-slot:title) /path/to/your/project/components/DenoTweets.tsx
              template(v-slot:code)
                | {{ example_code_components.DenoTweets.contents }}
          p Here, you are creating a component to control the display of the Deno tweets.
        li
          p Create your React App file to handle the display of your components.
          p
            code-block-slotted(language="typescript")
              template(v-slot:title) /path/to/your/project/components/App.tsx
              template(v-slot:code)
                | {{ example_code_components.App.contents }}
          p This is the entry point React file. This file will import all of your React components and render them.
  div.row
    div.col
      hr
      h2-hash Verification
      ol
        li Build your environment.
          p
            code-block-slotted
              template(v-slot:title) Terminal
              template(v-slot:code)
                | node_modules/.bin/webpack-cli --config webpack.config.js
          p Now that you have created your components, Webpack will transpile them so the browser can understand the contents.
        li Start your server.
          p
            code-block-slotted
              template(v-slot:title) Terminal
              template(v-slot:code)
                | deno run --allow-net --allow-read app.ts
          p Go to <code>localhost:1447/</code> in your browser.
          p You should the something similar to the following:
          img(:src="$conf.base_url + '/drash/assets/img/example_code/advanced_tutorials/creating_a_react_app/deno_tweets/1.png'")
</template>
