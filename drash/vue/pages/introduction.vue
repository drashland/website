<script>
export const resource = {
  paths: ["/", "/introduction", "/tutorials"],
  meta: {
    title: "Introduction",
  }
}

export default {
  data() {
    return {
      example_code: this.$example_code['drash/example_code/getting_started/quickstart']
    };
  },
}
</script>

<template lang="pug">
div
  div.c-page__header
    div.row
      div.col.bpm-center
        img.drash-logo(alt="Drash" :src="'/drash/assets/img/drash.svg'" style="display: none; height: 130px")
        h1.c-heading.c-heading--style-2 Drash
    div.row
      div.col
        p.shields(style="margin-top: 1rem; margin-bottom: 0")
          a(href="https://github.com/drashland/deno-drash/releases" target="_BLANK")
            img.margin-bottom--0(alt="Latest Drash Release" src="https://img.shields.io/github/release/drashland/deno-drash.svg?color=brightgreen&label=Latest" width="auto" height="20")
          a(href="https://github.com/drashland/deno-drash/actions" target="_BLANK")
            img.margin-bottom--0(alt="Drash CI" src="https://img.shields.io/github/workflow/status/drashland/deno-drash/master?label=CI" width="auto" height="20")
          a(href="https://discord.gg/SgejNXq" target="_BLANK")
            img.margin-bottom--0(alt="Drash Land Discord" src="https://img.shields.io/badge/Chat-on%20Discord-blue")
          a(href="https://twitter.com/drash_land" target="_BLANK")
            img.margin-bottom--0(alt="Drash Land Twitter" src="https://img.shields.io/twitter/url?label=%40drash_land&style=social&url=https%3A%2F%2Ftwitter.com%2Fdrash_land" width="auto" height="20")
          a(href="https://rb.gy/vxmeed" target="_BLANK")
            img.margin-bottom--0(alt="Drash YouTube" src="https://img.shields.io/badge/Tutorials-YouTube-red" width="auto" height="20")
  div.c-page__body
    hr
    div.row
      div.col
        h2-hash Drash In A Nutshell
        p Drash is a REST microframework for <a href="https://deno.land" target="_BLANK">Deno</a>'s HTTP server with zero dependencies.
        p Drash is designed to help you build your projects quickly with the ability to scale. You can build an API, a web app, an SPA (like these documentation pages), or even a static HTML site. How you use Drash is up to you, so it can be everything you need and nothing you don't &mdash; like a DRASH tent.
        p Learn more about Drash 
          a-base-url(href="/about-drash") here
          | .
    hr
    div.row
      div.col
        h2-hash Quickstart
        ol
          li
            p Write your <code>app.ts</code> file.
            p
              code-block-slotted(language="typescript")
                template(v-slot:title) app.ts
                template(v-slot:code)
                  | {{ example_code.app.contents }}
          li
            p Run your <code>app.ts</code> file.
            p
              code-block-slotted(language="text")
                template(v-slot:title) Terminal
                template(v-slot:code)
                  | deno run --allow-net app.ts

          li
            p Make a request.
              code-block-slotted(language="text")
                template(v-slot:title) Terminal
                template(v-slot:code)
                  | curl localhost:1447
                  | Hello World!
    hr
    div.row
      div.col
        h2-hash Importing
        p
          code-block-slotted(language="typescript" :header="false")
            template(v-slot:code)
              | // Import specific version
              | import { Drash } from "https://deno.land/x/drash@{tag or branch name}/mod.ts";
              | 
              | // Import master
              | import { Drash } from "https://deno.land/x/drash/mod.ts";
        p Drash versions can be found <a href="https://github.com/drashland/deno-drash/releases" target="_BLANK">here</a>.
    hr
    div.row
      div.col
        h2-hash Features
        ul
          li
            a-base-url(href="/advanced-tutorials/content-negotiation/user-profiles") Content Negotiation
          li
            a-base-url(href="/tutorials/servers/serving-static-paths") Static Path Routing
          li
            a-base-url(href="/tutorials/resources/creating-a-resource#regular-expression-uris") Regex Path Routing
          li
            a-base-url(href="/tutorials/middleware/introduction") Middleware
          li
            a-base-url(href="/tutorials/requests/handling-application-json-bodies") Body Handling: application/json
          li
            a-base-url(href="/tutorials/requests/handling-application-x-www-form-urlencoded-bodies") Body Handling: application/x-www-form-urlencoded
          li
            a-base-url(href="/tutorials/requests/handling-multipart-form-data-bodies") Body Handling: multipart/form-data
          li
            a-base-url(href="/tutorials/requests/handling-path-params") Handling Path Params
          li
            a-base-url(href="/tutorials/requests/handling-url-query-params") Handling URL Query Params
</template>
