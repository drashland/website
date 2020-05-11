export default {
  manual_build: "202004241834",
  example_code_versions: {
    deno: "v1.0.0-rc1",
    drash: `import { Drash } from "https://deno.land/x/drash@v1.0.0-rc1/mod.ts";`
  },
  deno_drash: {
    directory: "/Users/runner/runners/2.169.1/work/deno-drash-website/deno-drash",
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
    directory: "/Users/runner/runners/2.169.1/work/deno-drash-website/deno-drash-website/docs",
  }
}
