const webpack = require("webpack");
const path = require("path");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
let repoConfigs = require("./configs.json");

module.exports = (envVars) => {
  console.log(
    `\nRunning webpack in production mode for the ${envVars.module}@${envVars.version} bundle.\n`,
  );

  console.log("Using the following configs for the webpack build:");

  const configs = {
    build_date: new Date().toISOString(),
    environment: envVars.environment,
    deno: repoConfigs.deno,
    deno_std: repoConfigs.deno_std,
    [envVars.module]: Object.assign(repoConfigs[envVars.module], {
      base_url: "/" + envVars.module + "/" + envVars.version,
    }),
  };

  // dmm's example blocks use Drash's latest version, so it's required in this
  // case. If we don't add Drash in, then dmm's Vue app won't render.
  if (envVars.module == "dmm") {
    configs.drash = {
      latest_version: repoConfigs.drash.latest_version,
    };
  }

  console.log(configs);

  return {
    entry: {
      [envVars.module + "_app"]: path.resolve(
        __dirname,
        envVars.module + "/assets/js/_app.js",
      ),
    },
    mode: "production",
    output: {
      path: path.resolve(
        __dirname,
        envVars.module + "/" + envVars.version + "/",
      ),
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
      // Add compile time vars
      new webpack.DefinePlugin({
        "process.env": {
          conf: JSON.stringify(configs),
        },
      }),
    ],
    resolve: {
      alias: {
        vue: "vue/dist/vue.min.js",
        "/common": path.resolve(__dirname, "assets/common"),
        ["/" + envVars.module]: path.resolve(__dirname, envVars.module),
      },
    },
  };
};
