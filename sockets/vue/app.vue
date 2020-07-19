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
            //Introduction: "/tutorials",
            "Servers": {
              "Creating a Server": "/tutorials/servers/creating-a-server",
            },
            "Clients": {
              "Connecting To Servers": "/tutorials/clients/connecting-to-servers",
              "Connecting To Channels": "/tutorials/clients/connecting-to-channels",
              "Disconnecting From Channels": "/tutorials/clients/disconnecting-from-channels",
              "Opening Channels": "/tutorials/clients/opening-channels",
              "Closing Channels": "/tutorials/clients/closing-channels",
              "Interacting With Servers": "/tutorials/clients/interacting-with-servers",
            }
          },
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
