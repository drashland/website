<script>
export const resource = {
  paths: [
    "/tutorials/testing/unit-testing"
  ],
  meta: {
    title: "Unit Testing",
    source_code_uri: "/tutorials/testing/unit_testing"
  }
}

export default {
  data() {
    return {
      example_code: this.$example_code['drash/example_code/tutorials/testing/unit_testing'],
      toc: {
        items: [
          "Before You Get Started",
          "Folder Structure End State",
          "Steps",
          "Writing Your Tests",
        ]
      }
    };
  },
}
</script>

<template lang="pug">
page-tutorial(
  :toc="toc"
)
  div.row
    div.col
      hr
      h2-hash Before You Get Started
      p In this tutorial, you will learn how to test your Drash server and its resources using Deno Standard Modules' <a href="https://github.com/denoland/deno/tree/master/std/testing" target="_BLANK">testing</a> module.
      p This tutorial will cover testing three resources in a single Drash server. Two of the resources will have a <code>database</code> property to simulate querying a database for records.
      p-view-source-code(:source_code_uri="$route.meta.source_code_uri")
  div.row
    div.col
      hr
      div-folder-structure-end-state(:code_block_data="example_code.folder_structure")
  div.row
    div.col
      hr
      h2-hash Steps
      ol
        li
          p Create your <code>HomeResource</code> file.
          code-block-slotted(language="typescript")
            template(v-slot:title) {{ example_code.home_resource.filepath }}
            template(v-slot:code) {{ example_code.home_resource.contents }}
        li
          p Create your <code>OrdersResource</code> file.
          code-block-slotted(language="typescript")
            template(v-slot:title) {{ example_code.orders_resource.filepath }}
            template(v-slot:code) {{ example_code.orders_resource.contents }}
        li 
          p Create your <code>UsersResource</code> file.
          code-block-slotted(language="typescript")
            template(v-slot:title) {{ example_code.users_resource.filepath }}
            template(v-slot:code) {{ example_code.users_resource.contents }}
        li
          p Create your <code>app</code> file.
          code-block-slotted(language="typescript")
            template(v-slot:title) {{ example_code.app.filepath }}
            template(v-slot:code) {{ example_code.app.contents }}
  div.row
    div.col
      hr
      h2-hash Writing Your Tests
      ol
        li
          p Create your test runner file. Your test runner file will import and run your tests. Your server needs to run so the testing module can make requests to your server using <code>fetch()</code> and receive the responses you expect.
          code-block-slotted(language="typescript")
            template(v-slot:title) {{ example_code.run_tests.filepath }}
            template(v-slot:code) {{ example_code.run_tests.contents }}
        li
          p Write your tests.
          code-block-slotted(language="typescript")
            template(v-slot:title) {{ example_code.tests.filepath }}
            template(v-slot:code) {{ example_code.tests.contents }}
        li
          p Run your test runner file.
          code-block-slotted
            template(v-slot:title) Terminal
            template(v-slot:code)
              | deno test --allow-net run_tests.ts
          p You should receive the following output:
          code-block-slotted
            template(v-slot:title) Terminal
            template(v-slot:code)
              | running 7 tests
              | test HomeResource - GET / ... ok (48ms)
              | test UsersResource - GET /users/1 ... ok (9ms)
              | test UsersResource - GET /users/1388873 ... ok (8ms)
              | test UsersResource - GET /users/1983765 ... ok (7ms)
              | test OrdersResource - GET /orders/1 ... ok (13ms)
              | test OrdersResource - GET /orders/1090987 ... ok (10ms)
              | test OrdersResource - GET /orders/8878213 ... ok (6ms)
              |
              | test result: ok. 7 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out (103ms)


