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
      member: {
        data: {
          class: this.$store.page_data.api_reference.Exceptions.HttpException
        }
      }
    };
  },
  watch: {
    "member.data.class"() {
      console.log("data");
      setTimeout(function() {
        Prism.highlightAll();
      }, 1000);
    }
  },
}
</script>

<template lang="pug">
page()
  div.row
    div.col
      hr
      div.row
        div.col-4
          h2 Exceptions
          ul
            li
              p
                a(@click="member.data.class=$store.page_data.api_reference['Drash.Exceptions'].HttpException") HttpException
            li
              p
                a(@click="member.data.class=$store.page_data.api_reference['Drash.Exceptions'].HttpMiddlewareException") HttpMiddlewareException
          h2 Http
          ul
            li
              p
                a(@click="member.data.class=$store.page_data.api_reference['Drash.Http'].Middleware") Middleware
            li
              p
                a(@click="member.data.class=$store.page_data.api_reference['Drash.Http'].Resource") Resource
            li
              p
                a(@click="member.data.class=$store.page_data.api_reference['Drash.Http'].Response") Response
            li
              p
                a(@click="member.data.class=$store.page_data.api_reference['Drash.Http'].Server") Server
          h2 Interfaces
          ul
            li
              p
                a(@click="member.data.class=$store.page_data.api_reference['Drash.Interfaces'].LoggerConfigs") LoggerConfigs
          h2 CoreLoggers
          ul
            li
              p
                a(@click="member.data.class=$store.page_data.api_reference['Drash.CoreLoggers'].Logger") Logger
            li
              p
                a(@click="member.data.class=$store.page_data.api_reference['Drash.CoreLoggers'].ConsoleLogger") ConsoleLogger
            li
              p
                a(@click="member.data.class=$store.page_data.api_reference['Drash.CoreLoggers'].FileLogger") FileLogger
          h2 Services
          ul
            li
              p
                a(@click="member.data.class=$store.page_data.api_reference['Drash.Services'].HttpService") HttpService
            li
              p
                a(@click="member.data.class=$store.page_data.api_reference['Drash.Services'].HttpRequestService") HttpRequestService
        div.col-8
          template
            page-body-api-reference(:data="member.data" link="/src/exceptions/http_exception.ts")
</template>

<style lang="scss" scoped>
li p a {
  color: #ff7700 !important;
  cursor: pointer !important;
  &:hover {
    text-decoration: underline !important;
  }
}
</style>
