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
        api_reference_href: "https://doc.deno.land/https/deno.land/x/rhum@" + this.$conf.rhum.latest_version + "/mod.ts",
        base_url: this.$conf.rhum.base_url + "/#",
        github_href: "https://github.com/drashland/rhum",
        logo: "/assets/common/img/logo_rhum.svg",
        menus: {
          "Getting Started": {
            Quickstart: "/#quickstart",
            Importing: "/#importing",
            Features: "/#features",
            Articles: "/#articles",
            FAQ: "/faq",
          },
          "Latest News": {},
          Tutorials: {
            //Introduction: "/tutorials",
            "Writing Tests": "/tutorials/writing-tests",
            "Stubs": "/tutorials/stubs",
            "Mocks": "/tutorials/mocks",
          },
        },
        module: "Rhum",
      }
    };
  },
  async mounted() {
    const res = await fetch("https://dev.to/api/articles?username=drash_land&tag=rhum&top=14");
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
  module="Rhum"
)
</template>
