export default {
  deno_drash: {
    directory: "/var/www/deno-drash",
  },
  logger: {
    enabled: config.logger.enabled,
    level: config.logger.level,
    tag_string: "{date} | {level} |",
    tag_string_fns: {
      date: function() {
        return new Date().toISOString().replace("T", " ");
      }
    }
  },
  server: {
    directory: "/var/www/deno-drash-docs"
  }
}
