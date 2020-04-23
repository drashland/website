export default {
  example_code_versions: {
    deno: "v0.41.0",
    drash: `import { Drash } from "https://deno.land/x/drash@v0.41.1/mod.ts";`
  },
  deno_drash: {
    directory: "/var/src/drashland/deno-drash",
  },
  logger: {
    enabled: true,
    level: "info",
    tag_string: "{date} | {level} |",
    tag_string_fns: {
      date: function() {
        return new Date().toISOString().replace("T", " ");
      },
    },
  },
  server: {
    directory: "/var/src/drashland/deno-drash-website/docs",
  }
}
