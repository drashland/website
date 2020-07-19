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
              "Interacting With Servers": "/tutorials/clients/interacting-with-servers",
              "In-Depth Learning": "/tutorials/clients/in-depth-learning",
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
