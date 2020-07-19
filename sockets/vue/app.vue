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
        api_reference_href: this.$conf.sockets.base_url + "/#/api-reference",
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
            "Creating A Server": "/tutorials/creating-a-server",
            "Creating A Client": "/tutorials/creating-a-client",
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
