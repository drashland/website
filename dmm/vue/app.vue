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
        },
        module: "dmm",
      }
    };
  },
  async mounted() {
    const res = await fetch("https://dev.to/api/articles?username=drash_land&tag=dmm&top=14");
    let json = await res.json();
    json = json.slice(0, 6);
    let articles = {};
    for (const index in json) {
      const article = json[index];
      articles[article.title] = article.url;
    }
    if (Object.keys(articles).length <= 0) {
      this.sidebar.menus["Latest News"] = {
        "No articles yet": "#"
      };
    } else {
      this.sidebar.menus["Latest News"] = articles;
    }
  }
}
</script>

<template lang="pug">
app-root(
  :build_date="build_date"
  :environment="environment"
  :sidebar="sidebar"
  module="dmm"
)
</template>
