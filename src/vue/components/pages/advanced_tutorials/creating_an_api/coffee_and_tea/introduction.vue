<script>
export const resource = {
  paths: [
    "/advanced-tutorials/creating-an-api/coffee-and-tea",
    "/advanced-tutorials/creating-an-api/coffee-and-tea/introduction",
  ],
  meta: {
    title: "Content Negotation: User Profiles",
    subtitle: "Introduction",
    source_code_uri: "/advanced_tutorials/creating_an_api/user_profiles"
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
  :parts="5",
  :uri="uri"
)
  div.row
    div.col
      hr
      h2-hash Overview
      p In this tutorial, you will learn how to create a simple API powered by Drash. You will learn how to make a Drash server serve <code>application/json</code> responses to clients based on the clients' requests. The data your Drash server will serve will be data on coffees and teas.
      p-tutorial-comes-in-multiple-parts
      p-view-source-code
      p.text-center(style="margin-bottom: 0")
        a.btn.btn-success(href="/#/advanced-tutorials/creating-an-api/coffee-and-tea/part-1") Get Started
  div.row
    div.col
      hr
      h2-hash End State
      p Below are samples of what you will create.
      img(:src="$conf.base_url + '/public/assets/img/example_code/advanced_tutorials/creating_an_api/user_profiles/part_5/verification_2.png'")
      img(:src="$conf.base_url + '/public/assets/img/example_code/advanced_tutorials/creating_an_api/user_profiles/introduction/json_2.png'")
      img(:src="$conf.base_url + '/public/assets/img/example_code/advanced_tutorials/creating_an_api/user_profiles/part_5/verification_3.png'")
</template>
