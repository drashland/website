/**
 * This webpack config file handles building the following environments:
 *
 *     - development
 */

const webpack = require("webpack");
const path = require("path");
const VueLoaderPlugin = require("vue-loader/lib/plugin");

module.exports = (envVars) => {
  console.log(
    `\nRunning webpack in development mode for the development environment.\n`,
  );

  return {
    entry: {
      dmm_app:    path.resolve(__dirname, "src/modules/dmm/app.js"),
      drash_app:  path.resolve(__dirname, "src/modules/drash/app.js"),
      rhum_app:   path.resolve(__dirname, "src/modules/rhum/app.js"),
      wocket_app: path.resolve(__dirname, "src/modules/wocket/app.js"),
    },
    mode: "development",
    output: {
      path: path.resolve(__dirname, "assets/bundles/"),
      filename: `[name].development.js`,
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
    ],
    resolve: {
      alias: {
        vue: "vue/dist/vue.js",
        "/common":  path.resolve(__dirname, "assets/common"),
        "/dmm":     path.resolve(__dirname, "src/modules/dmm"),
        "/drash":   path.resolve(__dirname, "src/modules/drash"),
        "/rhum":    path.resolve(__dirname, "src/modules/rhum"),
        "/wocket":  path.resolve(__dirname, "src/modules/wocket"),
      }
    }
  };
};
