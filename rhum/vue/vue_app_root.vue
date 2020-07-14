<template lang="pug">
div
  sidebar(
    :base_url="sidebar.base_url"
    :build_date="sidebar.build_date"
    :environment="sidebar.environment"
    :menus="sidebar.menus"
    :logo="sidebar.logo"
    :module="sidebar.module"
    :github_href="sidebar.github_href"
    :api_reference_href="sidebar.api_reference_href"
  )
  div(style="margin-left: 350px; margin-top: 75px; margin-bottom: 100px")
    div.max-w-screen-lg.mx-auto.px-10
      transition
        keep-alive
          router-view
</template>

<script>

import Sidebar from "/common/vue/sidebar.vue";

export default {
  components: {
    Sidebar
  },
  data() {
    return {
      sidebar: {
        api_reference_href: "/rhum/#/api-reference",
        base_url: this.$conf.rhum.base_url + "/#",
        build_date: this.$conf.build_date,
        environment: this.$conf.environment,
        github_href: "https://github.com/drashland/rhum",
        logo: "/assets/common/img/logo_rhum.svg",
        menus: {
          "Getting Started": {
            Quickstart: "/#quickstart",
            Importing: "/#importing",
            Features: "/#features",
            FAQ: "/faq",
          },
          Tutorials: {
            //Introduction: "/tutorials",
            "Writing Tests": "/tutorials/writing-tests"
          },
        },
        module: "Rhum",
      }
    }
  }
}
</script>
