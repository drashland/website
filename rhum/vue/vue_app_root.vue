<script>

import EnvironmentBadge from "/common/vue/environment_badge.vue";
import Sidebar from "/common/vue/sidebar.vue";

export default {
  components: {
    EnvironmentBadge,
    Sidebar
  },
  created() {
    window.addEventListener("resize", this.handleWindowResize);
    this.handleWindowResize();
  },
  data() {
    return {
      build_date: this.$conf.build_date,
      environment: this.$conf.environment,
      is_mobile: false,
      sidebar: {
        api_reference_href: "/rhum/#/api-reference",
        base_url: this.$conf.rhum.base_url + "/#",
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
  },
  methods: {
    handleWindowResize(e) {
      if (window.innerWidth < 900) {
        this.is_mobile = true;
      } else {
        this.is_mobile = false;
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.hide {
  display: none;
}
.main {
  margin-left: 350px;
  &.is-mobile {
    margin-left: 0;
  }
}
</style>

<template lang="pug">
div
  environment-badge.environment-badge(:environment="environment" :build_date="build_date")
  sidebar(
    :class="{'hide': is_mobile}"
    :base_url="sidebar.base_url"
    :menus="sidebar.menus"
    :logo="sidebar.logo"
    :module="sidebar.module"
    :github_href="sidebar.github_href"
    :api_reference_href="sidebar.api_reference_href"
  )
  div.main(
    :class="{'is-mobile': is_mobile}"
    style="margin-top: 75px; margin-bottom: 100px"
  )
    div.max-w-screen-lg.mx-auto.px-10
      transition
        keep-alive
          router-view
</template>
