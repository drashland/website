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
        example_applications: [],
        github_href: "https://github.com/drashland/dmm",
        logo: "/assets/common/img/logo_dmm.svg",
        menus: {
          "Getting Started": {
            Quickstart: "/#quickstart",
            Usage: "/#usage",
            Features: "/#features",
            FAQ: "/faq",
          },
          "Latest News": {},
          "CLI Commands": {
            //Introduction: "/tutorials",
            "check": "/cli_commands/check",
            "help": "/cli_commands/help",
            "info": "/cli_commands/info",
            "update": "/cli_commands/update",
            "version": "/cli_commands/version"
          },
          "Versions": {
            "v1.2.0": "/dmm/v1.2.0/",
          }
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
  news_tags="deno, dmm"
  module="dmm"
)
</template>
