<style lang="scss">
$g-font-family-code: SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;
.page--reference {
    p {
        margin-bottom: 1rem;
    }
    .type-heading {
        margin-bottom: 2rem;
        padding: 1rem;
        &.--class {
            color: #efefef;
            background: #000;
        }
        &.--methods {
            // border-bottom: 4px solid #ff7700;
            color: #efefef;
            background: #ff7700;
            padding: 0.5rem 1rem;
        }
        &.--exported {
            color: #efefef;
            background: #03a9f4;
            padding: 0.5rem 1rem;
            // border-bottom: 4px solid #03a9f4;
        }
    }
    .card {
        margin-bottom: 2rem;
        &.--method {
            border-left: 10px solid #ff7700;
        }
        &.--exported {
            border-left: 10px solid #333333;
        }
    }
    .card-title {
        font-size: 1.2rem;
    }
    .tag-row {
        margin-bottom: 1rem;
        &:last-of-type {
            margin-bottom: 0;
        }
    }
    .tag-row__heading {
        display: block;
        margin-bottom: 1rem;
    }
    .tag-row p:last-of-type {
        margin-bottom: 0;
    }
    .tag-row ul {
        margin-top: 0;
    }
    .tag-row ul li ul,
    .tag-row ul ul {
        margin-top: 1rem;
        margin-bottom: 0;
    }
}
</style>

<template lang="pug">
div.page.page--reference
    div.c-page__header
        div.row
            div.col
                h1.c-heading.c-heading--style-2 API Reference
    div.c-page__body
        hr
        div.row
            div.col
                h2 {{ data.interface_name }}
                p
                    a(:href="'https://github.com/drashland/deno-drash/tree/master' + link" target="_BLANK" v-if="link") View raw code
        hr
        div.row(v-for="member in data.interface")
            div.col
                div.exported
                    div.card.--exported(v-for="(member) in data.interface")
                        div.card-body
                            div.card-title
                                code.c-code-signature.language-typescript {{ member.signature }}
                            hr(style="margin: 1rem 0")
                            p
                              code-block-slotted(language="typescript" :header="false")
                                template(v-slot:code)
                                  | {{ member.doc_block }}
</template>

<script>
export default {
    props: [
        'data',
        'link'
    ],
    data() {
        return {
            raw_code_data: ""
        };
    },
    watch: {
        raw_code_data() {
            setTimeout(function() {
                Prism.highlightAll();
            }, 2000);
        }
    },
    mounted() {
        Prism.highlightAll();
    },
    methods: {
        empty(inputObj) {
            return !inputObj || Object.keys(inputObj).length <= 0;
        },
        replaceNewLines(string) {
            string = string.replace(/\n/g, "<br>");
            return string;
        }
    }
}
</script>
