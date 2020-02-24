<template lang="pug">
page-api-reference-interface(:data="data" link="/src/interfaces/parsed_request_body.ts")
</template>

<script>
export const resource = {
  paths: ["/api-reference/interfaces/parsed-request-body"],
    meta: {
        title: "ParsedRequestBody",
    }
}

export default {
    data() {
        return {
            data: {
                interface_name: "Drash.Interfaces.ParsedRequestBody",
                interface: this.$store.page_data.api_reference.Interfaces.ParsedRequestBody,
            }
        };
    }
}
</script>

