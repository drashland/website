<script>
export const resource = {
  paths: [
    "/advanced-tutorials/creating-a-react-app/deno-tweets",
    "/advanced-tutorials/creating-a-react-app/deno-tweets/introduction",
  ],
  meta: {
    title: "Creating A React App",
    subtitle: "Introduction",
    source_code_uri: "/advanced_tutorials/creating_a_react_app/deno_tweets"
  }
}

export default {
  data() {
    return {
      uri: "/advanced-tutorials/creating-a-react-app/deno-tweets"
    };
  }
}
</script>

<template lang="pug">
page-tutorial-part(
  :introduction="true",
  :part="-1"
  :parts="5",
  :uri="uri"
)
  div.row
    div.col
      hr
      h2-hash Overview
      p-advanced-tutorials-introduction
      p In this tutorial series, you will learn how to create a simple React application powered by Drash. You will learn how to make a Drash server serve a <code>text/html</code> response to clients. The contents of the response will include and render JSX code so that it will mount and render on the screen. Your React app will display Deno tweets.
      p-view-source-code
      p.text-center(style="margin-bottom: 0")
        a.btn.btn-success(:href="'/#/advanced-tutorials/creating-a-react-app/deno-tweets/part-1'") Get Started
  div.row
    div.col
      hr
      h2-hash End State
      p Below is a sample of what you will create.
      img(:src="'/drash/assets/img/example_code/advanced_tutorials/creating_a_react_app/deno_tweets/1.png'")
</template>
