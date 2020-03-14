<template lang="pug">
div.c-sidebar
  div(v-if="$conf.environment != 'production'")
      p.l-environment-text(style="position:fixed; right: 0")
          span.text ENVIRONMENT: {{ $conf.environment }}
  div.c-sidebar__header(style="padding: 2rem 0;")
    div.row.align-items-center.text-align--center
      div.col
        h1.module-name.margin-bottom--0
          a(href="/")
            img.margin-bottom--0(alt="Drash" :src="'/public/assets/img/drash.svg'" width="auto" height="130")
            span.text-hide Drash
  div.c-sidebar__body
    div.c-sidebar__menu
      a-base-url.heading-link(href="/introduction#top") Introduction
      div.c-sidebar__menu-body
        a-base-url(href="/introduction#drash-in-a-nutshell") Drash In A Nutshell
        a-base-url(href="/introduction#quickstart") Quickstart
        a-base-url(href="/introduction#importing") Importing
        a-base-url(href="/introduction#features") Features
        a-base-url(href="/about-drash") About Drash
        a-base-url(href="/lifecycle-diagram") Drash Lifecycle Diagram
        a-base-url(href="/dependency-management") Dependency Management
        a-base-url(href="/issues") Issues
        a(href="https://github.com/drashland/deno-drash" target="_BLANK") View On GitHub &mdash; Drash
        a(href="https://github.com/drashland/deno-drash-docs" target="_BLANK") View On GitHub &mdash; Drash Docs
      a-base-url.heading-link(href="/tutorials") Tutorials
      div.c-sidebar__menu-body
        a-base-url(href="/tutorials/introduction") Introduction
        a Resources
        div.l-submenu-1
          a-base-url(href="/tutorials/resources/creating-a-resource") Creating A Resource
        a Requests
        div.l-submenu-1
          a-base-url(href="/tutorials/requests/handling-url-query-params") Handling URL Query Params
          a-base-url(href="/tutorials/requests/handling-application-json-bodies") Handling JSON Bodies
          a-base-url(href="/tutorials/requests/handling-application-x-www-form-urlencoded-bodies") Handling URL Encoded Bodies
          a-base-url(href="/tutorials/requests/handling-multipart-form-data-bodies") Handling Multipart Bodies
          a-base-url(href="/tutorials/requests/handling-path-params") Handling Path Params
        a Servers
        div.l-submenu-1
          a-base-url(href="/tutorials/servers/creating-a-server") Creating A Server
          a-base-url(href="/tutorials/servers/serving-static-paths") Serving Static Paths
        a Middleware
        div.l-submenu-1
          a-base-url(href="/tutorials/middleware/introduction") Introduction
          a-base-url(href="/tutorials/middleware/adding-server-level-middleware") Adding Server-Level Middleware
          a-base-url(href="/tutorials/middleware/adding-resource-level-middleware") Adding Resource-Level Middleware
          a-base-url(href="/tutorials/middleware/morgan-style-logging-middleware") Morgan-Style Logging Middleware
        a Cookies
        div.l-submenu-1
          a-base-url(href="/tutorials/cookies/request-cookies") Request Cookies
          a-base-url(href="/tutorials/cookies/response-cookies") Response Cookies
        a Logging
        div.l-submenu-1
          a-base-url(href="/tutorials/logging/logging-to-the-terminal") Logging To The Terminal
          a-base-url(href="/tutorials/logging/logging-to-files") Logging To Files
          router-link(href="/tutorials/logging/logging-using-log-from-deno-std") Logging Using Log From deno_std
        a Testing
        div.l-submenu-1
          a-base-url(href="/tutorials/testing/unit-testing") Unit Testing
        a Misc
        div.l-submenu-1
          a-base-url(href="/tutorials/misc/adding-global-members") Adding Global Members
          //- a-base-url(href="/tutorials/misc/adding-third-party-modules") Adding Third-Party Modules
      a-base-url.heading-link(href="/advanced-tutorials") Advanced Tutorials
      div.c-sidebar__menu-body
        a-base-url(href="/advanced-tutorials/introduction") Introduction
        a-base-url(href="/advanced-tutorials/content-negotiation/user-profiles") Content Negotiation
        div.l-submenu-1
          a-base-url(href="/advanced-tutorials/content-negotiation/user-profiles/introduction") Introduction
          a-base-url(href="/advanced-tutorials/content-negotiation/user-profiles/part-1") Part 1: Simulate Database Records
          a-base-url(href="/advanced-tutorials/content-negotiation/user-profiles/part-2") Part 2: Creating The Server
          a-base-url(href="/advanced-tutorials/content-negotiation/user-profiles/part-3") Part 3: Creating The Resource
          a-base-url(href="/advanced-tutorials/content-negotiation/user-profiles/part-4") Part 4: Handling Representations
          a-base-url(href="/advanced-tutorials/content-negotiation/user-profiles/part-5") Part 5: Adding More Content Types
        a-base-url(href="/advanced-tutorials/creating-an-api/coffee-and-tea") Creating An API
        div.l-submenu-1
          a-base-url(href="/advanced-tutorials/creating-an-api/coffee-and-tea/introduction") Introduction
          a-base-url(href="/advanced-tutorials/creating-an-api/coffee-and-tea/part-1") Part 1: Simulate Database Records
          a-base-url(href="/advanced-tutorials/creating-an-api/coffee-and-tea/part-2") Part 2: Creating The Server
          a-base-url(href="/advanced-tutorials/creating-an-api/coffee-and-tea/part-3") Part 3: Creating The Resources
          a-base-url(href="/advanced-tutorials/creating-an-api/coffee-and-tea/part-4") Part 4: Modifying The Response Schema
      a-base-url.heading-link(href="/third-party-tutorials") Third Party Tutorials
      div.c-sidebar__menu-body
        a-base-url(href="/third-party-tutorials/introduction") Introduction
        a Databases
        div.l-submenu-1
          a-base-url(href="/third-party-tutorials/databases/deno-mysql") deno_mysql
          a-base-url(href="/third-party-tutorials/databases/deno-postgres") deno-postgres
        a Template Engines
        div.l-submenu-1
          a-base-url(href="/third-party-tutorials/template-engines/dejs") dejs
      a-base-url.heading-link(href="/api-reference") API Reference
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
          a-base-url(href="/api-reference/interfaces/log-level-structure") LogLevelStructure
          a-base-url(href="/api-reference/interfaces/logger-configs") LoggerConfigs
          a-base-url(href="/api-reference/interfaces/parsed-request-body") ParsedRequestBody
          a-base-url(href="/api-reference/interfaces/server-configs") ServerConfigs
        a Loggers
        div.l-submenu-1
          a-base-url(href="/api-reference/loggers/logger") Logger
          a-base-url(href="/api-reference/loggers/console-logger") ConsoleLogger
          a-base-url(href="/api-reference/loggers/file-logger") FileLogger
        a Services
        div.l-submenu-1
          a-base-url(href="/api-reference/services/http-service") HttpService
          a-base-url(href="/api-reference/services/http-request-service") HttpRequestService
  div.c-sidebar__footer(style="background: #000000")
    div.row
      div.col.text-align--center
        p(style="margin-top: 2rem; color: #ffffff; font-size: .9rem") Drash Documentation was last updated on {{ $conf.build_date }}
</template>

<script>
export default {
    data() {
        return {};
    },
}
</script>
