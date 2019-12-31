export default {
  deno_drash: {
    directory: "/home/runner/work/deno-drash-docs/deno-drash",
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
    directory: "/home/runner/work/deno-drash-docs/deno-drash-docs",
  }
}
