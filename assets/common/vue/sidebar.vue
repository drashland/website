<script>
export default {
  props: {
    api_reference_href: {
      type: String,
      required: false,
    },
    base_url: {
      type: String,
      required: true,
    },
    github_href: {
      type: String,
      required: true,
    },
    example_applications: {
      type: Array,
      required: true
    },
    menus: {
      type: Object,
      required: true,
    },
    logo: {
      type: String,
      required: true,
    },
    module: {
      type: String,
      required: true,
    },
    styles: {
      type: Object,
      default: () => {
        return {
          background_color: "#282633"
        }
      }
    }
  },
  methods: {
    closeSidebar() {
      this.$root.$emit("close-sidebar");
    },
    toggleSubMenuItems(el) {
      let target = el.target
      const tagName = target.tagName
      if (["p", "a"].includes(tagName.toLowerCase())) {
        target = target.parentElement
      }
      target.nextElementSibling.classList.toggle("hide--soft")
      const p = target.children[0]
      p.classList.toggle("rotate-fortyfive-deg")
    },
    getMenuItemLink(menuItemName, href) {
      if (menuItemName == "Latest News") {
        return href;
      }
      if (menuItemName == "Versions") {
        return href;
      }
      return this.base_url + href;
    }
  }
}
</script>

<style lang="scss" scoped>

ul li {
  list-style-type: none;
}

ul li ul li {
  margin-left: 0;
}

ul li ul li a {
  padding-left: 3rem !important;
}

.sidebar {
  -webkit-overflow-scrolling: touch;
  display: block;
  height: 100%;
  overflow: auto;
  top: 0;
  left: 0;
  height: 100%;
  position: fixed;
  border-right: 1px solid #e8e8e8;
  box-shadow: 7px 0 12px -6px rgba(100,100,100,0.2);
  z-index: 10;
  a {
      color: #f4f4f4;
      &:hover {
          text-decoration: none;
      }
  }
}

.menu-name {
  color: #f4f4f4;
  background: #36304a;
  border-bottom: 1px solid #3f3955;
  font-weight: bold;
  letter-spacing: 0.10875rem;
  margin: 0;
  text-transform: uppercase;
}

.menu-name-link {
  display: block;
  padding: 0.725rem 1.45rem;
  &:hover {
    color: #f4f4f4;
  }
  &.is-link {
    cursor: pointer;
    &:hover {
      color: #333333;
      background-color: #f4f4f4;
    }
  }
}

.rotate-fortyfive-deg {
    transform: rotate(45deg);
}

.menu-item {
  margin-left: 0;
  &:last-of-type {
    border-bottom: 1px solid #3f3955;
  }
}

.menu-item-link,
.menu2-item-link {
  display: block;
  color: #f4f4f4;
  &:hover {
    color: #333333;
    background-color: #f4f4f4;
  }
}

span.menu-item-link:hover {
    cursor: pointer;
}
span.menu-item-link:hover > a {
    color: #333333;
    background-color: #f4f4f4;
}
span.menu-item-link {
    display: flex;
}

/* Menu items that are not 'collapsable' */
.menu-item > .menu-item-link,
.menu2-item-link {
    padding: 0rem 1.45rem
}

.collapser {
    padding-right: 0.5rem;
    color: #019e01;
    margin: 0;
    font-size: 1.2rem;
    transform-origin: 7px; /* Because this elem doesnt have equal padding, so using rotate makes it look al skewiff */
}

.hide--soft {
    display: none;
}
</style>

<template lang="pug">
div.sidebar.text-sm(:style="'background-color: ' + styles.background_color + ';'")
  a(:href="base_url + '/'")
    img(:alt="module" :src="logo" style="height: 150px").mx-auto.m-10
  div(style="border-top: 1px solid #3f3955;")
    div(v-for="(sub_menu_items, menu_item_name) in menus")
      div.menu-name
        a.menu-name-link {{ menu_item_name }}
      ul.mb-0
        li.menu-item(v-for="(href, link_text) in sub_menu_items")
          span.flex.menu-item-link(v-if="typeof href == 'object'" @click="toggleSubMenuItems")
            p.collapser +
            a {{ link_text }}
          ul.hide--soft.mb-0(v-if="typeof href == 'object'")
            li.menu2-item(v-for="(href, link_text) in sub_menu_items[link_text]")
              a.menu2-item-link(:href="base_url + href" @click="closeSidebar()") {{ link_text }}
          a(
            v-else-if="menu_item_name == 'Versions'"
            :href="getMenuItemLink(menu_item_name, href)"
            @click="closeSidebar()"
          ).menu-item-link {{ link_text }}
          a(
            v-else
            :href="getMenuItemLink(menu_item_name, href)"
            @click="closeSidebar()"
            :target="menu_item_name == 'Latest News' && link_text != 'No articles yet' ? '_BLANK' : ''"
          ).menu-link-item {{ link_text }}
    div(v-if="example_applications.length")
      div.menu-name
        a.menu-name-link Example Applications
      ul.mb-0(v-for="app in example_applications")
        li.menu-item
          a.no-hover.menu-item-link(:href="app.link") {{ app.title }}
    div.menu-name(v-if="api_reference_href")
      a.menu-name-link.is-link(:href="api_reference_href" @click="closeSidebar()") API Reference
    div.menu-name
      a.menu-name-link.is-link(:href="github_href" @click="closeSidebar()") GitHub
    div.menu-name
      a.menu-name-link.is-link(href="/") Back To Drash Land
  p(style="color: #f4f4f4").mt-5.text-sm.text-center
    a(href="https://drash.land") &copy; 2019-2020 Drash Land
</template>
