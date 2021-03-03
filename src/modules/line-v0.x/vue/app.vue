<script>
import AppRoot from "/assets/common/vue/app_root.vue";

export default {
  components: {
    AppRoot,
  },
  data() {
    return {
      sidebar: {
        base_url: this.$conf.line.base_url,
        github_href: "https://github.com/drashland/line",
        logo: "/assets/common/img/logo_line.svg",
        menus: {
          "Getting Started": {
            Quickstart: "/#quickstart",
            Usage: "/#usage",
            Features: "/#features",
            FAQ: "/faq",
          },
          "Latest News": {},
          "Tutorials": {
            Introduction: "/tutorials",
            "Creating A CLI Program": "/creating-a-cli-program",
          },
        },
        module: "line",
      }
    };
  },
}
</script>

<template lang="pug">
app-root(
  :sidebar="sidebar"
  news_tags="deno, line"
  module="line"
)
</template>
