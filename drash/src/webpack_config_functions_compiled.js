"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  getBaseUrl: function getBaseUrl(conf) {
    var baseUrl = conf.base_url ? conf.base_url : "";

    if (this.isPublicFacingEnv(conf)) {
      baseUrl = "/deno-drash-docs";
    }

    return baseUrl;
  },
  getBundleVersion: function getBundleVersion(conf) {
    var bundleVersion = "";

    if (this.isPublicFacingEnv(conf)) {
      bundleVersion = ".min";
    }

    return bundleVersion;
  },
  getMode: function getMode(conf) {
    var mode = "production";

    switch (conf.environment) {
      case "development":
        mode = "development";
        break;
      default:
        break;
    }

    return mode;
  },
  getResolveAliasVue: function getResolveAliasVue(conf) {
    return this.isPublicFacingEnv(conf) ? "vue/dist/vue.min.js" : "vue/dist/vue.js";
  },
  isPublicFacingEnv: function isPublicFacingEnv(conf) {
    var publicFacingEnvs = ["production", "staging"];

    return publicFacingEnvs.indexOf(conf.environment) != -1;
  }
};
