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
            "info": "/cli_commands/info",
            "check": "/cli_commands/check",
            "update": "/cli_commands/update",
            "--help": "/cli_commands/help",
            "--version": "/cli_commands/version"
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
