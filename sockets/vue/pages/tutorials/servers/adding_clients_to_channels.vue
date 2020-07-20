<script>
import H2Hash from "/common/vue/h2_hash.vue";
import Page from "/common/vue/page.vue";
import CodeBlock from "/common/vue/code_block.vue";

const title = "Adding Clients To Channels";

export const resource = {
  paths: [
    "/tutorials/servers/adding-clients-to-channels",
  ],
  meta: {
    title: title
  }
}

export default {
  components: {
    CodeBlock,
    H2Hash,
    Page,
  },
  data() {
    return {
      base_url: this.$conf.sockets.base_url + "/#",
      title: title,
      toc: [
        "Adding Clients To Channels",
      ],
    };
  }
}
</script>

<template lang="pug">
page(
  :base_url="base_url"
  :title="title"
  :toc="toc"
)
  h2-hash Adding Clients To Channels
  p Adding clients to channels can be done using the following call:
  code-block(:header="false" language="typescript")
    | socketServer.addClientToChannel("Channel Name", clientId);
</template>

