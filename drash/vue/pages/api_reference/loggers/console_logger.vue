<template lang="pug">
page-api-reference(:data="data" link="/src/loggers/console_logger.ts")
</template>

<script>
export const resource = {
    paths: ["/api-reference/loggers/console-logger"],
    meta: {
        title: "ConsoleLogger",
    }
}

export default {
    data() {
        return {
            data: {
              class_name: "Drash.Loggers.ConsoleLogger",
              class: this.$api_reference.Loggers.ConsoleLogger
            }
        };
    }
}
</script>
