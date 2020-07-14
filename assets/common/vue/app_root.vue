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
    async scrollToTop() {
      try {
        await this.$router.push(this.$route.path);
      } catch (error) {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
      }
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

<style>
a,
a:visited {
  color: #ff7700;
}

a:hover {
  color: #333333;
}

body {
  background-color: #f4f4f4;
  font-family: 'Nunito', Helvetica, Arial, sans-serif;
  font-size: 1.1rem;
  line-height: 2.25rem;
}

code {
  background: #e8e8e8;
  border-radius: 0.18125rem;
  color: #e83e8c;
  display: inline-block;
  font-size: 1rem;
  margin-bottom: 0;
  padding-left: 0.18125rem;
  padding-right: 0.18125rem;
}

h1 {
  margin-bottom: 1rem;
}

h3 {
  font-weight: bold;
  margin-bottom: 1rem;
}

hr {
  border-width: 2px;
  margin-top: 2rem;
  margin-bottom: 2rem;
}


ol li {
  list-style-type: decimal;
  margin-left: 2rem;
}

p {
  margin-bottom: 1rem;
}

ul {
  margin-bottom: 1rem;
}

ul li {
  list-style-type: disc;
  margin-left: 2rem;
}

</style>

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
