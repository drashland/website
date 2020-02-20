<template lang="pug">
page-api-reference(:data="data" link="/src/exceptions/http_exception.ts")
</template>

<script>
export const resource = {
    paths: ["/api-reference/exceptions/http-exception"],
    meta: {
        title: "HttpException",
    }
}

export default {
    data() {
        return {
            data: {
              class_name: "Drash.Exceptions.HttpException",
              class: this.$store.page_data.api_reference.Exceptions.HttpException
            }
        };
    }
}
</script>
