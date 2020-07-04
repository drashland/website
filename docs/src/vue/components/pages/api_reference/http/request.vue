<template lang="pug">
page-api-reference(:data="data" link="/src/http/request.ts")
</template>

<script>
export const resource = {
    paths: ["/api-reference/http/request"],
    meta: {
        title: "Request",
    }
}

export default {
    data() {
        return {
            data: {
              class_name: "Drash.Http.Request",
              class: this.$store.page_data.api_reference.Http.Request
            }
        };
    }
}
</script>
