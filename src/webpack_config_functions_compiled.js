"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  getBaseUrl: function getBaseUrl(envVars) {
    var baseUrl = envVars.base_url ? envVars.base_url : "";

    if (this.isPublicFacingEnv(envVars)) {
      baseUrl = "/deno-drash-docs";
    }

    return baseUrl;
  },
  getBundleVersion: function getBundleVersion(envVars) {
    var bundleVersion = "";

    if (this.isPublicFacingEnv(envVars)) {
      bundleVersion = ".min";
    }

    return bundleVersion;
  },
  getMode: function getMode(envVars) {
    var mode = "production";

    switch (envVars.environment) {
      case "development":
        mode = "development";
        break;
      default:
        break;
    }

    return mode;
  },
  getResolveAliasVue: function getResolveAliasVue(envVars) {
    return this.isPublicFacingEnv(envVars) ? "vue/dist/vue.min.js" : "vue/dist/vue.js";
  },
  isPublicFacingEnv: function isPublicFacingEnv(envVars) {
    var publicFacingEnvs = ["production", "staging"];

    return publicFacingEnvs.indexOf(envVars.environment) != -1;
  }
};
