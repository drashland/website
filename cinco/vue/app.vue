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
        api_reference_href: "https://doc.deno.land/https/deno.land/x/cinco@" + this.$conf.cinco.latest_version + "/mod.ts",
        base_url: this.$conf.cinco.base_url + "/#",
        github_href: "https://github.com/drashland/cinco",
        logo: "/assets/common/img/logo_cinco.svg",
        menus: {
          "Getting Started": {
            Quickstart: "/#quickstart",
            Importing: "/#importing",
            Features: "/#features"
          },
          Tutorials: {
            "Creating an Extensive Test": "/tutorials/creating-an-extensive-test",
          }
        },
        module: "Cinco",
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
  module="Cinco"
)
</template>
