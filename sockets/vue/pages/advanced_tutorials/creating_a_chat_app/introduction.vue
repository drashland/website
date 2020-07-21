<script>
import H2Hash from "/common/vue/h2_hash.vue";
import Page from "/common/vue/page.vue";
import CodeBlock from "/common/vue/code_block.vue";

const title = "Creating A Chat App";
const subtitle = "Introduction";

export const resource = {
  paths: [
    "/advanced-tutorials/creating-a-chat-app",
    "/advanced-tutorials/creating-a-chat-app/introduction",
  ],
  meta: {
    title: title
  }
}

export default {
  components: {
    Page,
    H2Hash,
  },
  data() {
    return {
      base_url: this.$conf.sockets.base_url + "/#",
      base_uri: "/advanced-tutorials/creating-a-chat-app",
      title: title,
      subtitle: subtitle,
    };
  }
}
</script>

<template lang="pug">
page(
  :base_url="base_url"
  :subtitle="subtitle"
  :title="title"
)
  h2-hash Overview
  p In this tutorial series, you will learn how to create a simple chat app powered by Sockets. You will learn how to make a Sockets server handle messages between multiple clients.
  p.mt-10.text-center
    a(
      style="color: #ffffff"
      class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
      :href="base_url + base_uri + '/part-1'"
    ) Get Started
  hr
  h2-hash End State
  p Below are examples of what you will create.
</template>

