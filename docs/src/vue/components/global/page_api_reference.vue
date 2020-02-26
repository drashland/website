<style lang="scss">
$g-font-family-code: SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;
.page--reference {
    p {
        margin-bottom: 1rem;
    }
    .heading-class-name {
        background: #000;
        color: #efefef;
        font-family: $g-font-family-code;
        padding: rem(1);
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
        &.--properties {
            color: #efefef;
            background: #03a9f4;
            padding: 0.5rem 1rem;
            // border-bottom: 4px solid #03a9f4;
        }
        &.--class {
            color: #efefef;
            background: #000000;
            padding: 0.5rem 1rem;
            // border-bottom: 4px solid #03a9f4;
        }
    }
    .card {
        margin-bottom: 2rem;
        &.--method {
            border-left: 10px solid #ff7700;
        }
        &.--property {
            border-left: 10px solid #03a9f4;
        }
        &.--class {
            border-left: 10px solid #000000;
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
                h2 {{ data.class_name }}
                p
                    a(:href="'https://github.com/drashland/deno-drash/tree/master' + link" target="_BLANK" v-if="link") View raw code
        hr
        div.row
            div.col
                //- CLASS PROPERTIES
                h2.type-heading.--class Class
                div.properites
                    div.card.--class(v-for="(member) in data.class" v-if="member.member_type == 'class'")
                        div.card-body
                            div.card-title
                                code.c-code-signature.language-typescript {{ member.signature }}
                            hr(style="margin: 1rem 0")
                            p
                              code-block-slotted(language="typescript" :header="false")
                                template(v-slot:code)
                                  | {{ member.doc_block }}
        hr
        div.row
            div.col
                //- CLASS PROPERTIES
                h2.type-heading.--properties Properties
                div.properites
                    div.card.--property(v-for="(member) in data.class" v-if="member.member_type == 'property'")
                        div.card-body
                            div.card-title
                                code.c-code-signature.language-typescript {{ member.signature }}
                            hr(style="margin: 1rem 0")
                            p
                              code-block-slotted(language="typescript" :header="false")
                                template(v-slot:code)
                                  | {{ member.doc_block }}
                    div.card.--property(v-show="!has_properties")
                        div.card-body
                            span This class does not have any properties.
        hr
        div.row
            div.col
                //- CLASS METHODS
                h2.type-heading.--methods Methods
                div.methods
                    div.card.--method(v-for="(member) in data.class" v-if="member.member_type == 'method'")
                        div.card-body
                            div.card-title
                                code.c-code-signature.language-typescript {{ member.signature }}
                            hr(style="margin: 1rem 0")
                            p
                              code-block-slotted(language="typescript" :header="false")
                                template(v-slot:code)
                                  | {{ member.doc_block }}
                    div.card.--method(v-show="!has_methods")
                        div.card-body
                            span This class does not have any methods.
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
    computed: {
      has_methods() {
        return this.data.class.filter((datum) => {
          return datum.member_type == "method";
        }).length > 0;
      },
      has_properties() {
        return this.data.class.filter((datum) => {
          return datum.member_type == "property";
        }).length > 0;
      }
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
        }
    }
}
</script>
