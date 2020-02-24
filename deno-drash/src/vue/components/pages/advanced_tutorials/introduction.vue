<template lang="pug">
page
    div.row
        div.col
            hr
            h2-hash About The Advanced Tutorials
            p The advanced tutorials assume you have read through the following tutorials:
            ul
              li Resources
              li Requests
              li Servers
            p All advanced tutorials come as a series of tutorial parts. The parts are ordered in a way to help you build towards the tutorial's end state from scratch. In each part, you will see a Folder Structure End State section. That section shows you what your project's folder structure should look like by the time you finish the part you are on. In addition, there will be a Verification section (the last section of each part) to help you match your end state to the tutorial's end state.
    div.row
        div.col
            hr
            h2-hash Example Code
            p All tutorials have example code blocks that work if copied and pasted. This is for your convenience. Also, almost all code blocks in the tutorials can be found in the repository <a href="https://github.com/drashland/deno-drash-docs/tree/master/src/example_code" target="_BLANK">here</a>.
</template>

<script>
export const resource = {
    paths: [
        "/advanced-tutorials",
        "/advanced-tutorials/introduction"
    ],
    meta: {
        title: "Advanced Tutorials: Introduction"
    }
}

export default {
    data() {
        return {};
    },
}
</script>
