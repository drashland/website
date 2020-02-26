<template lang="pug">
page-api-reference-interface(:data="data" link="/src/interfaces/server_configs.ts")
</template>

<script>
export const resource = {
  paths: ["/api-reference/interfaces/server-configs"],
    meta: {
        title: "ServerConfigs",
    }
}

export default {
    data() {
        return {
            data: {
                interface_name: "Drash.Interfaces.ServerConfigs",
                interface: this.$store.page_data.api_reference.Interfaces.ServerConfigs,
            }
        };
    }
}
</script>

