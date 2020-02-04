<template lang="pug">
page-api-reference-members-only(:data="data" link="/src/loggers/interfaces/logger_configs.ts")
</template>

<script>
export const resource = {
  paths: ["/api-reference/interfaces/logger-configs"],
    meta: {
        title: "LoggerConfigs",
    }
}

export default {
    data() {
        return {
            data: {
                namespace: this.$store.page_data.api_reference["Drash.Interfaces.LoggerConfigs"],
                fully_qualified_name: "Drash.Interfaces.LoggerConfigs"
            }
        };
    }
}
</script>
