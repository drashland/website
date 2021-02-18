module.exports = {
  apps: [
    {
      cwd: "/path/to/website",
      name: "Drash Land",
      script: "deno run --allow-net --allow-read ./app.ts",
      watch: "true",
    },
  ]
};
