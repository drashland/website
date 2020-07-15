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
        base_url: this.$conf.dmm.base_url + "/#",
        github_href: "https://github.com/drashland/dmm",
        logo: "/assets/common/img/logo_dmm.svg",
        menus: {
          "Getting Started": {
            Quickstart: "/#quickstart",
            Installing: "/#installing",
            Features: "/#features",
            FAQ: "/faq",
          },
          "CLI Commands": {
            //Introduction: "/tutorials",
            "info": "/tutorials/info",
            "check": "/tutorials/check",
            "update": "/tutorials/update",
            "--help": "/tutorials/help",
            "--version": "/tutorials/version"
          },
        },
        module: "dmm",
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
