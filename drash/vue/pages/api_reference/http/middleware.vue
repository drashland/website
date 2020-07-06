<template lang="pug">
page-api-reference(:data="data" link="/src/http/middleware.ts")
</template>

<script>
export const resource = {
    paths: ["/api-reference/http/middleware"],
    meta: {
        title: "Middleware",
    }
}

export default {
    data() {
        return {
            data: {
              class_name: "Drash.Http.Middleware",
              class: this.$api_reference.Http.Middleware
            }
        };
    }
}
</script>
