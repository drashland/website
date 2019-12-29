const webpack = require("webpack");
const path = require("path");
const VueLoaderPlugin = require("vue-loader/lib/plugin");

module.exports = envVars => {
  const conf = {
    base_url: getBaseUrl(envVars),
    build_date: envVars.build_date,
    environment: envVars.environment,
    drash_latest_release: envVars.drash_latest_release,
    module_name: envVars.module_name, // Used in HTML <title> element for .vue files
  };

  if (isPublicFacingEnv(conf)) {
    conf.base_url = "/deno-drash-docs";
  }

  console.log(`\nRunning "${getMode(conf)}" configs.\n`);

  let bundleVersion = "";
  if (isPublicFacingEnv(conf)) {
    bundleVersion = ".min";
  }

  return {
    entry: path.resolve(__dirname, "public/assets/js/_bundle.js"),
    mode: getMode(conf),
    output: {
      path: path.resolve(__dirname, "public/assets/js/"),
      filename: `bundle${bundleVersion}.js`
    },
    module: {
      rules: [
        {
          test: /\.pug$/,
          loader: "pug-plain-loader"
        },
        {
          test: /\.vue$/,
          loader: "vue-loader"
        },
        // this will apply to both plain `.js` files
        // AND `<script>` blocks in `.vue` files
        {
          test: /\.js$/,
          loader: "babel-loader"
        },
        // this will apply to both plain `.css` files
        // AND `<style>` blocks in `.vue` files
        {
          test: /\.scss$/,
          use: [
            "style-loader", // creates style nodes from JS strings
            "css-loader", // translates CSS into CommonJS
            "sass-loader" // compiles Sass to CSS, using Node Sass by default
          ]
        }
      ]
    },
    plugins: [
      // make sure to include the plugin!
      new VueLoaderPlugin(),
      // Add compile time vars
      new webpack.DefinePlugin({
        "process.env": {
          conf: JSON.stringify(conf)
        }
      })
    ],
    resolve: {
      alias: {
        vue: isPublicFacingEnv(conf)
          ? "vue/dist/vue.min.js"
          : "vue/dist/vue.js",
        "/src": path.resolve(__dirname, "src"),
        "/components": path.resolve(__dirname, "src/vue/components"),
        "/public": path.resolve(__dirname, "public")
      }
    }
  };
};

function getBaseUrl(envVars) {
  let baseUrl = envVars.base_url
    ? envVars.base_url
    : "";

  return baseUrl;
}

function getMode(conf) {
  let mode = "production";

  if (conf.environment == "development") {
    mode = "development";
  }

  return mode;
}

function isPublicFacingEnv(conf) {
    return conf.environment == "production" || conf.environment == "staging";
}
