<template lang="pug">
page-api-reference-interface(:data="data" link="/src/interfaces/logger_configs.ts")
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
                interface_name: "Drash.Interfaces.LoggerConfigs",
                interface: this.$store.page_data.api_reference.Interfaces.LoggerConfigs,
            }
        };
    }
}
</script>
