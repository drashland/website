<script>
const title = "Creating A Client Side Rendered App (React)";
const subtitle = "Part 4: Configuring Webpack and Typescript";
const baseUri = "/advanced-tutorials/creating-a-client-side-rendered-app-react";

export const resource = {
    paths: ["/advanced-tutorials/creating-a-client-side-rendered-app-react/part-4"],
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
      example_code: this.$example_code['drash/example_code/advanced_tutorials/creating_a_react_app/deno_tweets/part_4'],
      toc: [
        "Before You Get Started",
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
  breadcrumbs(:base_url="base_url + base_uri" :part="4" :parts="5")
  hr
  h2-hash Before You Get Started
  p By now, you should have your server serving an HTML file. In this tutorial part, you will configure Webpack and Typescript to transpile your React component to set the title and description for the page.
  hr
  h2-hash Folder Structure End State
  code-block(:header="false" language="text" :line_numbers="false")
    | ▾ /path/to/your/project/
    |     app.ts
    |     home_resource.ts
    |     index.html
    |     tsconfig.json
    |     webpack.config.js
  hr
  h2-hash Steps
  ol
    li
      p Create your Webpack configuration file.
      p
        code-block(:title="example_code.webpack.filepath" language="javascript")
          | {{ example_code.webpack.contents }}
      p Here, you are telling Webpack to search for your React components and to transpile them.
      p The transpiled files will then be placed in a different directory (see the <code>output</code> property).
      p You also have a block in the file that will test the found files against a <code>.tsx</code> extension, and will pass those files through the <code>ts-loader</code> to support transpiling TSX.
    li
      p Create your Typescript configuration file.
      p
        code-block(:title="example_code.tsconfig.filepath" language="javascript")
          | {{ example_code.tsconfig.contents }}
      p This configuration file aids in allowing Webpack to continue with its task, and will exclude your Deno files from the Typescript compiler &mdash; seperate from Deno's Typescript compiler.
    li
      p Install the dependencies.
      p
        code-block(title="Terminal")
          | npm i --save-dev webpack webpack-cli react react-dom typescript @types/react @types/react-dom ts-loader
  hr
  h2-hash Verification
  ol
    li
      p Test Webpack.
      p
        code-block(title="Terminal")
          | node_modules/.bin/webpack-cli --config webpack.config.js
      p You should see the following output:
      p
        code-block(title="Terminal")
          | ERROR in Entry module not found: Error: Can't resolve './components/App.tsx'
      p This is the correct output because you have not created your components yet. You will do this in the next tutorial part.
  div-alert-next-tutorial-part
  hr
  breadcrumbs(:base_url="base_url + base_uri" :part="4" :parts="5")
</template>
