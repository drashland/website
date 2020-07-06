<template lang="pug">
page-api-reference(:data="data" link="/src/http/server.ts")
</template>

<script>
export const resource = {
    paths: ["/api-reference/http/server"],
    meta: {
        title: "Server",
    }
}

export default {
    data() {
        return {
            data: {
              class_name: "Drash.Http.Server",
              class: this.$api_reference.Http.Server
            }
        };
    }
}
</script>
