<script>
export const resource = {
  paths: [
    "/advanced-tutorials/creating-a-vue-app/deno-tweets",
    "/advanced-tutorials/creating-a-vue-app/deno-tweets/introduction",
  ],
  meta: {
    title: "Creating A Vue App",
    subtitle: "Introduction",
    source_code_uri: "/advanced_tutorials/creating_a_vue_app/deno_tweets"
  }
}

export default {
  data() {
    return {
      uri: "/advanced-tutorials/creating-a-vue-app/deno-tweets"
    };
  }
}
</script>

<template lang="pug">
page-tutorial-part(
  :introduction="true",
  :part="-1"
  :parts="4",
  :uri="uri"
)
  div.row
    div.col
      hr
      h2-hash Overview
      p In this tutorial series, you will learn how to create a simple Vue application powered by Drash. You will learn how to make a Drash server serve a <code>text/html</code> response to clients. The response will include some Vue code so that it will mount and render on the screen. Your Vue app will display Deno tweets.
      p-view-source-code
      p.text-center(style="margin-bottom: 0")
        a.btn.btn-success(:href="$conf.base_url + '/#/advanced-tutorials/creating-a-vue-app/deno-tweets/part-1'") Get Started
  div.row
    div.col
      hr
      h2-hash End State
      p Below is a sample of what you will create.
      img(:src="$conf.base_url + '/public/assets/img/example_code/advanced_tutorials/creating_a_vue_app/deno_tweets/part_4.png'")
</template>
