<script>
import AppRoot from "/common/vue/app_root.vue";

export default {
  components: {
    AppRoot,
  },
  data() {
    return {
      build_date: this.$conf.build_date,
      environment: this.$conf.environment,
      sidebar: {
        api_reference_href: "https://doc.deno.land/https/deno.land/x/drash@v1.x/mod.ts",
        base_url: this.$conf.drash.base_url + "/#",
        github_href: "https://github.com/drashland/drash",
        logo: "/assets/common/img/logo_drash.svg",
        menus: {
          "Introduction": {
            "Drash In A Nutshell": "/#quickstart",
            "Quickstart": "/#importing",
            "Importing": "/#features",
            "Features": "/#features",
            "About Drash": "/#features",
            "Drash Lifecycle Diagram": "/#features",
          },
          "Tutorials": {
            "Introduction": "/tutorials",
            "Resources": {
              "Creating A Resource": "/tutorials/resources/creating-a-resource"
            },
            "Servers": {
              "Creating An HTTP Server": "/tutorials/servers/creating-an-http-server",
              "Creating An HTTPS Server": "/tutorials/servers/creating-an-https-server",
              "Serving Static Paths": "/tutorials/servers/serving-static-paths",
            },
            "Requests": {
              "Handling URL Query Params": "/tutorials/requests/handling-url-query-params",
              "Handling JSON Bodies": "/tutorials/requests/handling-json-bodies",
              "Handling URL Encoded Bodies": "/tutorials/requests/handling-url-encoded-bodies",
              "Handling Multipart Bodies": "/tutorials/requests/handling-multipart-bodies",
              "Handling Path Params": "/tutorials/requests/handling-path-params",
            },
            "Responses": {
              "Accept Header": "/tutorials/misc/redirects",
              //"Customizing Content Negotiation": "/tutorials/misc/redirects",
              "Redirects": "/tutorials/misc/redirects",
            },
            "Middleware": {
              Introduction: "/tutorials/middleware/introduction",
              "Adding Server-Level Middleware": "/tutorials/middleware/server-level-middleware",
              "Adding Resource-Level Middleware": "/tutorials/middleware/resource-level-middleware",
              "Using Drash Middleware Modules": "/tutorials/middleware/drash-middleware-modules",
            },
            "Cookies": {
              "Request Cookies": "/tutorials/cookies/request-cookies",
              "Response Cookies": "/tutorials/cookies/response-cookies",
            },
            "Front-End": {
              "Introduction": "/tutorials/front-end/introduction",
              "Creating A Template": "/tutorials/front-end/creating-a-template",
              "Extending A Template": "/tutorials/front-end/extending-a-template",
              "Adding Template Partials": "/tutorials/front-end/adding-template-partials",
              "In-Template JavaScript": "/tutorials/front-end/in-template-javascript",
            },
            "Error Handling": {
              "Customizing Error Handling": "/tutorials/error-handling/customizing-error-handling",
              "Angular Deep Linking": "/tutorials/error-handling/angular-deep-linking",
            },
            "Misc": {
              "Adding Global Members": "/tutorials/misc/adding-global-members",
              "Enabling Pretty Links": "/tutorials/misc/pretty-links",
            }
          },
          "Advanced Tutorials": {
            "Content Negotiation": {
            },
            "Creating An API": {
            },
            "Creating A Static HTML App": {
            },
            "Creating A Vue App": {
            },
            "Creating A React App": {
            },
            "Using Drash With Docker": {
            }
          }
        },
        module: "drash",
      }
    };
  },
}
</script>

<template lang="pug">
app-root(
  :build_date="build_date"
  :environment="environment"
  :sidebar="sidebar"
)
</template>
