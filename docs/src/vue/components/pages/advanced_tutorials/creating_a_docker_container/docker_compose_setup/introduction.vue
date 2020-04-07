<script>
export const resource = {
  paths: [
    "/advanced-tutorials/creating-a-docker-container/docker-compose-setup",
    "/advanced-tutorials/creating-a-docker-container/docker-compose-setup/introduction",
  ],
  meta: {
    title: "Creating A Container in Docker Compose",
    subtitle: "Introduction",
    source_code_uri: "/advanced_tutorials/creating-a-docker-container/docker-compose-setup"
  }
}

export default {
  data() {
    return {
      uri: "/advanced-tutorials/creating-a-docker-container/docker-compose-setup"
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
      p This tutorial assumes you have read the 
        a(:href="$conf.base_url + '/#/advanced-tutorials'") Advanced Tutorials Introduction
      p In this tutorial series, you will learn how to create a Drash server within a Docker environment, using <code>docker-compose</code> with Nginx or Apache acting as the proxy to pass connections to the Drash server. You will learn how to setup the dockerfile and add the container to your Docker orchestration.
      p-view-source-code
      p.text-center(style="margin-bottom: 0")
        a.btn.btn-success(:href="$conf.base_url + '/#/advanced-tutorials/creating-a-docker-container/docker-compose-setup/part-1'") Get Started
  div.row
    div.col
      hr
      h2-hash End State
      p Below are samples of what you will create.
      img(:src="$conf.base_url + '/public/assets/img/example_code/advanced_tutorials/creating_an_api/coffee_and_tea/2.png'")
      img(:src="$conf.base_url + '/public/assets/img/example_code/advanced_tutorials/creating_an_api/coffee_and_tea/1.png'")
      img(:src="$conf.base_url + '/public/assets/img/example_code/advanced_tutorials/creating_an_api/coffee_and_tea/3.png'")
      img(:src="$conf.base_url + '/public/assets/img/example_code/advanced_tutorials/creating_an_api/coffee_and_tea/4.png'")
</template>
