<script>
import H2Hash from "/common/vue/h2_hash.vue";
import Page from "/common/vue/page.vue";
import CodeBlock from "/common/vue/code_block.vue";

const title = "Tutorials: Introduction";

export const resource = {
  paths: [
    "/tutorials",
    "/tutorials/introduction",
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
        "About The Tutorials",
        "wscat",
        "The Definition Of A Channel",
        "Sending Messages",
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
  h2-hash About The Tutorials
  p The tutorials in the sidebar are ordered (from top to bottom) in a way that will help you understand Sockets quickly &mdash; from creating a server to interacting with it. Since all tutorials have example code of setting up and starting a socket server, it is not required that you read the tutorials in order. However, it is greatly recommended.
  hr
  h2-hash wscat
  p All tutorials have a Verification section where you will interact with a server. The Verification section requires that you install <code>wscat</code> globally. To install <code>wscat</code>, run the following command:
  code-block(title="Terminal")
    | npm install -g wscat
  p Once you have installed <code>wscat</code>, you can use it through the command line via <code>wscat</code> command.
  hr
  h2-hash The Definition Of A Channel
  p A channel is the same thing as a room or an event. In Sockets, we use the term "channel", so please keep that in mind.
  hr
  h2-hash Sending Messages
  p At times, you will be sending certain messages as strings (and sometimes in certain formats) to a socket server using <code>wscat</code>. There are multiple messages that a Sockets server listens to. On receipt of one of the messages below, it will respond as stated below.
  ul
    li
      p
        strong <code>ping</code>
      p Sending a ping message will result in a pong message from the server. The message is written as follows:
      code-block(:header="false")
        | > ping
    li
      p
        strong <code>pong</code>
      p Sending a pong message will result in a ping message from the server. This message is written as follows:
      code-block(:header="false")
        | > pong
    li
      p
        strong <code>test</code>
      p Sending a test message will result in the server responding with the address it is listening at (e.g., Socket server is listening at 127.0.0.1:1777.). This message is written as follows:
      code-block(:header="false")
        | > test
    li
      p
        strong <code>connect_to</code>
      p This message allows you to connect to channels resulting in a connection message from the server. This message is written as follows:
      code-block(:header="false")
        | > { "connect_to": ["channel name", "another channel", "some other channel"] }
    li
      p
        strong <code>disconnect_from</code>
      p This message allows you to disconnect from channels resulting in a disconnect message from the server. This message is written as follows:
      code-block(:header="false")
        | > { "disconnect_from": ["channel name", "another channel", "some other channel"] }
    li
      p
        strong <code>send_message</code>
      p This message allows you to send a message to channels. The server will respond based on a specified callback. You will learn more about the callbacks (aka handlers) in the tutorials. This message is written as follows:
      code-block(:header="false")
        | > { "send_message": { "to": ["channel name", "another channel", "some other channel"], "message": "some message" } }
</template>

