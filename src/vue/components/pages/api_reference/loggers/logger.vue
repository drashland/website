<template lang="pug">
page-api-reference(:data="data" link="/src/loggers/logger.ts")
</template>

<script>
export const resource = {
    paths: ["/api-reference/loggers/logger"],
    meta: {
        title: "Logger",
    }
}

export default {
    data() {
        return {
            data: {
              class_name: "Drash.Loggers.Logger",
              class: this.$store.page_data.api_reference.Loggers.Logger
            }
        };
    }
}
</script>
