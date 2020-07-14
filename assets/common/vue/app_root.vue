<script>
import EnvironmentBadge from "/common/vue/environment_badge.vue";
import Sidebar from "/common/vue/sidebar.vue";

export default {
  components: {
    EnvironmentBadge,
    Sidebar
  },
  props: {
    build_date: {
      type: String,
      required: true,
    },
    environment: {
      type: String,
      required: true,
    },
    sidebar: {
      type: Object,
      required: true,
    },
  },
  mounted() {
    window.addEventListener("resize", this.handleWindowResize);
    window.addEventListener("scroll", this.handleWindowOnScroll);
    this.handleWindowResize();
    this.handleWindowOnScroll();
    this.$root.$on("close-sidebar", () => {
      this.toggleSidebar();
    });
  },
  data() {
    return {
      can_scroll_to_top: false,
      is_mobile: false,
      open_sidebar: false,
    }
  },
  methods: {
    handleWindowOnScroll(e) {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        this.can_scroll_to_top = true;
      } else {
        this.can_scroll_to_top = false;
      }
    },
    handleWindowResize(e) {
      if (window.innerWidth < 900) {
        this.is_mobile = true;
        this.$root.$emit("is-mobile");
      } else {
        this.$root.$emit("is-not-mobile");
        this.is_mobile = false;
      }
    },
    scrollToTop() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    },
    toggleSidebar() {
      if (this.open_sidebar) {
        this.open_sidebar = false;
      } else {
        this.open_sidebar = true;
      }
    }
  }
}
</script>

<style lang="scss" scoped>
button {
  background: #000000;
  border-radius: .5rem;
  padding: 1rem;
  width: 75px;
}
.hide {
  display: none;
}
.buttons {
  bottom: 1rem;
  color: #f4f4f4;
  position: fixed;
  right: 1rem;
  z-index: 1000;
}
.main {
  margin-left: 350px;
  &.is-mobile {
    margin-left: 0;
  }
}
.sidebar {
  &.is-mobile {
    width: 100%;
  }
}
</style>

<template lang="pug">
div
  div.buttons.flex
    button(
      :class="{'mr-3': is_mobile, 'hide': !can_scroll_to_top}"
      type="button", @click="scrollToTop()"
    )
      i.fa.fa-arrow-up
    button.open-sidebar(
      :class="{'hide': !is_mobile}"
      type="button", @click="toggleSidebar()"
    )
        i.fa.fa-bars(
          :class="{'hide': open_sidebar}"
        )
        i.fa.fa-times(
          :class="{'hide': !open_sidebar}"
        )
  environment-badge.environment-badge(:environment="environment" :build_date="build_date")
  sidebar(
    :class="{'hide': is_mobile && !open_sidebar, 'is-mobile': is_mobile}"
    :base_url="sidebar.base_url"
    :menus="sidebar.menus"
    :logo="sidebar.logo"
    :module="sidebar.module"
    :github_href="sidebar.github_href"
    :api_reference_href="sidebar.api_reference_href"
  )
  div.main(
    :class="{'is-mobile': is_mobile}"
    style="margin-top: 75px; margin-bottom: 125px"
  )
    div.max-w-screen-lg.mx-auto.px-10
      transition
        keep-alive
          router-view
</template>
