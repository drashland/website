/**
 * This webpack config file handles building the following environments:
 *
 *     - development
 *     - staging
 *     - production
 */

const webpack = require("webpack");
const path = require("path");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const repoConfigs = require("./configs.json");

module.exports = (envVars) => {
  console.log(
    `\nRunning webpack in ${
      getMode(envVars.environment)
    } mode for the ${envVars.environment} environment.\n`,
  );

  const configs = {
    build_date: new Date().toISOString(),
    environment: envVars.environment,
    deno: repoConfigs.deno,
    deno_std: repoConfigs.deno_std,
    dmm: Object.assign(repoConfigs.dmm, {
      base_url: getBaseUrl("dmm", envVars.environment),
    }),
    drash: Object.assign(repoConfigs.drash, {
      base_url: getBaseUrl("drash", envVars.environment),
    }),
    rhum: Object.assign(repoConfigs.rhum, {
      base_url: getBaseUrl("rhum", envVars.environment),
    }),
    wocket: Object.assign(repoConfigs.wocket, {
      base_url: getBaseUrl("wocket", envVars.environment),
    }),
  };

  console.log("Using the following configs for the webpack build(s):");
  console.log(configs);

  return {
    entry: {
      dmm_app:    path.resolve(__dirname, "src/modules/dmm/app.js"),
      drash_app:  path.resolve(__dirname, "src/modules/drash/app.js"),
      rhum_app:   path.resolve(__dirname, "src/modules/rhum/app.js"),
      wocket_app: path.resolve(__dirname, "src/modules/wocket/app.js"),
    },
    mode: getMode(envVars.environment),
    output: {
      path: path.resolve(__dirname, "assets/bundles/"),
      filename: `[name].${envVars.environment}.js`,
    },
    module: {
      rules: [
        {
          test: /\.pug$/,
          loader: "pug-plain-loader",
        },
        {
          test: /\.vue$/,
          loader: "vue-loader",
        },
        // this will apply to both plain `.js` files
        // AND `<script>` blocks in `.vue` files
        {
          test: /\.js$/,
          loader: "babel-loader",
        },
        // this will apply to both plain `.css` files
        // AND `<style>` blocks in `.vue` files
        {
          test: /(\.scss|\.css)$/,
          use: [
            "style-loader", // creates style nodes from JS strings
            "css-loader", // translates CSS into CommonJS
            "sass-loader", // compiles Sass to CSS, using Node Sass by default
          ],
        },
      ],
    },
    plugins: [
      // make sure to include the plugin!
      new VueLoaderPlugin(),
      // Add compile time vars
      new webpack.DefinePlugin({
        "process.env": {
          conf: JSON.stringify(configs),
        },
      }),
    ],
    resolve: {
      alias: {
        vue: isPublicFacingEnv(envVars.environment)
          ? "vue/dist/vue.min.js"
          : "vue/dist/vue.js",
        "/common":  path.resolve(__dirname, "assets/common"),
        "/dmm":     path.resolve(__dirname, "src/modules/dmm"),
        "/drash":   path.resolve(__dirname, "src/modules/drash"),
        "/rhum":    path.resolve(__dirname, "src/modules/rhum"),
        "/wocket":  path.resolve(__dirname, "src/modules/wocket"),
      }
    }
  };
};

function getBaseUrl(module, environment) {
  if (environment == "staging") {
    return `/staging/${module}`;
  }
  return `/${module}`;
}

function getMode(environment) {
  if (environment == "development") {
    return "development";
  }
  return "production";
}

function isPublicFacingEnv(environment) {
  let publicFacingEnvs = [
    "production",
    "staging",
  ];

  return publicFacingEnvs.indexOf(environment) != -1;
}
