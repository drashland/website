const server = new Drash.Http.Server({
  middleware: {
    server_level: {
      before_request: [
        OneMiddleware,
        TwoMiddleware
      ]
    },
    resource_level: [
      RedMiddleware,
      BlueMiddleware
    ]
  },
  resources: [
    HomeResource
  ],
  response_output: "application/json",
});
