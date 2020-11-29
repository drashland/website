/**
 * This webpack config file handles building a specific version of docs for a
 * specific module. For example, if I want to build Drash docs v1.3.0, then I
 * would use this file and not the default webpack.config.js file.
 */

const configsCommon = require("./configs.webpack.common.js");
const path = require("path");

module.exports = (envVars) => {
  console.log(
    `Building webpack bundle...
Mode: production (JS code will be minified)
Bundle: ${envVars.module}.${envVars.version}.js`);

  return Object.assign(configsCommon, {
    entry: {
      [envVars.module]: path.resolve(
        __dirname,
        `src/${envVars.module}/app.js`,
      ),
    },
    mode: "production",
    output: {
      path: path.resolve(__dirname, "assets/bundles/"),
      filename: `[name].${envVars.version}.js`,
    },
    resolve: {
      alias: {
        vue: "vue/dist/vue.min.js",
        "/common": path.resolve(__dirname, "assets/common"),
        [`/${envVars.module}`]: path.resolve(__dirname, `src/${envVars.module}`),
      },
    },
  });
};
