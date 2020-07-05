<template lang="pug">
page-api-reference(:data="data" link="/src/http/response.ts")
</template>

<script>
export const resource = {
    paths: ["/api-reference/http/response"],
    meta: {
        title: "Response",
    }
}

export default {
    data() {
        return {
            data: {
              class_name: "Drash.Http.Response",
              class: this.$api_reference.Http.Response
            }
        };
    }
}
</script>
