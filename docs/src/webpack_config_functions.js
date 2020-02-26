export default {
  getBaseUrl: function(envVars) {
    let baseUrl = envVars.base_url
      ? envVars.base_url
      : "";

    if (this.isPublicFacingEnv(envVars)) {
      baseUrl = "/deno-drash-docs";
    }

    return baseUrl;
  },
  getMode: function(envVars) {
    let mode = "production";

    switch (envVars.environment) {
      case "development":
        mode = "development";
        break;
      default:
        break;
    }

    return mode;
  },
  getResolveAliasVue: function(envVars) {
    return this.isPublicFacingEnv(envVars)
      ? "vue/dist/vue.min.js"
      : "vue/dist/vue.js";
  },
  isPublicFacingEnv: function(envVars) {
    let publicFacingEnvs = [
      "production",
      "staging",
    ];

    return publicFacingEnvs.indexOf(envVars.environment) != -1;
  }
}
