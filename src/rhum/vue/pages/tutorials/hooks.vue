<script>
import H2Hash from "/common/vue/h2_hash.vue";
import Page from "/common/vue/page.vue";
import CodeBlock from "/common/vue/code_block.vue";

const title = "Hooks";

export const resource = {
  paths: [
    "/tutorials/hooks",
  ],
  meta: {
    title: title
  }
}

export default {
  components: {
    CodeBlock,
    H2Hash,
    Page,
  },
  data() {
    return {
      base_url: this.$conf.rhum.base_url + "/#",
      title: title,
      toc: [
        "Before You Get Started",
        "Creating Before Hooks",
        "Creating After Hooks",
      ],
    };
  }
}
</script>

<template lang="pug">
page(
  :base_url="base_url"
  :title="title"
  :toc="toc"
)
  h2-hash Before You Get Started
  p Hooks are functions that contain the code that can be executed before or after tests.
  P The benefit of this is, if you need to re-define a variable after each test, or if you need to create a user in the database before each test.
  p Hooks allow you re-use code, by running it before or after a test case. There are a total of 4 hooks you can use:
  ul
    li <code>beforeEach</code> - A hook to be ran before each cases inside a suite or a suite itself.
    li <code>beforeAll</code> - A hook to be ran before all test cases inside a suite or a suite itself.
    li <code>afterEach</code> - A hook to be ran after each test case inside a suite or a suite itself
    li <code>afterAll</code> - A hook to be ran after all test cases inside a suite or a suite itself
  p Hooks can be applied to test cases or test suites, meaning before or after every test suite (which would also include every test case in that suite)
  hr
  h2-hash Creating Before Hooks
  p Before hooks have many useful purposes such as resetting or creating data before a test case runs. An example of this is creating a new user in the database for each test case to use (if those test cases update the user object)
  p Creating before hooks can be done as follows:
  code-block(:header="false" language="typescript")
    | Rhum.testPlan("My Plan", () => {
    |   let val = 0;
    |   Rhum.beforeAll(() => { // Defined inside the plan, so it will run before each suite
    |     val = 1
    |   })
    |   Rhum.testSuite("My Suite", () => {
    |     // Here, `val` should be 1
    |
    |     Rhum.beforeEach(() => { // Defined inside a suite, so ran before each test case inside
    |       val = 2
    |     })
    |
    |     Rhum.testCase("My Case", () => {
    |       // Here, `val` should be 2
    |     })
    |   })
    | })
  hr
  h2-hash Creating After Hooks
  p An example of this, can be removing a test user in the database after each test case (if those test cases or before hooks create users)
  p Creating after hooks can be done as follows:
  code-block(:header="false" language="typescript")
    | Rhum.testPlan("My Plan", () => {
    |   let val = 0;
    |   Rhum.afterAll(() => { // Defined inside the plan, so it will run after each suite
    |     val = 1
    |   })
    |   Rhum.testSuite("My Suite", () => {
    |     // Here, `val` should be 0
    |
    |     Rhum.afterEach(() => { // Defined inside a suite, so ran after each test case inside
    |       val = 2
    |     })
    |
    |     Rhum.testCase("My Case", () => {
    |       // Here, `val` should be 0
    |     })
    |   })
    | })
  p Remember: all four types of hooks can be applied for any test suites or test cases.
</template>
