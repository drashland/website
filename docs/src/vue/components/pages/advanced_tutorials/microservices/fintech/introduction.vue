<script>
export const resource = {
  paths: [
    "/advanced-tutorials/microservices/fintech",
    "/advanced-tutorials/microservices/fintech/introduction",
  ],
  meta: {
    title: "Creating An API",
    subtitle: "Introduction",
    source_code_uri: "/advanced_tutorials/microservices/fintech"
  }
}

export default {
  data() {
    return {
      uri: "/advanced-tutorials/microservices/fintech"
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
      p In this tutorial series, you will learn how to create a simple JAM stack with microservices powered by Drash. You will learn how to make a Drash server serve <code>application/json</code> responses to clients. The data your Drash server will handle will be data on users, accounts, and orders.
      p-view-source-code
      p.text-center(style="margin-bottom: 0")
        a.btn.btn-success(:href="$conf.base_url + '/#/advanced-tutorials/microservices/fintech/part-1'") Get Started
  div.row
    div.col
      hr
      h2-hash End State
      p Below are samples of what you will create.
      img(:src="$conf.base_url + '/public/assets/img/example_code/advanced_tutorials/microservices/fintech/1.png'")
      img(:src="$conf.base_url + '/public/assets/img/example_code/advanced_tutorials/microservices/fintech/2.png'")
      img(:src="$conf.base_url + '/public/assets/img/example_code/advanced_tutorials/microservices/fintech/3.png'")
      img(:src="$conf.base_url + '/public/assets/img/example_code/advanced_tutorials/microservices/fintech/4.png'")
</template>
