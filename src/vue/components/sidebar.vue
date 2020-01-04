<template lang="pug">
div.c-sidebar
    div(v-if="$conf.environment != 'production'")
        p.l-environment-text(style="position:fixed; right: 0")
            span.text ENVIRONMENT: {{ $conf.environment }}
    div.c-sidebar__header(style="padding: 2rem 0;")
        div.row.align-items-center.text-align--center
            div.col
                h1.module-name.margin-bottom--0
                    a(:href="$conf.base_url + '/#/'")
                        img.margin-bottom--0(alt="Drash" :src="$conf.base_url + '/public/assets/img/logo_drash.png'" width="auto" height="80")
                        span.text-hide Drash
        div.row
          div.col
            p.shields.text-align--center(style="margin-top: 1rem; margin-bottom: 0")
              a(href="https://github.com/drashland/deno-drash/releases" target="_BLANK")
                img.margin-bottom--0(alt="GitHub release" src="https://img.shields.io/github/release/drashland/deno-drash.svg?color=brightgreen&label=latest" width="auto" height="20")
              a(href="https://travis-ci.org/drashland/deno-drash" target="_BLANK")
                img.margin-bottom--0(alt="Travis CI Build Master" src="https://img.shields.io/travis/drashland/deno-drash/master?label=master" width="auto" height="20")
    div.c-sidebar__body
        div.c-sidebar__menu
            a.heading-link(:href="$conf.base_url + '/#/introduction#top'") Introduction
            div.c-sidebar__menu-body
                a(:href="$conf.base_url + '/#/introduction#what-is-drash'") What is Drash?
                a(:href="$conf.base_url + '/#/introduction#quickstart'") Quickstart
                a(:href="$conf.base_url + '/#/introduction#importing'") Importing
                a(:href="$conf.base_url + '/#/introduction#features'") Features
                a(:href="$conf.base_url + '/#/introduction#about-these-docs'") About These Docs
                a(:href="$conf.base_url + '/#/introduction#file-an-issue'") File An Issue
                a(:href="$conf.base_url + '/#/introduction#requirements'") Requirements
            a.heading-link(:href="$conf.base_url + '/#/tutorials/introduction'") Tutorials
            div.c-sidebar__menu-body
                a(:href="$conf.base_url + '/#/tutorials/introduction'") Introduction
                a Resources
                div.l-submenu-1
                    a(:href="$conf.base_url + '/#/tutorials/resources/creating-a-resource'") Creating A Resource
                a Requests
                div.l-submenu-1
                    a(:href="$conf.base_url + '/#/tutorials/requests/handling-request-params'") Handling Request Params
                a Servers
                div.l-submenu-1
                    a(:href="$conf.base_url + '/#/tutorials/servers/creating-a-server'") Creating A Server
                    a(:href="$conf.base_url + '/#/tutorials/servers/serving-static-paths'") Serving Static Paths
                a Middleware
                div.l-submenu-1
                    a(:href="$conf.base_url + '/#/tutorials/middleware/introduction'") Introduction
                    a(:href="$conf.base_url + '/#/tutorials/middleware/adding-server-level-middleware'") Adding Server-Level Middleware
                    a(:href="$conf.base_url + '/#/tutorials/middleware/adding-resource-level-middleware'") Adding Resource-Level Middleware
                a Logging
                div.l-submenu-1
                    a(:href="$conf.base_url + '/#/tutorials/logging/logging-to-the-terminal'") Logging To The Terminal
                    a(:href="$conf.base_url + '/#/tutorials/logging/logging-to-files'") Logging To Files
                    router-link(href="/tutorials/logging/logging-using-log-from-deno-std") Logging Using Log From deno_std
                a Misc
                div.l-submenu-1
                    a(:href="$conf.base_url + '/#/tutorials/misc/adding-global-members'") Adding Global Members
                    //- a(:href="$conf.base_url + '/#/tutorials/misc/adding-third-party-modules'") Adding Third-Party Modules
            a.heading-link Advanced Tutorials
            div.c-sidebar__menu-body
                a(:href="$conf.base_url + '/#/advanced-tutorials/introduction'") Introduction
                a Content Negotiation
                div.l-submenu-1
                  a(:href="$conf.base_url + '/#/advanced-tutorials/content-negotiation/user-profiles'") User Profiles
                  div.l-submenu-2
                    link
                    a(:href="$conf.base_url + '/#/advanced-tutorials/content-negotiation/user-profiles/introduction'") Introduction
                    a(:href="$conf.base_url + '/#/advanced-tutorials/content-negotiation/user-profiles/part-1'") Part 1: Simulate Database Records
                    a(:href="$conf.base_url + '/#/advanced-tutorials/content-negotiation/user-profiles/part-2'") Part 2: Creating The Server
                    a(:href="$conf.base_url + '/#/advanced-tutorials/content-negotiation/user-profiles/part-3'") Part 3: Creating The Resource
                    a(:href="$conf.base_url + '/#/advanced-tutorials/content-negotiation/user-profiles/part-4'") Part 4: Handling Representations
                    a(:href="$conf.base_url + '/#/advanced-tutorials/content-negotiation/user-profiles/part-5'") Part 5: Adding More Content Types
                a Creating An API
                div.l-submenu-1
                  a-link(href="/advanced-tutorials/creating-an-api/coffee-and-tea") Coffee And Tea
                  div.l-submenu-2
                    a-link(href="/advanced-tutorials/creating-an-api/coffee-and-tea/introduction") Introduction
                    a-link(href="/advanced-tutorials/creating-an-api/coffee-and-tea/part-1") Part 1: Simulate Database Records
                    a-link(href="/advanced-tutorials/creating-an-api/coffee-and-tea/part-2") Part 2: Creating The Server
                    a-link(href="/advanced-tutorials/creating-an-api/coffee-and-tea/part-3") Part 3: Creating The Coffee Resource
                    a-link(href="/advanced-tutorials/creating-an-api/coffee-and-tea/part-3") Part 4: Creating The Tea Resource
                    a-link(href="/advanced-tutorials/creating-an-api/coffee-and-tea/part-5") Part 5: Modifying The Response Object Schema
            a.heading-link Third Party Tutorials
            div.c-sidebar__menu-body
                a(:href="$conf.base_url + '/#/third-party-tutorials/introduction'") Introduction
                a Databases
                div.l-submenu-1
                  a(:href="$conf.base_url + '/#/third-party-tutorials/databases/deno-mysql'") deno_mysql
            a.heading-link API Reference
            div.c-sidebar__menu-body
                a Exceptions
                div.l-submenu-1
                    a(:href="$conf.base_url + '/#/api-reference/exceptions/http-exception'") HttpException
                    a(:href="$conf.base_url + '/#/api-reference/exceptions/http-middleware-exception'") HttpMiddlewareException
                a Http
                div.l-submenu-1
                    a(:href="$conf.base_url + '/#/api-reference/http/middleware'") Middleware
                    a(:href="$conf.base_url + '/#/api-reference/http/resource'") Resource
                    a(:href="$conf.base_url + '/#/api-reference/http/response'") Response
                    a(:href="$conf.base_url + '/#/api-reference/http/server'") Server
                a Loggers
                div.l-submenu-1
                    a(:href="$conf.base_url + '/#/api-reference/loggers/logger'") Logger
                    a(:href="$conf.base_url + '/#/api-reference/loggers/console-logger'") ConsoleLogger
                    a(:href="$conf.base_url + '/#/api-reference/loggers/file-logger'") FileLogger
                a Services
                div.l-submenu-1
                    a(:href="$conf.base_url + '/#/api-reference/services/http-service'") HttpService
                a Util
                div.l-submenu-1
                    a(:href="$conf.base_url + '/#/api-reference/util/exports'") Exports
                    a(:href="$conf.base_url + '/#/api-reference/util/object-parser'") ObjectParser
    div.c-sidebar__footer
        div.row
            div.col.text-align--center
                p.l-icons
                    a(href="https://github.com/drashland/deno-drash", target="_BLANK")
                        i.fab.fa-github
                hr
                p Drash Documentation was last updated on {{ $conf.build_date }}
</template>

<script>
export default {
    data() {
        return {};
    },
}
</script>
