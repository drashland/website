<script>
export const resource = {
    paths: ["/advanced-tutorials/creating-a-react-app/deno-tweets/part-4"],
    meta: {
      title: "Creating A React App",
      subtitle: "Part 4: Configuring Webpack and Typescript",
      source_code_uri: "/advanced_tutorials/creating_a_react_app/deno_tweets/part_4"
    }
}

export default {
  data() {
    return {
      example_code: this.$app_data.example_code['/src/example_code' + resource.meta.source_code_uri],
      part: 4,
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
      p By now, you should have your server serving an HTML file. In this tutorial part, you will configure Webpack and Typescript to transpile your React component as set the title and description for the page.
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
          p Create your Webpack configuration file.
          p
            code-block(:data="example_code.webpack" language="javascript")
          p Here, you are telling Webpack to search for your React components and to transpile them.
          p The transpiled files will then be placed in a different directory (see the <code>output</code> property).
          p You also have a block in the file that will test the found files against a <code>.tsx</code> extension, and will pass those files through the <code>ts-loader</code> to support transpiling TSX.
        li
          p Create your Typescript configuration file.
          p
            code-block(:data="example_code.tsconfig" language="javascript")
          p This configuration file aids in allowing Webpack to continue with its task, and will exclude your Deno files from the Typescript compiler &mdash; seperate from Deno's Typescript compiler.
        li
          p Install the dependencies.
          p
            code-block-slotted
              template(v-slot:title) Terminal
              template(v-slot:code)
                | npm i --save-dev webpack webpack-cli react react-dom typescript @types/react @types/react-dom ts-loader
  div.row
    div.col
      hr
      h2-hash Verification
      ol
        li Test Webpack.
          p
            code-block-slotted
              template(v-slot:title) Terminal
              template(v-slot:code)
                | node_modules/.bin/webpack-cli --config webpack.config.js
          p You should see the following output:
          p
            code-block-slotted
              template(v-slot:title) Terminal
              template(v-slot:code)
                | ERROR in Entry module not found: Error: Can't resolve './components/App.tsx'
          p This is the correct output because you have not created your components yet. You will do this in the next tutorial part.
</template>
