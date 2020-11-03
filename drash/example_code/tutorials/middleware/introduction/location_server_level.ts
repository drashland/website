const server = new Drash.Http.Server({
  middleware: {
    compile_time: [
      ServeTypeScript,
    ],
    before_request: [
      Auth,
    ],
    after_resource: [
      TemplateEngine,
    ],
    after_request: [
      CleanUpData,
    ]
  },
  resources: [
    HomeResource
  ],
  response_output: "application/json",
});
