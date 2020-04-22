const server = new Drash.Http.Server({
  middleware: {
    resource_level: [
      MyFirstMiddleware,
      MySecondMiddleware,
      MyThirdMiddleware
    ]
  },
  resources: [
    HomeResource
  ],
  response_output: "application/json",
});
