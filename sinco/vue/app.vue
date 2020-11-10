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
        api_reference_href: "https://doc.deno.land/https/deno.land/x/sinco@" + this.$conf.sinco.latest_version + "/mod.ts",
        base_url: this.$conf.sinco.base_url + "/#",
        github_href: "https://github.com/drashland/sinco",
        logo: "/assets/common/img/logo_sinco.svg",
        menus: {
          "Getting Started": {
            Quickstart: "/#quickstart",
            Importing: "/#importing",
            Features: "/#features"
          },
          "Latest News": {},
          Tutorials: {
            "Click Elements": "/tutorials/clicking-elements",
            "Get And Set Input Value": "/tutorials/get-and-set-input-value",
            "Custom Assertions": "/tutorials/assertions",
          }
        },
        module: "Sinco",
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
  module="Sinco"
)
</template>
