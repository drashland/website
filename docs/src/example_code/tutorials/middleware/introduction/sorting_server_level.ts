const server = new Drash.Http.Server({
  middleware: {
    before_request: [
      OneMiddleware,
      TwoMiddleware
    ]
  },
  resources: [
    HomeResource
  ],
  response_output: "application/json",
});
