<template lang="pug">
page-api-reference-interface(:data="data" link="/src/interfaces/log_level_structure.ts")
</template>

<script>
export const resource = {
  paths: ["/api-reference/interfaces/log-level-structure"],
    meta: {
        title: "LogLevelStructure",
    }
}

export default {
    data() {
        return {
            data: {
                interface_name: "Drash.Interfaces.LogLevelStructure",
                interface: this.$api_reference.Interfaces.LogLevelStructure,
            }
        };
    }
}
</script>

