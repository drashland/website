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
      example_code: this.$app_data.example_code['/src/example_code/tutorials/testing/unit_testing'],
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
           code-block(:data="example_code.home_resource")
        li
          p Create your <code>OrdersResource</code> file.
           code-block(:data="example_code.orders_resource")
        li 
          p Create your <code>UsersResource</code> file.
           code-block(:data="example_code.users_resource")
        li
          p Create your app file.
            code-block(:data="example_code.app")
  div.row
    div.col
      hr
      h2-hash Writing Your Tests
      ol
        li
          p Create your test runner file. Your test runner file will run your server, import and run your tests, and shut down your server when all tests have been run. Your server needs to run so the testing module can make requests to your server using <code>fetch()</code> and receive the responses you expect.
          code-block(:data="example_code.run_tests")
        li
          p Write your tests.
          code-block(:data="example_code.tests")
        li
          p Run your test runner file.
          code-block-slotted
            template(v-slot:title) Terminal
            template(v-slot:code)
              | deno --allow-net --allow-env run_tests.ts
          p You should receive the following output:
          code-block-slotted
            template(v-slot:title) Terminal
            template(v-slot:code)
              | Deno server started at localhost:1447.
              |
              | running 7 tests
              | OK     HomeResource - GET / (6.00ms)
              | OK     UsersResource - GET /users/1 (4.00ms)
              | OK     UsersResource - GET /users/1388873 (2.00ms)
              | OK     UsersResource - GET /users/1983765 (2.00ms)
              | OK     OrdersResource - GET /orders/1 (4.00ms)
              | OK     OrdersResource - GET /orders/1090987 (2.00ms)
              | OK     OrdersResource - GET /orders/8878213 (0.00ms)
              |
              | test result: OK 7 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out (24.00ms)
          p If you want to silence the "Deno server started at localhost:1447" output, then add the following to the top of your test runner file:
          code-block-slotted(:header="false" language="typescript")
            template(v-slot:code)
              | Deno.env().DRASH_PROCESS = "test";

