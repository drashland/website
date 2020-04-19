const webpack = require("webpack");
const path = require("path");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const webpackConfigFns = require("./src/webpack_config_functions_compiled").default;

module.exports = envVars => {
  const confPath = "./conf/env_vars_" + envVars.environment + ".json";
  let conf = require(confPath);
  conf.build_date = getDateTimeISO("UTC-5").datetime;

  console.log(`\nRunning "${webpackConfigFns.getMode(conf)}" mode using ${confPath} configs.\n`);
  console.log(conf);

  return {
    entry: {
      bundle: path.resolve(__dirname, "public/assets/js/_bundle.js"),
      router: path.resolve(__dirname, "public/assets/js/_router.js"),
      app: path.resolve(__dirname, "public/assets/js/_app.js")
    },
    mode: webpackConfigFns.getMode(conf),
    output: {
      path: path.resolve(__dirname, "public/assets/js/"),
      filename: `[name].${conf.environment}.js`
    },
    optimization: {
      splitChunks: {
        chunks: 'all'
      }
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
        vue: webpackConfigFns.getResolveAliasVue(conf),
        "/src": path.resolve(__dirname, "src"),
        "/components": path.resolve(__dirname, "src/vue/components"),
        "/public": path.resolve(__dirname, "public")
      }
    }
  };
};


function getDateTimeISO(utcOffset, isDaylightSavings = false) {
  if (typeof utcOffset !== 'string') {
    throw new Error('Argument #1 (utcOffset) must be a string (e.g., "UTC-5", "UTC-)');
  }

  const UTC_OFFSETS = {
    "UTC-4": {
      offset: -4,
      abbreviation_standard: "AST", // Atlantic Standard Time
    },
    "UTC-5": {
      offset: -5,
      abbreviation_standard: "EST", // Eastern Standard Time
      abbreviation_daylight: "EDT"  // Eastern Daylight Time
    },
    "UTC-6": {
      offset: -6,
      abbreviation_standard: "CST", // Central Standard Time
      abbreviation_daylight: "CDT"  // Central Daylight Time
    }
  };

  let offset = UTC_OFFSETS[utcOffset].offset;
  let timeZoneAbbreviation = UTC_OFFSETS[utcOffset].abbreviation_standard;

  if (isDaylightSavings) {
    offset += 1;
    timeZoneAbbreviation = UTC_OFFSETS[utcOffset].abbreviation_daylight;
  }

  let dateTime = new Date();
  let hours = dateTime.getUTCHours() + offset;

  dateTime.setUTCHours(hours);

  let dateString = dateTime.toISOString();
  let split = dateString.split("T");
  let date  = split[0];
  let time  = split[1].substring(0, split[1].length - 1);

  return {
    abbreviation: timeZoneAbbreviation,
    date: date,
    datetime: date + " " + time + " " + timeZoneAbbreviation,
    time: time,
  }
}
