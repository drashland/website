<script>
import H2Hash from "/common/vue/h2_hash.vue";
import Page from "/common/vue/page.vue";
import CodeBlock from "/common/vue/code_block.vue";

const title = "Removing Clients From Channels";

export const resource = {
  paths: [
    "/tutorials/servers/removing-clients-from-channels",
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
        "Removing Clients From Channels",
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
  h2-hash Removing Clients To Channels
  p Removing clients to channels can be done using the following call:
  code-block(:header="false" language="typescript")
    | socketServer.removeClientFromChannel("Channel Name", clientId);
</template>

