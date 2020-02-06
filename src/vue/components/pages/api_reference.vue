<script>
export const resource = {
  paths: ["/api-reference"],
  meta: {
    title: "API Reference",
    source_code_uri: "/api_reference",
  }
}

export default {
  data() {
    return {
    };
  },
}
</script>

<template lang="pug">
page()
  div.row
    div.col
      hr
      h2-hash What is Drash?
      p Drash is a REST microframework for <a href="https://deno.land" target="_BLANK">Deno</a>.
      p Drash is designed to help you build your projects quickly with the ability to scale. You can build an API, a web app, an SPA (like these documentation pages), or even a static HTML site. How you use Drash is up to you, so it can be everything you need and nothing you don't &mdash; like a DRASH tent.
      a.heading-link API Reference
      div.c-sidebar__menu-body
        a Exceptions
        div.l-submenu-1
          a-base-url(href="/api-reference/exceptions/http-exception") HttpException
          a-base-url(href="/api-reference/exceptions/http-middleware-exception") HttpMiddlewareException
        a Http
        div.l-submenu-1
          a-base-url(href="/api-reference/http/middleware") Middleware
          a-base-url(href="/api-reference/http/resource") Resource
          a-base-url(href="/api-reference/http/response") Response
          a-base-url(href="/api-reference/http/server") Server
        a Interfaces
        div.l-submenu-1
          a-base-url(href="/api-reference/interfaces/logger-configs") LoggerConfigs
        a Loggers
        div.l-submenu-1
          a-base-url(href="/api-reference/loggers/logger") Logger
          a-base-url(href="/api-reference/loggers/console-logger") ConsoleLogger
          a-base-url(href="/api-reference/loggers/file-logger") FileLogger
        a Services
        div.l-submenu-1
          a-base-url(href="/api-reference/services/http-service") HttpService
          a-base-url(href="/api-reference/services/http-request-service") HttpRequestService
        a Util
        div.l-submenu-1
          a-base-url(href="/api-reference/util/exports") Exports
          a-base-url(href="/api-reference/util/object-parser") ObjectParser
</template>
