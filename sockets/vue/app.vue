<script>
import AppRoot from "/common/vue/app_root.vue";

export default {
  components: {
    AppRoot,
  },
  data() {
    return {
      build_date: this.$conf.build_date,
      environment: this.$conf.environment,
      sidebar: {
        api_reference_href: "https://doc.deno.land/https/deno.land/x/sockets@v0.x/mod.ts",
        base_url: this.$conf.sockets.base_url + "/#",
        github_href: "https://github.com/drashland/sockets",
        logo: "/assets/common/img/logo_sockets.svg",
        menus: {
          "Getting Started": {
            Quickstart: "/#quickstart",
            Importing: "/#importing",
          },
          Tutorials: {
            Introduction: "/tutorials/introduction",
            "Creating a Server": "/tutorials/creating-a-server",
            "Opening Channels": "/tutorials/opening-channels",
            "Closing Channels": "/tutorials/closing-channels",
            "Adding Clients To Channels": "/tutorials/adding-clients-to-channels",
            "Removing Clients From Channels": "/tutorials/removing-clients-from-channels",
          },
          "Advanced Tutorials": {
            Introduction: "/advanced-tutorials/introduction",
            "Creating A Chat App": {
              Introduction: "/advanced-tutorials/creating-a-chat-app/introduction",
              "Part 1: Creating The Server": "/advanced-tutorials/creating-a-chat-app/part-1",
              "Part 2: Opening A Channel": "/advanced-tutorials/creating-a-chat-app/part-2",
              "Part 3: Creating The Front-End": "/advanced-tutorials/creating-a-chat-app/part-3",
              "Part 4: Sending Messages": "/advanced-tutorials/creating-a-chat-app/part-4"
            }
          }
        },
        module: "Sockets",
      }
    };
  },
}
</script>

<template lang="pug">
app-root(
  :build_date="build_date"
  :environment="environment"
  :sidebar="sidebar"
)
</template>
