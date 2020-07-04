<script>
export const resource = {
  paths: [
    "/advanced-tutorials/creating-an-api/coffee-and-tea",
    "/advanced-tutorials/creating-an-api/coffee-and-tea/introduction",
  ],
  meta: {
    title: "Creating An API",
    subtitle: "Introduction",
    source_code_uri: "/advanced_tutorials/creating_an_api/coffee_and_tea"
  }
}

export default {
  data() {
    return {
      uri: "/advanced-tutorials/creating-an-api/coffee-and-tea"
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
      p-advanced-tutorials-introduction
      p In this tutorial series, you will learn how to create a simple API powered by Drash. You will learn how to make a Drash server serve <code>application/json</code> responses to clients based on the clients' requests. The data your Drash server will serve will be data on coffees and teas.
      p-view-source-code
      p.text-center(style="margin-bottom: 0")
        a.btn.btn-success(:href="$conf.base_url + '/#/advanced-tutorials/creating-an-api/coffee-and-tea/part-1'") Get Started
  div.row
    div.col
      hr
      h2-hash End State
      p Below are samples of what you will create.
      img(:src="$conf.base_url + '/drash/assets/img/example_code/advanced_tutorials/creating_an_api/coffee_and_tea/2.png'")
      img(:src="$conf.base_url + '/drash/assets/img/example_code/advanced_tutorials/creating_an_api/coffee_and_tea/1.png'")
      img(:src="$conf.base_url + '/drash/assets/img/example_code/advanced_tutorials/creating_an_api/coffee_and_tea/3.png'")
      img(:src="$conf.base_url + '/drash/assets/img/example_code/advanced_tutorials/creating_an_api/coffee_and_tea/4.png'")
</template>
