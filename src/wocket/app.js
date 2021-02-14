import Vue from "vue";

////////////////////////////////////////////////////////////////////////////////
// FILE MARKER - PROTOTYPES ////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

Vue.prototype.$conf = window.drash_api_configs;

////////////////////////////////////////////////////////////////////////////////
// FILE MARKER - COMPONENTS ////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

import VueAppRoot from "/wocket/vue/app.vue";

import "/common/vue/global_components.js";

////////////////////////////////////////////////////////////////////////////////
// FILE MARKER - FILTERS ///////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

import MarkdownIt from "markdown-it";
const markdownIt = new MarkdownIt();
Vue.filter('markdown-it', function(value) {
  return markdownIt.render(value);
});

////////////////////////////////////////////////////////////////////////////////
// FILE MARKER - ROUTER ////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

import VueRouter from "vue-router";
Vue.use(VueRouter);
import router from "/wocket/router.js";

////////////////////////////////////////////////////////////////////////////////
// FILE MARKER - VUE APP INITIALIZATION ////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

window.app = new Vue({
  el: "#vue_app_mount",
  components: {
    VueAppRoot
  },
  router: router,
});
