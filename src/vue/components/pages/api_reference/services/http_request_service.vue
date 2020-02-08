<template lang="pug">
page-api-reference(:data="data" link="/src/services/http_request_service.ts")
</template>

<script>
export const resource = {
    paths: ["/api-reference/services/http-request-service"],
    meta: {
        title: "HttpRequestService",
    }
}

export default {
    data() {
        return {
            data: {
                class: this.$store.page_data.api_reference["Drash.Services"].HttpRequestService
            }
        };
    }
}
</script>
