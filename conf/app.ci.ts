export default {
  deno_drash: {
    directory: "/Users/runner/runners/2.163.1/work/deno-drash-docs/deno-drash",
  },
  logger: {
    enabled: false,
    level: "info",
    tag_string: "{date} | {level} |",
    tag_string_fns: {
      date: function() {
        return new Date().toISOString().replace("T", " ");
      },
    },
  },
  server: {
    directory: "/Users/runner/runners/2.163.1/work/deno-drash-docs/deno-drash-docs",
  }
}
