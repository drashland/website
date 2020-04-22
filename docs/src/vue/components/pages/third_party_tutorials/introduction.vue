<template lang="pug">
page
    div.row
        div.col
            hr
            h2-hash About The Third Party Tutorials
            p The third party tutorials assume you have read through the following tutorials:
            ul
              li Resources
              li Requests
              li Server
            p Drash does not manage or contribute to any of the third party modules mentioned in the third party tutorials. Plese take issues regarding third party modules to their authors.
    div.row
        div.col
            hr
            h2-hash Example Code
            p All tutorials have example code blocks that work if copied and pasted. This is for your convenience. Also, almost all code blocks in the tutorials can be found in the repository <a href="https://github.com/drashland/deno-drash-docs/tree/master/src/example_code" target="_BLANK">here</a>.
</template>

<script>
export const resource = {
    paths: [
        "/third-party-tutorials",
        "/third-party-tutorials/introduction"
    ],
    meta: {
        title: "Third Party Tutorials: Introduction"
    }
}

export default {
    data() {
        return {};
    },
}
</script>
