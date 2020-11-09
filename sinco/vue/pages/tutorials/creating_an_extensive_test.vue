<script>
import H2Hash from "/common/vue/h2_hash.vue";
import Page from "/common/vue/page.vue";
import CodeBlock from "/common/vue/code_block.vue";

const title = "Creating an Extensive Test";

export const resource = {
  paths: [
    "/tutorials/creating-an-extensive-test",
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
      base_url: this.$conf.sinco.base_url + "/#",
      title: title,
      toc: [
        "Before You Get Started",
        "Folder Structure End State",
        "Steps",
        "Verification",
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
  p In this tutorial, you will:
  ul
    li Create a headless browser instance;
    li Click links;
    li Type into input fields; and
    li Make assertions about the current page following these actions.
  hr
  h2-hash Folder Structure End State
  code-block(:header="false" language="text" :line_numbers="false")
    | ▾ /path/to/your/project/
    |     app_test.ts
  hr
  h2-hash Steps
  ol
    li
      p Create your test file.
      code-block(title="/path/to/your/project/app.ts" language="typescript")
        | import { Sinco } from "https://deno.land/x/sinco@{{ $conf.sinco.latest_version }}/mod.ts";
        | import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
        |
        | Deno.test("My web app works as expected", function () {
        |   const sinco = Sinco.build("https://chromestatus.com"); // using this page as an example
        |   await sinco.assertUrlIs("https://chromestatus.com/features");
        |   await sinco.type('input[placeholder="Filter"]', "hello world");
        |   const val = await sinco.getInputValue('input[placeholder="Filter"]');
        |   assertEquals(val, "hello world");
        |   await sinco.click('a[href="/features/schedule"]');
        |   await sinco.assertUrlIs("https://chromestatus.com/features/schedule");
        |   await sinco.done(); // Must be used when finished
        | })
  hr
  h2-hash Verification
  ol
    li
      p Runn your test.
      code-block(title="Terminal" language="shell-session")
        | $ deno test --allow-run --allow-net app_test.ts
    li
      p All of your tests should pass.
</template>

