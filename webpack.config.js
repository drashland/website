const webpack = require("webpack");
const path = require("path");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const webpackConfigFns = require("./src/webpack_config_functions_compiled").default;

module.exports = envVars => {
  //////////////////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////////////////
  //                                                                                              //
  // MAKE SURE THIS CONF SHIT IS REFLECTED IN RESPONSE_SERVICE.TS WHERE REQUIRED                  //
  // MAKE SURE THIS CONF SHIT IS REFLECTED IN RESPONSE_SERVICE.TS WHERE REQUIRED                  //
  // MAKE SURE THIS CONF SHIT IS REFLECTED IN RESPONSE_SERVICE.TS WHERE REQUIRED                  //
  // MAKE SURE THIS CONF SHIT IS REFLECTED IN RESPONSE_SERVICE.TS WHERE REQUIRED                  //
  //                                                                                              //
  //////////////////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////////////////
  const conf = {
    base_url: webpackConfigFns.getBaseUrl(envVars),
    build_date: envVars.build_date,
    bundle_version: webpackConfigFns.getBundleVersion(envVars),
    environment: envVars.environment,
    fav_icon_url: "/deno-drash-docs",
    drash_latest_release: envVars.drash_latest_release,
    module_name: envVars.module_name, // Used in HTML <title> element for .vue files
    requirements_url: "https://github.com/drashland/deno-drash/blob/master/REQUIREMENTS.md"
  };

  console.log(`\nRunning "${webpackConfigFns.getMode(envVars)}" configs.\n`);
  console.log(conf);

  return {
    entry: path.resolve(__dirname, "public/assets/js/_bundle.js"),
    mode: webpackConfigFns.getMode(envVars),
    output: {
      path: path.resolve(__dirname, "public/assets/js/"),
      filename: `bundle${conf.bundle_version}.js`
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
          loader: "babel-loader",
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
        vue: webpackConfigFns.getResolveAliasVue(envVars),
        "/src": path.resolve(__dirname, "src"),
        "/components": path.resolve(__dirname, "src/vue/components"),
        "/public": path.resolve(__dirname, "public")
      }
    }
  };
};
