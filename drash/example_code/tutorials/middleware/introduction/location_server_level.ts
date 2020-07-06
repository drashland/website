const server = new Drash.Http.Server({
  middleware: {
    before_request: [
      AuthMiddleware,
      CacheMiddleware,
    ],
    after_request: [
      SomeOtherMiddleware,
    ]
  },
  resources: [
    HomeResource
  ],
  response_output: "application/json",
});
