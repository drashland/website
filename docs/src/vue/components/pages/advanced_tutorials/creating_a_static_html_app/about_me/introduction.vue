<script>
export const resource = {
  paths: [
    "/advanced-tutorials/creating-a-static-html-app/about-me",
    "/advanced-tutorials/creating-a-static-html-app/about-me/introduction",
  ],
  meta: {
    title: "Creating A Static HTML App",
    subtitle: "Introduction",
    source_code_uri: "/advanced_tutorials/creating_a_static_html_app/about_me"
  }
}

export default {
  data() {
    return {
      uri: "/advanced-tutorials/creating-a-static-html-app/about-me"
    };
  }
}
</script>

<template lang="pug">
page-tutorial-part(
  :introduction="true",
  :part="-1"
  :parts="3",
  :uri="uri"
)
  div.row
    div.col
      hr
      h2-hash Overview
      p-advanced-tutorials-introduction
      p In this tutorial series, you will learn how to create a simple static HTML app powered by Drash. You will learn how to make a Drash server serve <code>text/html</code> responses to clients. The responses will include server-rendered HTML.
      p-view-source-code
      p.text-center(style="margin-bottom: 0")
        a.btn.btn-success(:href="$conf.base_url + '/#/advanced-tutorials/creating-a-static-html-app/about-me/part-1'") Get Started
  div.row
    div.col
      hr
      h2-hash End State
      p Below are samples of what you will create.
      img(:src="$conf.base_url + '/public/assets/img/example_code/advanced_tutorials/creating_a_static_html_app/about_me/1.png'")
      img(:src="$conf.base_url + '/public/assets/img/example_code/advanced_tutorials/creating_a_static_html_app/about_me/2.png'")
      img(:src="$conf.base_url + '/public/assets/img/example_code/advanced_tutorials/creating_a_static_html_app/about_me/3.png'")
</template>
