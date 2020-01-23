let server = new Drash.Http.Server({
  address: "localhost:1447",
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
