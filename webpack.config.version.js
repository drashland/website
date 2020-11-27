/**
 * This webpack config file handles building a specific version of docs for a
 * specific module. For example, if I want to build Drash docs v1.3.0, then I
 * would use this file and not the default webpack.config.js file.
 */

const webpack = require("webpack");
const path = require("path");
const VueLoaderPlugin = require("vue-loader/lib/plugin");

module.exports = (envVars) => {
  console.log(
    `\nRunning webpack in production mode for the ${envVars.module}@${envVars.version} bundle.\n`,
  );

  return {
    entry: {
      [envVars.module + "_app"]: path.resolve(
        __dirname,
        `src/modules/${envVars.module}/app.js`,
      ),
    },
    mode: "development",
    output: {
      path: path.resolve(__dirname, "assets/bundles/"),
      filename: `[name].${envVars.version}.js`,
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
        vue: "vue/dist/vue.min.js",
        "/common": path.resolve(__dirname, "assets/common"),
        [`/${envVars.module}`]: path.resolve(__dirname, `src/modules/${envVars.module}`),
      },
    },
  };
};
